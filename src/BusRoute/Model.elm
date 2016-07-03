module BusRoute.Model exposing (Model, model)

import String
import Api exposing (BusRoute, BusStop, Direction)
import Dict exposing (Dict)
import Dict.Extra as Dict
import Components.SearchBar as SearchBar


type alias Model =
    { searchModel : SearchBar.Model
    , route : BusRoute
    , stops : Dict String (List BusStop)
    }


model : BusRoute -> List BusStop -> Model
model route stops =
    let
        groupedStops =
            Dict.groupBy (.name >> String.trim) stops
    in
        { searchModel = SearchBar.model
        , route = route
        , stops = groupedStops
        }
