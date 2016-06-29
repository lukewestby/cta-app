module BusRoutes.View exposing (view)

import Html exposing (..)
import Html.Events exposing (..)
import Html.CssHelpers
import Pages
import Api exposing (BusRouteSummary)
import BusRoutes.Model as Model exposing (Model)
import BusRoutes.Update as Update exposing (Msg(..))
import BusRoutes.Classes exposing (..)
import Icons


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


view : Model -> Html Msg
view model =
    div [] (List.map viewRoute model.routes)


{ class, classList } =
    Html.CssHelpers.withNamespace cssNamespace
