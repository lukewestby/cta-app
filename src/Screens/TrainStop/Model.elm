module Screens.TrainStop.Model exposing (Model, model)

import Api.Train exposing (TrainStop, TrainPrediction)


type alias Model =
    { isFavorited : Bool
    , stop : TrainStop
    , predictions : List TrainPrediction
    , routeId : String
    }


model : Bool -> TrainStop -> List TrainPrediction -> String -> Model
model =
    Model
