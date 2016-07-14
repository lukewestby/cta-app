module TrainRoutes.Model exposing (Model, model)

import Api.Train exposing (TrainRoute)
import Components.SearchBar as SearchBar


type alias Model =
    { routes : List TrainRoute
    }


model : List TrainRoute -> Model
model routes =
    { routes = routes
    }
