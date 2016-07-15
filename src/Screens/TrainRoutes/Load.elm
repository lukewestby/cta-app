module Screens.TrainRoutes.Load exposing (load)

import Task exposing (Task)
import Api.Train as TrainApi exposing (TrainRoute)
import Screens.TrainRoutes.Model as Model exposing (Model)


load : Task String Model
load =
    TrainApi.getTrainRoutes
        |> Task.map Model.model
