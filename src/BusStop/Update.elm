module BusStop.Update exposing (Msg(..), load, update)

import String
import Task
import Utils exposing (..)
import Task exposing (Task)
import Api exposing (BusPrediction, BusStop, Direction)
import Favorites
import BusStop.Model as Model exposing (Model)


type Msg
    = NoOp
    | ReloadPredictionsStart
    | ReloadPredictionsFinish (Result String (List BusPrediction))
    | SaveFavorite
    | SaveFavoriteSucceed
    | RemoveFavorite
    | RemoveFavoriteSucceed


load : String -> String -> Task String Model
load routeId stopGroupIds =
    let
        stopIds =
            String.split "-" stopGroupIds

        stopsTask =
            stopIds
                |> List.map (Api.getBusStop routeId)
                |> Task.sequence

        stopsToPredictions stops =
            stopIds
                |> List.map (Api.getBusPredictions routeId)
                |> Task.sequence
                |> Task.map List.concat
                |> Task.map (\predictions -> ( stops, predictions ))

        stopsPredictionsToFavorites ( stops, predictions ) =
            Favorites.getFavorites
                |> Task.map (List.member (Favorites.Bus stopGroupIds))
                |> Task.map (\isFavorited -> ( stops, predictions, isFavorited ))
    in
        stopsTask
            |> andThen stopsToPredictions
            |> andThen stopsPredictionsToFavorites
            |> Task.map (\( stops, predictions, isFavorited ) -> Model.model isFavorited stops predictions routeId)


getPredictionsForStops : String -> List BusStop -> Task String (List BusPrediction)
getPredictionsForStops routeId stops =
    stops
        |> List.map (.id >> (Api.getBusPredictions routeId))
        |> Task.sequence
        |> Task.map List.concat


groupStopIds : List BusStop -> String
groupStopIds stops =
    stops
        |> List.map .id
        |> List.sort
        |> String.join "-"


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        ReloadPredictionsStart ->
            ( model
            , getPredictionsForStops model.routeId model.busStops
                |> performSucceed ReloadPredictionsFinish
            )

        ReloadPredictionsFinish result ->
            case result of
                Ok predictions ->
                    ( { model | predictions = predictions }
                    , Cmd.none
                    )

                Err _ ->
                    ( model, Cmd.none )

        SaveFavorite ->
            ( model
            , Favorites.saveFavorite (Favorites.Bus (groupStopIds model.busStops))
                |> Task.perform (always NoOp) (always SaveFavoriteSucceed)
            )

        SaveFavoriteSucceed ->
            ( { model | isFavorited = True }
            , Cmd.none
            )

        RemoveFavorite ->
            ( model
            , Favorites.removeFavorite (Favorites.Bus (groupStopIds model.busStops))
                |> Task.perform (always NoOp) (always RemoveFavoriteSucceed)
            )

        RemoveFavoriteSucceed ->
            ( { model | isFavorited = False }
            , Cmd.none
            )
