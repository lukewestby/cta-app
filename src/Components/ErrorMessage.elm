module Components.ErrorMessage exposing (view)

import Html exposing (..)
import Html.Events exposing (..)
import Html.CssHelpers
import Components.Classes exposing (..)


view : msg -> Html msg
view reloadClickedMsg =
    div [ class [ FailureView ] ]
        [ div [ class [ ErrorMessage ] ]
            [ text "Something went wrong!" ]
        , div [ class [ ReloadButtonContainer ] ]
            [ button
                [ class [ ReloadButton ]
                , onClick reloadClickedMsg
                ]
                [ text "Retry" ]
            ]
        ]


{ class } =
    Html.CssHelpers.withNamespace cssNamespace
