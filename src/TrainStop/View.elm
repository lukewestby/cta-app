module TrainStop.View exposing (view)

import Date
import Dict exposing (Dict)
import Dict.Extra as Dict
import Html exposing (..)
import Html.CssHelpers
import TrainStop.Classes exposing (..)
import Api.Train exposing (TrainStop, TrainPrediction)
import TrainStop.Model as Model exposing (Model)
import TrainStop.Update exposing (Msg(..))
import Icons


predictionInMinutes : TrainPrediction -> Int
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


viewPrediction : String -> String -> TrainPrediction -> Html Msg
viewPrediction routeId stopName prediction =
    let
        inMinutes =
            predictionInMinutes prediction
    in
        div [ class [ PredictionItem ] ]
            [ div [ class [ ItemIcon ] ] [ Icons.train ]
            , div [ class [ PredictionDetails ] ]
                [ div [ class [ RouteName ] ]
                    [ text <| "Route " ++ routeId ]
                , div [ class [ StopName ] ]
                    [ text stopName ]
                ]
            , div [ class [ PredictionValue ] ]
                [ div [ class [ PredictionLabel ] ] [ text <| viewArrivingLabel inMinutes ]
                , div [ arrivingClass inMinutes ] [ text <| viewArrivingMinutes inMinutes ]
                ]
            ]


viewPredictionGroup : String -> String -> ( String, List TrainPrediction ) -> Html Msg
viewPredictionGroup routeId stopName ( destination, predictions ) =
    div []
        [ div [ class [ DirectionLabel ] ] [ text destination ]
        , div []
            (predictions
                |> List.sortBy predictionInMinutes
                |> List.map (viewPrediction routeId stopName)
            )
        ]


viewFavoriteControl : Bool -> Html Msg
viewFavoriteControl isFavorited =
    let
        ( icon, favoriteText ) =
            if isFavorited then
                ( Icons.star, "Added to favorites" )
            else
                ( Icons.starOutline, "Add to favorites" )
    in
        div [ class [ ControlsContainer ] ]
            [ div
                [ class [ FavoriteContainer ]
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
        items =
            model.predictions
                |> Dict.groupBy (.destination)
                |> Dict.toList
                |> List.map (viewPredictionGroup model.routeId model.stop.name)
    in
        div []
            [ viewFavoriteControl model.isFavorited
            , div [] items
            ]


{ class, classList } =
    Html.CssHelpers.withNamespace cssNamespace
