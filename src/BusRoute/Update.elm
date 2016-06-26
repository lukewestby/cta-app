module BusRoute.Update exposing (Msg(..), initialize, update)

import Task exposing (Task)
import Utils exposing (..)
import Api exposing (BusRoute, BusStop, Direction)
import BusRoute.Model as Model exposing (Model, RouteData)


type Msg
    = LoadRouteDataStart
    | LoadRouteDataFinish (Result String RouteData)
    | SelectDirection Direction
    | UpdateSearchText String
    | ClearSearchText


initialize : Cmd Msg
initialize =
    constant LoadRouteDataStart


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LoadRouteDataStart ->
            ( { model | routeData = Loading }
            , loadRouteData model.routeId |> performSucceed LoadRouteDataFinish
            )

        LoadRouteDataFinish result ->
            ( { model | routeData = loadStateFromResult result }
            , Cmd.none
            )

        SelectDirection direction ->
            ( { model
                | routeData =
                    model.routeData
                        |> loadStateMap (\data -> { data | selectedDirection = direction })
              }
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


loadRouteData : String -> Task String RouteData
loadRouteData routeId =
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
                        , selectedDirection = (fst route.directions)
                        }
                    )
    in
        Api.getBusRoute routeId
            |> andThen routeToFirstDirection
            |> andThen routeAndFirstToSecond
