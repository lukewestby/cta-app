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
        routeToFirstDirection route =
            Api.getBusStops route.id (fst route.directions)
                |> Task.map (\stops -> { route = route, stops = stops })

        routeAndFirstToSecond { route, stops } =
            Api.getBusStops route.id (snd route.directions)
                |> Task.map
                    (\sndStops ->
                        { route = route
                        , stops = stops ++ sndStops
                        }
                    )
    in
        Api.getBusRoute routeId
            |> andThen routeToFirstDirection
            |> andThen routeAndFirstToSecond
            |> Task.map (\{ route, stops } -> Model.model route stops)


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
