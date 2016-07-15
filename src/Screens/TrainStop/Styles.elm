module Screens.TrainStop.Styles exposing (styles)

import Css exposing (..)
import Css.Namespace exposing (namespace)
import Screens.TrainStop.Classes exposing (Classes(..), cssNamespace)
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
        , (.) ControlsContainer
            [ borderBottom3 (px 1) solid (hex lightGray)
            ]
        , (.) FavoriteContainer
            [ displayFlex
            , property "align-items" "center"
            , height (px 48)
            , padding2 zero (px 32)
            ]
        , (.) FavoriteIcon
            [ width (px 24)
            , height (px 24)
            , property "stroke" midGray
            , property "fill" yellow
            ]
        , (.) FavoriteText
            [ fontSize (px 16)
            , textTransform uppercase
            , padding2 zero (px 16)
            ]
        , (.) DirectionLabel
            [ fontSize (px 16)
            , color (hex midGray)
            , textTransform uppercase
            , padding4 (px 24) (px 32) (px 8) (px 32)
            , borderBottom3 (px 1) solid (hex lightGray)
            ]
        ]
