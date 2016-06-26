module Components.Loading exposing (view)

import Html exposing (..)
import Html.CssHelpers
import Components.Classes exposing (..)
import Icons


view : Html msg
view =
    div [ class [ LoadingContainer ] ]
        [ span [ class [ LoadingIcon ] ] [ Icons.loading ]
        ]


{ class } =
    Html.CssHelpers.withNamespace cssNamespace
