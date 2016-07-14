module TrainRoute.Stylesheet exposing (styles)

import Css exposing (..)
import Css.Namespace exposing (namespace)
import TrainRoute.Classes exposing (Classes(..), cssNamespace)
import Colors exposing (..)


styles : List Snippet
styles =
    namespace cssNamespace
        [ (.) StopItem
            [ padding2 zero (px 32)
            , height (px 48)
            , borderBottom3 (px 1) solid (hex lightGray)
            , displayFlex
            , property "align-items" "center"
            , property "justify-content" "space-between"
            ]
        , (.) StopName
            [ display block
            , property "width" "calc(100% - 20px)"
            , paddingRight (px 16)
            , overflowX hidden
            , whiteSpace noWrap
            , textOverflow ellipsis
            , fontSize (px 20)
            ]
        , (.) Chevron
            [ width (px 20)
            , height (px 20)
            , display inlineBlock
            , property "fill" midGray
            ]
        , (.) ControlsContainer
            [ padding2 (px 16) (px 32)
            , borderBottom3 (px 1) solid (hex lightGray)
            ]
        , (.) DirectionsSelector
            [ displayFlex
            , property "align-items" "center"
            , property "justify-content" "center"
            , marginTop (px 16)
            ]
        , (.) DirectionButton
            [ width (pct 50)
            , border3 (px 1) solid (hex primaryColor)
            , backgroundColor (hex "#fff")
            , color (hex primaryColor)
            , fontSize (px 16)
            , textTransform uppercase
            , property "outline" "0"
            , padding2 (px 4) zero
            , firstChild
                [ borderRight zero
                ]
            ]
        , (.) ActiveDirectionButton
            [ backgroundColor (hex primaryColor)
            , color (hex "#fff")
            ]
        ]
