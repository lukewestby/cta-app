module Screens.BusRoutes.Load exposing (load)

import Task exposing (Task)
import Api.Bus as BusApi exposing (BusRouteSummary)
import Screens.BusRoutes.Model as Model exposing (Model)


load : Task String Model
load =
    BusApi.getBusRoutes
        |> Task.map Model.model
