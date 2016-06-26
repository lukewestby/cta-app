module BusRoute.Model exposing (Model, RouteData, model)

import Utils exposing (..)
import Api exposing (BusRoute, BusStop, Direction)


type alias RouteData =
    { stops : List BusStop
    , route : BusRoute
    , selectedDirection : Direction
    }


type alias Model =
    { routeData : LoadState String RouteData
    , routeId : String
    , searchText : String
    }


model : String -> Model
model routeId =
    { routeData = Initial
    , routeId = routeId
    , searchText = ""
    }
