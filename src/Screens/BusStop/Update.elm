module Screens.BusStop.Update exposing (Msg(..), update)

import String
import Task
import Utils exposing (..)
import Screens.BusStop.Utils exposing (..)
import Task exposing (Task)
import Api.Bus as BusApi exposing (BusPrediction, BusStop, Direction)
import Api.Favorites as FavoritesApi exposing (BusStopSummary)
import Screens.BusStop.Model as Model exposing (Model)


type Msg
    = NoOp
    | ReloadPredictionsStart
    | ReloadPredictionsFinish (Result String (List BusPrediction))
    | FavoriteButtonClicked
    | FavoriteToggled Bool


getPredictionsForStops : String -> List BusStop -> Task String (List BusPrediction)
getPredictionsForStops routeId stops =
    stops
        |> List.map (.id >> (BusApi.getBusPredictions routeId))
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

        FavoriteButtonClicked ->
            let
                task =
                    if model.isFavorited then
                        FavoritesApi.removeBusFavorite (toBusStopSummary model.routeId model.busStops)
                    else
                        FavoritesApi.saveBusFavorite (toBusStopSummary model.routeId model.busStops)
            in
                ( model
                , task |> Task.perform (\_ -> NoOp) (\_ -> FavoriteToggled (not model.isFavorited))
                )

        FavoriteToggled isFavorited ->
            ( { model | isFavorited = isFavorited }
            , Cmd.none
            )
