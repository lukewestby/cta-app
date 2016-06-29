module BusStop.View exposing (view)

import Html exposing (..)
import Html.CssHelpers
import BusStop.Classes exposing (..)
import Api exposing (BusPrediction)
import BusStop.Model as Model exposing (Model)
import BusStop.Update exposing (Msg(..))
import Icons


viewPrediction : BusPrediction -> Html Msg
viewPrediction prediction =
    div [ class [ StopItem ] ]
        [ span [ class [ ItemIcon ] ] [ Icons.bus ]
        ]


view : Model -> Html Msg
view model =
    div []
        (List.map viewPrediction model.predictions)


{ class } =
    Html.CssHelpers.withNamespace cssNamespace
