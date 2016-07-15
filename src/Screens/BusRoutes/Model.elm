module Screens.BusRoutes.Model exposing (Model, model)

import Api.Bus exposing (BusRouteSummary)
import Components.SearchBar as SearchBar


type alias Model =
    { routes : List BusRouteSummary
    , searchModel : SearchBar.Model
    }


model : List BusRouteSummary -> Model
model routes =
    { routes = routes
    , searchModel = SearchBar.model
    }
