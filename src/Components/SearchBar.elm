module Components.SearchBar exposing (view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html.CssHelpers
import Icons
import Components.Classes exposing (..)


view : String -> (String -> msg) -> msg -> Html msg
view inputValue onType onClear =
    div [ class [ SearchBarContainer ] ]
        [ span [ class [ SearchIcon ] ] [ Icons.search ]
        , input
            [ type' "text"
            , onInput onType
            , class [ SearchInput ]
            , value inputValue
            ]
            []
        , span
            [ class [ SearchIcon ]
            , onClick onClear
            ]
            [ Icons.close ]
        ]


{ class } =
    Html.CssHelpers.withNamespace cssNamespace
