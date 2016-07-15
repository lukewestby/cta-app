module Screens.BusStop.Utils exposing (..)

import Api.Bus exposing (BusStop)
import Api.Favorites exposing (BusStopSummary)


toBusStopSummary : String -> List BusStop -> BusStopSummary
toBusStopSummary routeId busStops =
    { name = List.head busStops |> Maybe.map .name |> Maybe.withDefault ""
    , stopIds = List.map .id busStops |> List.sort
    , routeId = routeId
    }
