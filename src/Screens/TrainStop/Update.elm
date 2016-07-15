module Screens.TrainStop.Update exposing (Msg(..), update)

import Task
import Utils exposing (..)
import Screens.TrainStop.Utils exposing (..)
import Task exposing (Task)
import Api.Train as TrainApi exposing (TrainPrediction, TrainStop)
import Api.Favorites as FavoritesApi exposing (TrainStopSummary)
import Screens.TrainStop.Model as Model exposing (Model)


type Msg
    = ReloadPredictionsStart
    | ReloadPredictionsFinish (Result String (List TrainPrediction))
    | FavoriteButtonClicked
    | FavoriteToggled Bool
    | NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ReloadPredictionsStart ->
            ( model
            , TrainApi.getTrainPredictions model.routeId model.stop.id
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
                        FavoritesApi.removeTrainFavorite (toTrainStopSummary model.routeId model.stop)
                    else
                        FavoritesApi.saveTrainFavorite (toTrainStopSummary model.routeId model.stop)
            in
                ( model
                , task |> Task.perform (\_ -> NoOp) (\_ -> FavoriteToggled (not model.isFavorited))
                )

        FavoriteToggled isFavorited ->
            ( { model | isFavorited = isFavorited }
            , Cmd.none
            )

        NoOp ->
            ( model, Cmd.none )
