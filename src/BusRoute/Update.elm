module BusRoute.Update exposing (Msg(..), load, update)

import Task exposing (Task)
import Utils exposing (..)
import Api exposing (BusRoute, BusStop, Direction)
import Pages
import BusRoute.Model as Model exposing (Model)
import Components.SearchBar as SearchBar


type Msg
    = SelectDirection Direction
    | NavigateTo Pages.Page
    | SearchBarMsg SearchBar.Msg


load : String -> Task String Model
load routeId =
    let
        routeToStops route =
            Api.getBusStops route.id
                |> Task.map (\stops -> ( route, stops ))

        filteredStops ( route, stops ) =
            ( route, listUniqueBy .name stops )
    in
        Api.getBusRoute routeId
            |> andThen routeToStops
            |> Task.map filteredStops
            |> Task.map (\( route, stops ) -> Model.model route stops)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SelectDirection direction ->
            ( { model | selectedDirection = direction }
            , Cmd.none
            )

        NavigateTo page ->
            ( model, Pages.navigateTo page )

        SearchBarMsg subMsg ->
            let
                ( subModel, subCmd ) =
                    SearchBar.update subMsg model.searchModel
            in
                ( { model | searchModel = subModel }
                , Cmd.map SearchBarMsg subCmd
                )
