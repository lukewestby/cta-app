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
            , property "width" "calc(100% - 108px)"
            ]
        , (.) RouteName
            [ whiteSpace noWrap
            , overflowX hidden
            , textOverflow ellipsis
            ]
        , (.) PredictionValue
            [ textAlign center
            , textTransform uppercase
            , width (px 76)
            ]
        , (.) StopName
            [ color (hex midGray)
            , fontSize (px 14)
            , whiteSpace noWrap
            , overflowX hidden
            , textOverflow ellipsis
            ]
        , (.) NearPrediction
            [ color (hex green)
            ]
        , (.) MediumPrediction
            [ color (hex yellow)
            ]
        , (.) FarPrediction
            [ color (hex red)
            ]
        , (.) PredictionLabel
            [ color (hex midGray)
            , fontSize (px 14)
            ]
        ]
