module Routing
    exposing
        ( PageModel(..)
        , PageMsg(..)
        , update
        , init
        , view
        , title
        )

import Utils exposing (..)
import Html exposing (Html)
import Html.App as HtmlApp
import Pages exposing (Page(..))
import BusRoute.Model as BusRoute
import BusRoute.Update as BusRoute
import BusRoute.View as BusRoute
import BusRoutes.Model as BusRoutes
import BusRoutes.Update as BusRoutes
import BusRoutes.View as BusRoutes


type PageModel
    = BusRouteModel BusRoute.Model
    | BusRoutesModel BusRoutes.Model
    | NoneModel


type PageMsg
    = BusRouteMsg BusRoute.Msg
    | BusRoutesMsg BusRoutes.Msg
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

        _ ->
            ( model, Cmd.none )


init : Page -> ( PageModel, Cmd PageMsg )
init page =
    case page of
        BusRoutesPage ->
            ( BusRoutesModel BusRoutes.model
            , Cmd.map BusRoutesMsg BusRoutes.initialize
            )

        BusRoutePage routeId ->
            ( BusRouteModel <| BusRoute.model routeId
            , Cmd.map BusRouteMsg BusRoute.initialize
            )

        _ ->
            ( NoneModel, Cmd.none )


view : PageModel -> Html PageMsg
view pageModel =
    case pageModel of
        BusRouteModel model ->
            HtmlApp.map BusRouteMsg <| BusRoute.view model

        BusRoutesModel model ->
            HtmlApp.map BusRoutesMsg <| BusRoutes.view model

        _ ->
            Html.text ""


title : PageModel -> String
title model =
    case model of
        BusRoutesModel _ ->
            "Bus Routes"

        BusRouteModel model ->
            case model.routeData of
                Success routeData ->
                    "Route " ++ model.routeId ++ " - " ++ routeData.route.name

                _ ->
                    "Route " ++ model.routeId

        _ ->
            "Not Found"
