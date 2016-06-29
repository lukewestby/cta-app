module BusRoutes.Model exposing (Model, model)

import Api exposing (BusRouteSummary)


type alias Model =
    { routes : List BusRouteSummary
    }


model : List BusRouteSummary -> Model
model routes =
    { routes = routes
    }
