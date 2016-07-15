module Screens.BusRoute.Load exposing (load)

import Task exposing (Task)
import Utils exposing (..)
import Api.Bus as BusApi exposing (BusRoute, BusStop, Direction)
import Screens.BusRoute.Model as Model exposing (Model)


load : String -> Task String Model
load routeId =
    let
        routeToStops route =
            BusApi.getBusStops route.id
                |> Task.map (\stops -> ( route, stops ))
    in
        BusApi.getBusRoute routeId
            |> andThen routeToStops
            |> Task.map (\( route, stops ) -> Model.model route stops)
