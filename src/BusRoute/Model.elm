module BusRoute.Model exposing (Model, model)

import Api exposing (BusRoute, BusStop, Direction)
import Components.SearchBar as SearchBar


type alias Model =
    { searchModel : SearchBar.Model
    , route : BusRoute
    , stops : List BusStop
    , selectedDirection : Direction
    }


model : BusRoute -> List BusStop -> Model
model route stops =
    { searchModel = SearchBar.model
    , route = route
    , stops = stops
    , selectedDirection = fst route.directions
    }
