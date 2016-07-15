module Components.Styles exposing (styles)

import Css exposing (..)
import Css.Namespace exposing (namespace)
import Components.Classes exposing (Classes(..), cssNamespace)
import Colors exposing (..)


styles : List Snippet
styles =
    namespace cssNamespace
        [ (.) LoadingContainer
            [ displayFlex
            , property "justify-content" "center"
            , padding2 (px 32) zero
            ]
        , (.) LoadingIcon
            [ width (px 44)
            , property "stroke" primaryColor
            ]
        , (.) SearchIcon
            [ width (px 20)
            , height (px 20)
            , display block
            , property "fill" midGray
            ]
        , (.) SearchInput
            [ property "flex-grow" "1"
            , margin zero
            , border zero
            , padding2 (px 4) (px 8)
            , property "outline" "0"
            , fontSize (px 20)
            , fontFamily inherit
            , lineHeight (px 20)
            ]
        , (.) SearchBarContainer
            [ displayFlex
            , borderBottom3 (px 1) solid (hex lightGray)
            , property "align-items" "center"
            ]
        ]
