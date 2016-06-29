module BusRoute.Update exposing (Msg(..), load, update)

import Task exposing (Task)
import Utils exposing (..)
import Api exposing (BusRoute, BusStop, Direction)
import Pages
import BusRoute.Model as Model exposing (Model)


type Msg
    = SelectDirection Direction
    | UpdateSearchText String
    | ClearSearchText
    | NavigateTo Pages.Page


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

        UpdateSearchText value ->
            ( { model | searchText = value }
            , Cmd.none
            )

        ClearSearchText ->
            ( { model | searchText = "" }
            , Cmd.none
            )

        NavigateTo page ->
            ( model, Pages.navigateTo page )
