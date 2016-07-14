module TrainStop.Update exposing (Msg(..), load, update)

import Task
import Utils exposing (..)
import Task exposing (Task)
import Api.Train as TrainApi exposing (TrainPrediction, TrainStop)
import TrainStop.Model as Model exposing (Model)


type Msg
    = NoOp
    | ReloadPredictionsStart
    | ReloadPredictionsFinish (Result String (List TrainPrediction))


load : String -> String -> Task String Model
load routeId stopId =
    let
        stopToPredictions stop =
            TrainApi.getTrainPredictions routeId stopId
                |> Task.map (\predictions -> ( stop, predictions ))
    in
        TrainApi.getTrainStop routeId stopId
            |> andThen stopToPredictions
            |> Task.map (\( stop, predictions ) -> Model.model False stop predictions routeId)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

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
