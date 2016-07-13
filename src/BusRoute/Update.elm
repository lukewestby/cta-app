module BusRoute.Update exposing (Msg(..), load, update)

import Task exposing (Task)
import Utils exposing (..)
import Api.Bus as BusApi exposing (BusRoute, BusStop, Direction)
import BusRoute.Model as Model exposing (Model)
import Components.SearchBar as SearchBar


type Msg
    = SearchBarMsg SearchBar.Msg


load : String -> Task String Model
load routeId =
    let
        routeToStops route =
            BusApi.getBusStops route.id
                |> Task.map (\stops -> ( route, stops ))
    in
        BusApi.getBusRoute routeId
            |> andThen routeToStops
            |> Task.map (\( route, stops ) -> Model.model route stops)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SearchBarMsg subMsg ->
            let
                ( subModel, subCmd ) =
                    SearchBar.update subMsg model.searchModel
            in
                ( { model | searchModel = subModel }
                , Cmd.map SearchBarMsg subCmd
                )
