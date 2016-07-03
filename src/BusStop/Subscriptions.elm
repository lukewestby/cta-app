module BusStop.Subscriptions exposing (subscriptions)

import Time
import BusStop.Model exposing (Model)
import BusStop.Update exposing (Msg(..))


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every (60 * Time.second) (always ReloadPredictionsStart)
