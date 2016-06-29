module BusRoutes.Update exposing (Msg(..), load, update)

import Task exposing (Task)
import Pages exposing (Page)
import Api exposing (BusRouteSummary)
import BusRoutes.Model as Model exposing (Model)


type Msg
    = NavigateTo Page
    | NoOp


load : Task String Model
load =
    Api.getBusRoutes
        |> Task.map Model.model


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NavigateTo page ->
            ( model
            , Pages.navigateTo page
            )

        NoOp ->
            model ! []
