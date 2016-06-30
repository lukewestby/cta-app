module BusStop.Model exposing (Model, model)

import Api exposing (BusStop, BusPrediction)


type alias Model =
    { busStop : BusStop
    , predictions : List BusPrediction
    , routeId : String
    }


model : BusStop -> List BusPrediction -> String -> Model
model =
    Model
