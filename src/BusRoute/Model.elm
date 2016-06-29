module BusRoute.Model exposing (Model, model)

import Api exposing (BusRoute, BusStop, Direction)


type alias Model =
    { searchText : String
    , route : BusRoute
    , stops : List BusStop
    , selectedDirection : Direction
    }


model : BusRoute -> List BusStop -> Model
model route stops =
    { searchText = ""
    , route = route
    , stops = stops
    , selectedDirection = fst route.directions
    }
