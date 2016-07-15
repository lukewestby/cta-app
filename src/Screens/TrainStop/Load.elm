module Screens.TrainStop.Load exposing (load)

import Task
import Utils exposing (..)
import Screens.TrainStop.Utils exposing (..)
import Task exposing (Task)
import Api.Train as TrainApi exposing (TrainPrediction, TrainStop)
import Api.Favorites as FavoritesApi exposing (TrainStopSummary)
import Screens.TrainStop.Model as Model exposing (Model)


load : String -> String -> Task String Model
load routeId stopId =
    let
        stopAndPredictionsToIsFavorited ( stop, predictions ) =
            FavoritesApi.getTrainFavorites
                |> Task.map (List.member (toTrainStopSummary routeId stop))
                |> Task.map (\isFavorited -> ( stop, predictions, isFavorited ))

        stopToPredictions stop =
            TrainApi.getTrainPredictions routeId stopId
                |> Task.map (\predictions -> ( stop, predictions ))
    in
        TrainApi.getTrainStop routeId stopId
            |> andThen stopToPredictions
            |> andThen stopAndPredictionsToIsFavorited
            |> Task.map (\( stop, predictions, isFavorited ) -> Model.model isFavorited stop predictions routeId)
