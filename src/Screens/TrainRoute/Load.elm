module Screens.TrainRoute.Load exposing (load)

import Task exposing (Task)
import Utils exposing (..)
import Api.Train as TrainApi exposing (TrainRoute, TrainStop)
import Screens.TrainRoute.Model as Model exposing (Model)


load : String -> Task String Model
load routeId =
    let
        routeToStops route =
            TrainApi.getTrainStops route.id
                |> Task.map (\stops -> ( route, stops ))
    in
        TrainApi.getTrainRoute routeId
            |> andThen routeToStops
            |> Task.map (\( route, stops ) -> Model.model route stops)
