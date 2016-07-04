module Favorites.Styles exposing (styles)

import Css exposing (..)
import Css.Namespace exposing (namespace)
import Favorites.Classes exposing (Classes(..), cssNamespace)
import Colors exposing (..)


styles : List Snippet
styles =
    namespace cssNamespace
        [ (.) FavoriteItem
            [ borderBottom3 (px 1) solid (hex lightGray)
            , height (px 64)
            , displayFlex
            , property "align-items" "center"
            , padding2 zero (px 32)
            ]
        , (.) ItemIcon
            [ height (px 32)
            , width (px 32)
            , property "fill" midGray
            , display inlineBlock
            ]
        , (.) ListTitle
            [ fontSize (px 16)
            , textTransform uppercase
            , padding4 (px 16) (px 32) (px 8) (px 32)
            , color (hex midGray)
            , borderBottom3 (px 1) solid (hex lightGray)
            ]
        , (.) FavoriteDetails
            [ padding2 zero (px 16)
            , property "width" "calc(100% - 52px)"
            ]
        , (.) RouteName
            [ whiteSpace noWrap
            , overflowX hidden
            , textOverflow ellipsis
            ]
        , (.) StopName
            [ color (hex midGray)
            , fontSize (px 14)
            , whiteSpace noWrap
            , overflowX hidden
            , textOverflow ellipsis
            ]
        , (.) Chevron
            [ width (px 20)
            , height (px 20)
            , display inlineBlock
            , property "fill" midGray
            ]
        , (.) EmptyMessage
            [ padding (px 32)
            , fontSize (px 20)
            , color (hex midGray)
            ]
        , (.) EmptyMessageLink
            [ color (hex primaryColor)
            ]
        ]
