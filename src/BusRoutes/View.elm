module BusRoutes.View exposing (view)

import Utils exposing (..)
import Html exposing (..)
import Html.Events exposing (..)
import Html.CssHelpers
import Pages
import Api exposing (BusRouteSummary)
import BusRoutes.Model as Model exposing (Model)
import BusRoutes.Update as Update exposing (Msg(..))
import BusRoutes.Classes exposing (..)
import Icons
import Components.Loading as LoadingComponent


viewRouteIdLabel : String -> String -> Html Msg
viewRouteIdLabel routeId color =
    span [ class [ RouteIdLabel ] ]
        [ text routeId ]


viewRoute : BusRouteSummary -> Html Msg
viewRoute summary =
    div
        [ class [ RouteItem ]
        , onClick (NavigateTo (Pages.BusRoutePage summary.id))
        ]
        [ viewRouteIdLabel summary.id summary.color
        , div [ class [ RouteName ] ] [ text summary.name ]
        , div [ class [ Chevron ] ] [ Icons.chevronRight ]
        ]


viewSuccess : List BusRouteSummary -> Html Msg
viewSuccess routes =
    div [] (List.map viewRoute routes)


view : Model -> Html Msg
view model =
    case model.routes of
        Success routes ->
            viewSuccess routes

        Failure message ->
            text "nope"

        _ ->
            LoadingComponent.view


{ class, classList } =
    Html.CssHelpers.withNamespace cssNamespace
