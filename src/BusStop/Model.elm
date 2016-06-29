module BusStop.Model exposing (Model, model)

import Api exposing (BusStop, BusPrediction)


type alias Model =
    { busStop : BusStop
    , predictions : List BusPrediction
    }


model : BusStop -> List BusPrediction -> Model
model =
    Model
