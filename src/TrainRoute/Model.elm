module TrainRoute.Model exposing (Model, model)

import Api.Train exposing (TrainRoute, TrainStop)
import Components.SearchBar as SearchBar


type alias Model =
    { searchModel : SearchBar.Model
    , route : TrainRoute
    , stops : List TrainStop
    }


model : TrainRoute -> List TrainStop -> Model
model route stops =
    { searchModel = SearchBar.model
    , route = route
    , stops = stops
    }
