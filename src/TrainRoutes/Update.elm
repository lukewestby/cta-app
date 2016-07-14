module TrainRoutes.Update exposing (Msg(..), load, update)

import Task exposing (Task)
import Api.Train as TrainApi exposing (TrainRoute)
import TrainRoutes.Model as Model exposing (Model)


type Msg
    = NoOp


load : Task String Model
load =
    TrainApi.getTrainRoutes
        |> Task.map Model.model


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )
