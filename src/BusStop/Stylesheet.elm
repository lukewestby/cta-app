module BusStop.Stylesheet exposing (styles)

import Css exposing (..)
import Css.Namespace exposing (namespace)
import BusStop.Classes exposing (Classes(..), cssNamespace)
import Colors exposing (..)


styles : List Snippet
styles =
    namespace cssNamespace
        [ (.) ItemIcon
            [ height (px 32)
            , width (px 32)
            , property "fill" midGray
            , display inlineBlock
            ]
        , (.) PredictionItem
            [ borderBottom3 (px 1) solid (hex lightGray)
            , height (px 64)
            , displayFlex
            , property "align-items" "center"
            , padding2 zero (px 32)
            ]
        , (.) PredictionDetails
            [ padding2 zero (px 16)
            ]
        , (.) StopName
            [ color (hex midGray)
            , fontSize (px 14)
            ]
        ]
