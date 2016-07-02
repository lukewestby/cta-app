module BusStop.View exposing (view)

import Date
import String
import Html exposing (..)
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
                    [ text <| "Route " ++ routeId ++ " – " ++ viewDirection stop.direction ]
                , div [ class [ StopName ] ]
                    [ text stop.name ]
                ]
            , div [ class [ PredictionValue ] ]
                [ div [ class [ PredictionLabel ] ] [ text <| viewArrivingLabel inMinutes ]
                , div [ arrivingClass inMinutes ] [ text <| viewArrivingMinutes inMinutes ]
                ]
            ]


view : Model -> Html Msg
view model =
    let
        items =
            model.predictions
                |> List.sortBy predictionInMinutes
                |> List.map (viewPrediction model.routeId model.busStop)
    in
        div [] items


{ class, classList } =
    Html.CssHelpers.withNamespace cssNamespace
