module Favorites.View exposing (view)

import String
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.CssHelpers
import Icons
import Pages exposing (Page)
import Favorites exposing (BusStopSummary)
import Favorites.Classes exposing (..)
import Favorites.Model exposing (Model)


viewBusFavorites : List BusStopSummary -> Html msg
viewBusFavorites summaries =
    div []
        [ div [ class [ ListTitle ] ] [ text "Buses" ]
        , div [] (List.map viewBusItem summaries)
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


viewBusPage : BusStopSummary -> Page
viewBusPage summary =
    Pages.BusStopPage summary.routeId
        (summary.stopIds |> String.join "-")


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
            , href <| Pages.url Pages.NotFound
            ]
            [ text "train station" ]
        , span []
            [ text " that you take frequently." ]
        ]


view : Model -> Html msg
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
