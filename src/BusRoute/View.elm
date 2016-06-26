module BusRoute.View exposing (view)

import Utils exposing (..)
import String
import Html exposing (..)
import Html.Events exposing (..)
import Html.CssHelpers
import Api exposing (BusStop, Direction)
import BusRoute.Model as Model exposing (Model, RouteData)
import BusRoute.Update as Update exposing (Msg(..))
import BusRoute.Classes exposing (..)
import Components.Loading as LoadingComponent
import Components.SearchBar as SearchBarCmp
import Icons


filterStops : String -> Direction -> List BusStop -> List BusStop
filterStops searchText selectedDirection stops =
    stops
        |> List.filter (\stop -> (stop.direction == selectedDirection) && (String.contains searchText stop.name))


viewStop : BusStop -> Html Msg
viewStop summary =
    div [ class [ StopItem ] ]
        [ div [ class [ StopName ] ] [ text summary.name ]
        , div [ class [ Chevron ] ] [ Icons.chevronRight ]
        ]


viewDirectionSelector : Direction -> ( Direction, Direction ) -> Html Msg
viewDirectionSelector selectedDirection directions =
    div [ class [ DirectionsSelector ] ]
        [ button
            [ classList
                [ ( DirectionButton, True )
                , ( ActiveDirectionButton, selectedDirection == fst directions )
                ]
            , onClick <| SelectDirection <| fst directions
            ]
            [ text <| toString <| fst directions ]
        , button
            [ classList
                [ ( DirectionButton, True )
                , ( ActiveDirectionButton, selectedDirection == snd directions )
                ]
            , onClick <| SelectDirection <| snd directions
            ]
            [ text <| toString <| snd directions ]
        ]


viewSuccess : String -> RouteData -> Html Msg
viewSuccess searchText routeData =
    div []
        [ div [ class [ ControlsContainer ] ]
            [ SearchBarCmp.view searchText UpdateSearchText ClearSearchText
            , viewDirectionSelector routeData.selectedDirection routeData.route.directions
            ]
        , div []
            <| (routeData.stops
                    |> filterStops searchText routeData.selectedDirection
                    |> List.map viewStop
               )
        ]


view : Model -> Html Msg
view model =
    case model.routeData of
        Success routeData ->
            viewSuccess model.searchText routeData

        Failure message ->
            text "nope"

        _ ->
            LoadingComponent.view


{ class, classList } =
    Html.CssHelpers.withNamespace cssNamespace
