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
import Screens.BusRoute.Model as BusRoute
import Screens.BusRoute.Update as BusRoute
import Screens.BusRoute.View as BusRoute
import Screens.BusRoute.Load as BusRoute
import Screens.BusRoutes.Model as BusRoutes
import Screens.BusRoutes.Update as BusRoutes
import Screens.BusRoutes.View as BusRoutes
import Screens.BusRoutes.Load as BusRoutes
import Screens.BusStop.Model as BusStop
import Screens.BusStop.Update as BusStop
import Screens.BusStop.View as BusStop
import Screens.BusStop.Subscriptions as BusStop
import Screens.BusStop.Load as BusStop
import Screens.TrainRoutes.Model as TrainRoutes
import Screens.TrainRoutes.View as TrainRoutes
import Screens.TrainRoutes.Load as TrainRoutes
import Screens.TrainRoute.Model as TrainRoute
import Screens.TrainRoute.Update as TrainRoute
import Screens.TrainRoute.View as TrainRoute
import Screens.TrainRoute.Load as TrainRoute
import Screens.TrainStop.Model as TrainStop
import Screens.TrainStop.Update as TrainStop
import Screens.TrainStop.View as TrainStop
import Screens.TrainStop.Subscriptions as TrainStop
import Screens.TrainStop.Load as TrainStop
import Screens.Favorites.Model as Favorites
import Screens.Favorites.Load as Favorites
import Screens.Favorites.View as Favorites
import Screens.Favorites.Load as Favorites


type PageModel
    = BusRouteModel BusRoute.Model
    | BusRoutesModel BusRoutes.Model
    | BusStopModel BusStop.Model
    | TrainRoutesModel TrainRoutes.Model
    | TrainRouteModel TrainRoute.Model
    | TrainStopModel TrainStop.Model
    | FavoritesModel Favorites.Model
    | NoneModel


type PageMsg
    = BusRouteMsg BusRoute.Msg
    | BusRoutesMsg BusRoutes.Msg
    | BusStopMsg BusStop.Msg
    | TrainRouteMsg TrainRoute.Msg
    | TrainStopMsg TrainStop.Msg
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

        ( TrainRouteMsg subMsg, TrainRouteModel subModel ) ->
            let
                ( newModel, subCmd ) =
                    TrainRoute.update subMsg subModel
            in
                ( TrainRouteModel newModel
                , Cmd.map TrainRouteMsg subCmd
                )

        ( TrainStopMsg subMsg, TrainStopModel subModel ) ->
            let
                ( newModel, subCmd ) =
                    TrainStop.update subMsg subModel
            in
                ( TrainStopModel newModel
                , Cmd.map TrainStopMsg subCmd
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

        TrainStopPage routeId stopId ->
            TrainStop.load routeId stopId |> Task.map TrainStopModel

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
            TrainRoutes.view model

        TrainRouteModel model ->
            HtmlApp.map TrainRouteMsg <| TrainRoute.view model

        TrainStopModel model ->
            HtmlApp.map TrainStopMsg <| TrainStop.view model

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

        TrainStopPage _ _ ->
            False

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

        TrainStopModel model ->
            model.stop.name ++ " – " ++ model.stop.routeName

        FavoritesModel _ ->
            "Favorites"

        _ ->
            "Not Found"


subscriptions : PageModel -> Sub PageMsg
subscriptions pageModel =
    case pageModel of
        BusStopModel model ->
            Sub.map BusStopMsg <| BusStop.subscriptions model

        TrainStopModel model ->
            Sub.map TrainStopMsg <| TrainStop.subscriptions model

        _ ->
            Sub.none
