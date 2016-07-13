module BusStop.Model exposing (Model, model)

import Api.Bus exposing (BusStop, BusPrediction)


type alias Model =
    { isFavorited : Bool
    , busStops : List BusStop
    , predictions : List BusPrediction
    , routeId : String
    }


model : Bool -> List BusStop -> List BusPrediction -> String -> Model
model =
    Model
