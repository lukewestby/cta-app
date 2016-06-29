module BusStop.Update exposing (Msg(..), load, update)

import Utils exposing (..)
import Task exposing (Task)
import Api exposing (BusPrediction, BusStop, Direction)
import BusStop.Model as Model exposing (Model)


type Msg
    = NoOp


load : String -> Direction -> String -> Task String Model
load routeId direction stopId =
    let
        stopToStopAndPredictions stop =
            Api.getBusPredictions stopId
                |> Task.map (\predictions -> ( stop, predictions ))
    in
        Api.getBusStop routeId direction stopId
            |> andThen stopToStopAndPredictions
            |> Task.map (\( stop, predictions ) -> Model.model stop predictions)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )
