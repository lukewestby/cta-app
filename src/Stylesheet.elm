port module Stylesheets exposing (..)

import Css exposing (..)
import Css.Elements exposing (..)
import Css.Namespace exposing (namespace)
import Css.File exposing (..)
import Html.App as Html
import Html exposing (text)
import Classes exposing (Classes(..), appNamespace)
import BusRoutes.Stylesheet as BusRoutes
import BusRoute.Stylesheet as BusRoute
import BusStop.Stylesheet as BusStop
import Favorites.Styles as Favorites
import Components.Stylesheet as Components
import Colors exposing (..)


port files : CssFileStructure -> Cmd msg


css : Stylesheet
css =
    stylesheet
        <| List.concat
            [ namespace appNamespace
                [ html [ height (pct 100) ]
                , body
                    [ margin (px 0)
                    , height (pct 100)
                    , property "font-family" "Helvetica Neue"
                    , property "-webkit-font-smoothing" "antialiased"
                    , descendants
                        [ everything [ boxSizing borderBox ]
                        ]
                    ]
                , (.) AppContainer
                    [ maxWidth (px 768)
                    , margin2 zero auto
                    , position relative
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
                    ]
                , (.) HeaderNavIcon
                    [ width (px 24)
                    , height (px 24)
                    , position relative
                    , display inlineBlock
                    , property "fill" midGray
                    , property "transition" "transform 0.15s"
                    , active
                        [ transforms [ scale 1.2 ]
                        ]
                    ]
                , (.) PageContainer
                    [ height (pct 100)
                    , paddingTop (px 52)
                    , position relative
                    ]
                , (.) HeaderNavIconActive
                    [ property "fill" primaryColor ]
                , (.) PageTitle
                    [ height (px 48)
                    , fontWeight (int 300)
                    , padding2 zero (px 32)
                    , displayFlex
                    , property "align-items" "center"
                    , fontSize (px 20)
                    , borderBottom3 (px 1) solid (hex lightGray)
                    ]
                , (.) PageTitleInner
                    [ whiteSpace noWrap
                    , overflowX hidden
                    , textOverflow ellipsis
                    ]
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
            , BusRoutes.styles
            , BusRoute.styles
            , BusStop.styles
            , Favorites.styles
            , Components.styles
            ]


cssFiles : CssFileStructure
cssFiles =
    toFileStructure [ ( "main.css", Css.File.compile css ) ]


main : Program Never
main =
    Html.program
        { init = ( (), files cssFiles )
        , view = \_ -> (text "")
        , update = \_ _ -> ( (), Cmd.none )
        , subscriptions = \_ -> Sub.none
        }
