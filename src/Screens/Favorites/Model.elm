module Screens.Favorites.Model exposing (Model, model)

import Api.Favorites exposing (BusStopSummary, TrainStopSummary)


type alias Model =
    { busFavorites : List BusStopSummary
    , trainFavorites : List TrainStopSummary
    }


model : List BusStopSummary -> List TrainStopSummary -> Model
model =
    Model
