port module Stylesheets exposing (..)

import Css exposing (..)
import Css.Elements exposing (..)
import Css.Namespace exposing (namespace)
import Css.File exposing (..)
import Html.App as Html
import Html exposing (text)
import Classes exposing (Classes(..), appNamespace)
import Screens.BusRoutes.Styles as BusRoutes
import Screens.BusRoute.Styles as BusRoute
import Screens.BusStop.Styles as BusStop
import Screens.TrainRoutes.Styles as TrainRoutes
import Screens.TrainRoute.Styles as TrainRoute
import Screens.TrainStop.Styles as TrainStop
import Screens.Favorites.Styles as Favorites
import Components.Styles as Components
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
                , a
                    [ textDecoration none
                    , property "color" "inherit"
                    ]
                , (.) AppContainer
                    [ maxWidth (px 768)
                    , margin2 zero auto
                    , position relative
                    ]
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
                , (.) PageContainer
                    [ height (pct 100)
                    , paddingTop (px 52)
                    , position relative
                    ]
                , (.) PageWithMessage
                    [ paddingBottom (px 40)
                    ]
                , (.) MessageContainer
                    [ position fixed
                    , bottom zero
                    , left zero
                    , right zero
                    , height (px 40)
                    , displayFlex
                    , alignItems center
                    , property "justify-content" "center"
                    , backgroundColor (hex red)
                    , color (hex "#fff")
                    , textTransform uppercase
                    , fontWeight bold
                    ]
                , (.) MessageIcon
                    [ height (px 16)
                    , width (px 19)
                    , marginRight (px 8)
                    , property "fill" "#fff"
                    ]
                ]
            , BusRoutes.styles
            , BusRoute.styles
            , BusStop.styles
            , TrainRoutes.styles
            , TrainRoute.styles
            , TrainStop.styles
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
