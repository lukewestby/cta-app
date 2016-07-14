module TrainStop.Subscriptions exposing (subscriptions)

import Time
import TrainStop.Model exposing (Model)
import TrainStop.Update exposing (Msg(..))


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every (60 * Time.second) (always ReloadPredictionsStart)
