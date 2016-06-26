module BusRoutes.Update exposing (Msg(..), initialize, update)

import Utils exposing (..)
import Pages exposing (Page)
import Api exposing (BusRouteSummary)
import BusRoutes.Model as Model exposing (Model)


type Msg
    = LoadRoutesStart
    | LoadRoutesFinish (Result String (List BusRouteSummary))
    | NavigateTo Page
    | NoOp


initialize : Cmd Msg
initialize =
    constant LoadRoutesStart


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LoadRoutesStart ->
            ( { model | routes = Loading }
            , Api.getBusRoutes |> performSucceed LoadRoutesFinish
            )

        LoadRoutesFinish result ->
            ( { model | routes = loadStateFromResult result }
            , Cmd.none
            )

        NavigateTo page ->
            ( model
            , Pages.navigateTo page
            )

        NoOp ->
            model ! []
