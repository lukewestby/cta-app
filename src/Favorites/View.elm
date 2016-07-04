module Favorites.View exposing (view)

import String
import Html exposing (..)
import Html.Events exposing (..)
import Html.CssHelpers
import Icons
import Pages exposing (Page)
import Favorites exposing (BusStopSummary)
import Favorites.Classes exposing (..)
import Favorites.Model exposing (Model)
import Favorites.Update exposing (Msg(..))


viewBusFavorites : List BusStopSummary -> Html Msg
viewBusFavorites summaries =
    div []
        [ div [ class [ ListTitle ] ] [ text "Buses" ]
        , div [] (List.map viewBusItem summaries)
        ]


viewBusItem : BusStopSummary -> Html Msg
viewBusItem summary =
    div
        [ class [ FavoriteItem ]
        , onClick (NavigateTo (viewBusPage summary))
        ]
        [ div [ class [ ItemIcon ] ] [ Icons.bus ]
        , div [ class [ FavoriteDetails ] ]
            [ div [ class [ RouteName ] ]
                [ text <| "Route " ++ summary.routeId ]
            , div [ class [ StopName ] ]
                [ text summary.name ]
            ]
        , div [ class [ Chevron ] ] [ Icons.chevronRight ]
        ]


viewBusPage : BusStopSummary -> Page
viewBusPage summary =
    Pages.BusStopPage summary.routeId
        (summary.stopIds |> String.join "-")


viewEmpty : Html Msg
viewEmpty =
    div [ class [ EmptyMessage ] ]
        [ span []
            [ text "Add some favorites by searching for " ]
        , span
            [ class [ EmptyMessageLink ]
            , onClick (NavigateTo Pages.BusRoutesPage)
            ]
            [ text "bus stops" ]
        , span []
            [ text " or " ]
        , span
            [ class [ EmptyMessageLink ]
            , onClick (NavigateTo Pages.NotFound)
            ]
            [ text "train station" ]
        , span []
            [ text " that you take frequently." ]
        ]


view : Model -> Html Msg
view model =
    let
        children =
            case ( List.isEmpty model.busFavorites, List.isEmpty [] ) of
                ( False, True ) ->
                    [ viewBusFavorites model.busFavorites ]

                _ ->
                    [ viewEmpty ]
    in
        div [] children


{ class } =
    Html.CssHelpers.withNamespace cssNamespace
