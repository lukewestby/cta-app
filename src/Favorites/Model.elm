module Favorites.Model exposing (Model, model)

import Favorites exposing (BusStopSummary)


type alias Model =
    { busFavorites : List BusStopSummary
    }


model : List BusStopSummary -> Model
model busFavorites =
    { busFavorites = busFavorites
    }
