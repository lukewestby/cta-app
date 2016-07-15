module Screens.BusStop.Load exposing (..)

import String
import Task
import Utils exposing (..)
import Screens.BusStop.Utils exposing (..)
import Task exposing (Task)
import Api.Bus as BusApi exposing (BusPrediction, BusStop, Direction)
import Api.Favorites as FavoritesApi exposing (BusStopSummary)
import Screens.BusStop.Model as Model exposing (Model)


load : String -> String -> Task String Model
load routeId stopGroupIds =
    let
        stopIds =
            String.split "-" stopGroupIds

        stopsTask =
            stopIds
                |> List.map (BusApi.getBusStop routeId)
                |> Task.sequence

        stopsToPredictions stops =
            stopIds
                |> List.map (BusApi.getBusPredictions routeId)
                |> Task.sequence
                |> Task.map List.concat
                |> Task.map (\predictions -> ( stops, predictions ))

        stopsPredictionsToFavorites ( stops, predictions ) =
            FavoritesApi.getBusFavorites
                |> Task.map (List.member (toBusStopSummary routeId stops))
                |> Task.map (\isFavorited -> ( stops, predictions, isFavorited ))
    in
        stopsTask
            |> andThen stopsToPredictions
            |> andThen stopsPredictionsToFavorites
            |> Task.map (\( stops, predictions, isFavorited ) -> Model.model isFavorited stops predictions routeId)
