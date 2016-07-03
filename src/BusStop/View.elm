module BusStop.View exposing (view)

import Date
import Dict
import Dict.Extra as Dict
import String
import Html exposing (..)
import Html.Events exposing (..)
import Html.CssHelpers
import BusStop.Classes exposing (..)
import Api exposing (BusStop, BusPrediction, Direction)
import BusStop.Model as Model exposing (Model)
import BusStop.Update exposing (Msg(..))
import Icons


predictionInMinutes : BusPrediction -> Int
predictionInMinutes prediction =
    let
        timestamp =
            Date.toTime prediction.timestamp

        predictedTime =
            Date.toTime prediction.predictedTime
    in
        round ((predictedTime - timestamp) / 60000)


viewArrivingLabel : Int -> String
viewArrivingLabel inMinutes =
    if inMinutes == 0 then
        "Arrives"
    else
        "Arrives in"


viewArrivingMinutes : Int -> String
viewArrivingMinutes inMinutes =
    if inMinutes == 0 then
        "now"
    else if inMinutes == 1 then
        "1 min"
    else
        toString inMinutes ++ " mins"


arrivingClass : Int -> Html.Attribute msg
arrivingClass inMinutes =
    classList
        [ ( NearPrediction, inMinutes <= 5 )
        , ( MediumPrediction, inMinutes > 5 && inMinutes <= 12 )
        , ( FarPrediction, inMinutes > 12 )
        ]


viewDirection : Direction -> String
viewDirection direction =
    direction
        |> toString
        |> String.dropRight 5


viewPrediction : String -> BusStop -> BusPrediction -> Html Msg
viewPrediction routeId stop prediction =
    let
        inMinutes =
            predictionInMinutes prediction
    in
        div [ class [ PredictionItem ] ]
            [ div [ class [ ItemIcon ] ] [ Icons.bus ]
            , div [ class [ PredictionDetails ] ]
                [ div [ class [ RouteName ] ]
                    [ text <| "Route " ++ routeId ]
                , div [ class [ StopName ] ]
                    [ text stop.name ]
                ]
            , div [ class [ PredictionValue ] ]
                [ div [ class [ PredictionLabel ] ] [ text <| viewArrivingLabel inMinutes ]
                , div [ arrivingClass inMinutes ] [ text <| viewArrivingMinutes inMinutes ]
                ]
            ]


viewPredictionGroup : String -> BusStop -> ( String, List BusPrediction ) -> Html Msg
viewPredictionGroup routeId stop ( direction, predictions ) =
    div []
        [ div [ class [ DirectionLabel ] ] [ text direction ]
        , div []
            (predictions
                |> List.sortBy predictionInMinutes
                |> List.map (viewPrediction routeId stop)
            )
        ]


viewFavoriteControl : Bool -> Html Msg
viewFavoriteControl isFavorited =
    let
        ( icon, favoriteText, message ) =
            if isFavorited then
                ( Icons.star, "Added to favorites", RemoveFavorite )
            else
                ( Icons.starOutline, "Add to favorites", SaveFavorite )
    in
        div [ class [ ControlsContainer ] ]
            [ div
                [ class [ FavoriteContainer ]
                , onClick message
                ]
                [ span [ class [ FavoriteIcon ] ]
                    [ icon ]
                , span [ class [ FavoriteText ] ]
                    [ text favoriteText ]
                ]
            ]


view : Model -> Html Msg
view model =
    let
        items busStop =
            model.predictions
                |> Dict.groupBy (.routeDirection >> toString)
                |> Dict.toList
                |> List.map (viewPredictionGroup model.routeId busStop)
    in
        case List.head model.busStops of
            Just busStop ->
                div []
                    [ viewFavoriteControl model.isFavorited
                    , div [] (items busStop)
                    ]

            Nothing ->
                div [] []


{ class, classList } =
    Html.CssHelpers.withNamespace cssNamespace
