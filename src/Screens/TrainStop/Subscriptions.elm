module Screens.TrainStop.Subscriptions exposing (subscriptions)

import Time
import Screens.TrainStop.Model exposing (Model)
import Screens.TrainStop.Update exposing (Msg(..))


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every (60 * Time.second) (always ReloadPredictionsStart)
