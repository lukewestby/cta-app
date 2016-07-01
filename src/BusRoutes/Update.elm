module BusRoutes.Update exposing (Msg(..), load, update)

import Task exposing (Task)
import Pages exposing (Page)
import Api exposing (BusRouteSummary)
import BusRoutes.Model as Model exposing (Model)
import Components.SearchBar as SearchBar


type Msg
    = NavigateTo Page
    | SearchBarMsg SearchBar.Msg


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

        SearchBarMsg subMsg ->
            let
                ( subModel, subCmd ) =
                    SearchBar.update subMsg model.searchModel
            in
                ( { model | searchModel = subModel }
                , Cmd.map SearchBarMsg subCmd
                )
