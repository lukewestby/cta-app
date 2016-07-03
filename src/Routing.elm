module Routing
    exposing
        ( PageModel(..)
        , PageMsg(..)
        , update
        , load
        , view
        , title
        , isCacheable
        , subscriptions
        )

import Utils exposing (..)
import Task exposing (Task)
import Html exposing (Html)
import Html.App as HtmlApp
import Pages exposing (Page(..))
import BusRoute.Model as BusRoute
import BusRoute.Update as BusRoute
import BusRoute.View as BusRoute
import BusRoutes.Model as BusRoutes
import BusRoutes.Update as BusRoutes
import BusRoutes.View as BusRoutes
import BusStop.Model as BusStop
import BusStop.Update as BusStop
import BusStop.View as BusStop
import BusStop.Subscriptions as BusStop


type PageModel
    = BusRouteModel BusRoute.Model
    | BusRoutesModel BusRoutes.Model
    | BusStopModel BusStop.Model
    | NoneModel


type PageMsg
    = BusRouteMsg BusRoute.Msg
    | BusRoutesMsg BusRoutes.Msg
    | BusStopMsg BusStop.Msg
    | NoneMsg


update : PageMsg -> PageModel -> ( PageModel, Cmd PageMsg )
update msg model =
    case ( msg, model ) of
        ( BusRouteMsg subMsg, BusRouteModel subModel ) ->
            let
                ( newModel, subCmd ) =
                    BusRoute.update subMsg subModel
            in
                ( BusRouteModel newModel
                , Cmd.map BusRouteMsg subCmd
                )

        ( BusRoutesMsg subMsg, BusRoutesModel subModel ) ->
            let
                ( newModel, subCmd ) =
                    BusRoutes.update subMsg subModel
            in
                ( BusRoutesModel newModel
                , Cmd.map BusRoutesMsg subCmd
                )

        ( BusStopMsg subMsg, BusStopModel subModel ) ->
            let
                ( newModel, subCmd ) =
                    BusStop.update subMsg subModel
            in
                ( BusStopModel newModel
                , Cmd.map BusStopMsg subCmd
                )

        _ ->
            ( model, Cmd.none )


load : Page -> Task String PageModel
load page =
    case page of
        BusRoutesPage ->
            BusRoutes.load |> Task.map BusRoutesModel

        BusRoutePage routeId ->
            BusRoute.load routeId |> Task.map BusRouteModel

        BusStopPage routeId stopId ->
            BusStop.load routeId stopId |> Task.map BusStopModel

        _ ->
            Task.succeed NoneModel


view : PageModel -> Html PageMsg
view pageModel =
    case pageModel of
        BusRouteModel model ->
            HtmlApp.map BusRouteMsg <| BusRoute.view model

        BusRoutesModel model ->
            HtmlApp.map BusRoutesMsg <| BusRoutes.view model

        BusStopModel model ->
            HtmlApp.map BusStopMsg <| BusStop.view model

        _ ->
            Html.text ""


isCacheable : Page -> Bool
isCacheable page =
    case page of
        BusRoutesPage ->
            True

        BusRoutePage _ ->
            True

        BusStopPage _ _ ->
            False

        NotFound ->
            False


title : PageModel -> String
title model =
    case model of
        BusRoutesModel _ ->
            "Bus Routes"

        BusRouteModel model ->
            "Bus Route " ++ model.route.id ++ " – " ++ model.route.name

        BusStopModel model ->
            List.head model.busStops
                |> Maybe.map .name
                |> Maybe.withDefault ""

        _ ->
            "Not Found"


subscriptions : PageModel -> Sub PageMsg
subscriptions pageModel =
    case pageModel of
        BusStopModel model ->
            Sub.map BusStopMsg <| BusStop.subscriptions model

        _ ->
            Sub.none
