module Screens.TrainRoutes.Model exposing (Model, model)

import Api.Train exposing (TrainRoute)


type alias Model =
    { routes : List TrainRoute
    }


model : List TrainRoute -> Model
model routes =
    { routes = routes
    }
