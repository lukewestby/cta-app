module Screens.BusStop.Subscriptions exposing (subscriptions)

import Time
import Screens.BusStop.Model exposing (Model)
import Screens.BusStop.Update exposing (Msg(..))


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every (60 * Time.second) (always ReloadPredictionsStart)
