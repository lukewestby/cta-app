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
import TrainRoutes.Model as TrainRoutes
import TrainRoutes.Update as TrainRoutes
import TrainRoutes.View as TrainRoutes
import TrainRoute.Model as TrainRoute
import TrainRoute.Update as TrainRoute
import TrainRoute.View as TrainRoute
import Favorites.Model as Favorites
import Favorites.Load as Favorites
import Favorites.View as Favorites


type PageModel
    = BusRouteModel BusRoute.Model
    | BusRoutesModel BusRoutes.Model
    | BusStopModel BusStop.Model
    | TrainRoutesModel TrainRoutes.Model
    | TrainRouteModel TrainRoute.Model
    | FavoritesModel Favorites.Model
    | NoneModel


type PageMsg
    = BusRouteMsg BusRoute.Msg
    | BusRoutesMsg BusRoutes.Msg
    | BusStopMsg BusStop.Msg
    | TrainRoutesMsg TrainRoutes.Msg
    | TrainRouteMsg TrainRoute.Msg
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

        ( TrainRoutesMsg subMsg, TrainRoutesModel subModel ) ->
            let
                ( newModel, subCmd ) =
                    TrainRoutes.update subMsg subModel
            in
                ( TrainRoutesModel newModel
                , Cmd.map TrainRoutesMsg subCmd
                )

        ( TrainRouteMsg subMsg, TrainRouteModel subModel ) ->
            let
                ( newModel, subCmd ) =
                    TrainRoute.update subMsg subModel
            in
                ( TrainRouteModel newModel
                , Cmd.map TrainRouteMsg subCmd
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

        TrainRoutesPage ->
            TrainRoutes.load |> Task.map TrainRoutesModel

        TrainRoutePage routeId ->
            TrainRoute.load routeId |> Task.map TrainRouteModel

        FavoritesPage ->
            Favorites.load |> Task.map FavoritesModel

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

        TrainRoutesModel model ->
            HtmlApp.map TrainRoutesMsg <| TrainRoutes.view model

        TrainRouteModel model ->
            HtmlApp.map TrainRouteMsg <| TrainRoute.view model

        FavoritesModel model ->
            Favorites.view model

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

        TrainRoutesPage ->
            True

        TrainRoutePage _ ->
            True

        FavoritesPage ->
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

        TrainRoutesModel _ ->
            "Train Routes"

        TrainRouteModel model ->
            model.route.name

        FavoritesModel _ ->
            "Favorites"

        _ ->
            "Not Found"


subscriptions : PageModel -> Sub PageMsg
subscriptions pageModel =
    case pageModel of
        BusStopModel model ->
            Sub.map BusStopMsg <| BusStop.subscriptions model

        _ ->
            Sub.none
