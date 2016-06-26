module BusRoutes.Model exposing (Model, model)

import Utils exposing (..)
import Api exposing (BusRouteSummary)


type alias Model =
    { routes : LoadState String (List BusRouteSummary)
    }


model : Model
model =
    { routes = Initial
    }
