module TrainRoutes.Stylesheet exposing (styles)

import Css exposing (..)
import Css.Namespace exposing (namespace)
import TrainRoutes.Classes exposing (Classes(..), cssNamespace)
import Colors exposing (..)


styles : List Snippet
styles =
    namespace cssNamespace
        [ (.) RouteItem
            [ padding2 zero (px 32)
            , height (px 64)
            , borderBottom3 (px 1) solid (hex lightGray)
            , displayFlex
            , property "align-items" "center"
            , property "justify-content" "space-between"
            ]
        , (.) RouteIconContainer
            [ width (px 40)
            , height (px 40)
            , borderRadius (pct 50)
            , displayFlex
            , property "justify-content" "center"
            , property "align-items" "center"
            ]
        , (.) RouteIcon
            [ property "fill" "#fff"
            , width (px 24)
            , height (px 24)
            ]
        , (.) RouteName
            [ display block
            , property "width" "calc(100% - 60px)"
            , padding2 zero (px 16)
            , overflowX hidden
            , whiteSpace noWrap
            , textOverflow ellipsis
            , fontSize (px 18)
            ]
        , (.) Chevron
            [ width (px 20)
            , height (px 20)
            , display inlineBlock
            , property "fill" midGray
            ]
        , (.) ReloadingContainer
            [ height (px 64)
            , position absolute
            , top (px -64)
            ]
        , (.) ControlsContainer
            [ padding2 (px 16) (px 32)
            , borderBottom3 (px 1) solid (hex lightGray)
            ]
        ]
