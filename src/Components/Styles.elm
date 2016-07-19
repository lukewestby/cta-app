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
        , (.) SearchIconFocused
            [ property "fill" primaryColor ]
        , (.) SearchInput
            [ property "width" "calc(100% - 40px)"
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
        , (.) SearchBarContainerFocused
            [ borderBottomColor (hex primaryColor)
            ]
        , (.) HeaderNav
            [ height (px 52)
            , borderBottom3 (px 1) solid (hex lightGray)
            , displayFlex
            , property "justify-content" "space-between"
            , property "align-items" "center"
            , padding2 zero (px 32)
            , width (pct 100)
            , backgroundColor (hex "#fff")
            , position fixed
            , property "z-index" "3"
            , maxWidth (px 768)
            ]
        , (.) HeaderNavIcon
            [ width (px 24)
            , height (px 24)
            , position relative
            , display inlineBlock
            , property "fill" midGray
            , property "transition" "transform 0.15s"
            , property "touch-action" "none"
            , active [ transforms [ scale 1.2 ] ]
            , hover [ transforms [ scale 1.2 ] ]
            ]
        , (.) HeaderNavIconActive
            [ property "fill" primaryColor ]
        , (.) FailureView
            [ backgroundColor (hex "#fff")
            , height (pct 100)
            , displayFlex
            , property "align-items" "center"
            , property "flex-direction" "column"
            , padding (px 32)
            ]
        , (.) ErrorMessage
            [ color (hex midGray)
            , fontSize (px 20)
            ]
        , (.) ReloadButtonContainer
            [ padding2 (px 32) zero
            ]
        , (.) ReloadButton
            [ border3 (px 1) solid (hex primaryColor)
            , color (hex primaryColor)
            , textTransform uppercase
            , backgroundColor transparent
            , fontSize (px 16)
            , padding2 (px 8) (px 16)
            , property "outline" "0"
            ]
        ]
