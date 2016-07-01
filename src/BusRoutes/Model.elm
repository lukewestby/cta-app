module BusRoutes.Model exposing (Model, model)

import Api exposing (BusRouteSummary)
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
