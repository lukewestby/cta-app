module Screens.Favorites.View exposing (view)

import String
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.CssHelpers
import Icons
import Pages exposing (Page)
import Api.Favorites exposing (BusStopSummary, TrainStopSummary)
import Screens.Favorites.Classes exposing (..)
import Screens.Favorites.Model exposing (Model)


viewBusFavorites : List BusStopSummary -> Html msg
viewBusFavorites summaries =
    div []
        [ div [ class [ ListTitle ] ] [ text "Buses" ]
        , div [] (List.map viewBusItem summaries)
        ]


viewTrainFavorites : List TrainStopSummary -> Html msg
viewTrainFavorites summaries =
    div []
        [ div [ class [ ListTitle ] ] [ text "Trains" ]
        , div [] (List.map viewTrainItem summaries)
        ]


viewBusItem : BusStopSummary -> Html msg
viewBusItem summary =
    a
        [ class [ FavoriteItem ]
        , href <| Pages.url (viewBusPage summary)
        ]
        [ div [ class [ ItemIcon ] ] [ Icons.bus ]
        , div [ class [ FavoriteDetails ] ]
            [ div [ class [ StopName ] ]
                [ text summary.name ]
            , div [ class [ RouteName ] ]
                [ text <| "Route " ++ summary.routeId ]
            ]
        , div [ class [ Chevron ] ] [ Icons.chevronRight ]
        ]


viewTrainItem : TrainStopSummary -> Html msg
viewTrainItem summary =
    a
        [ class [ FavoriteItem ]
        , href <| Pages.url (viewTrainPage summary)
        ]
        [ div [ class [ ItemIcon ] ] [ Icons.train ]
        , div [ class [ FavoriteDetails ] ]
            [ div [ class [ StopName ] ]
                [ text summary.name ]
            , div [ class [ RouteName ] ]
                [ text <| summary.routeName ]
            ]
        , div [ class [ Chevron ] ] [ Icons.chevronRight ]
        ]


viewBusPage : BusStopSummary -> Page
viewBusPage summary =
    Pages.BusStopPage summary.routeId
        (summary.stopIds |> String.join "-")


viewTrainPage : TrainStopSummary -> Page
viewTrainPage summary =
    Pages.TrainStopPage summary.routeId summary.stopId


viewEmpty : Html msg
viewEmpty =
    div [ class [ EmptyMessage ] ]
        [ span []
            [ text "Add some favorites by searching for " ]
        , a
            [ class [ EmptyMessageLink ]
            , href <| Pages.url Pages.BusRoutesPage
            ]
            [ text "bus stops" ]
        , span []
            [ text " or " ]
        , a
            [ class [ EmptyMessageLink ]
            , href <| Pages.url Pages.TrainRoutesPage
            ]
            [ text "train stations" ]
        , span []
            [ text " that you take frequently." ]
        ]


view : Model -> Html msg
view model =
    let
        children =
            case ( List.isEmpty model.busFavorites, List.isEmpty model.trainFavorites ) of
                ( False, True ) ->
                    [ viewBusFavorites model.busFavorites ]

                ( True, False ) ->
                    [ viewTrainFavorites model.trainFavorites ]

                ( False, False ) ->
                    [ viewBusFavorites model.busFavorites
                    , viewTrainFavorites model.trainFavorites
                    ]

                _ ->
                    [ viewEmpty ]
    in
        div [] children


{ class } =
    Html.CssHelpers.withNamespace cssNamespace
