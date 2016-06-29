module BusRoute.View exposing (view)

import String
import Html exposing (..)
import Html.Events exposing (..)
import Html.CssHelpers
import Pages
import Api exposing (BusStop, Direction)
import BusRoute.Model as Model exposing (Model)
import BusRoute.Update as Update exposing (Msg(..))
import BusRoute.Classes exposing (..)
import Components.SearchBar as SearchBarCmp
import Icons


filterStops : String -> Direction -> List BusStop -> List BusStop
filterStops searchText selectedDirection stops =
    let
        lowerSearchText =
            String.toLower searchText
    in
        stops
            |> List.filter (\stop -> (stop.direction == selectedDirection) && (String.contains lowerSearchText (String.toLower stop.name)))


viewStop : String -> BusStop -> Html Msg
viewStop routeId stop =
    div
        [ class [ StopItem ]
        , onClick <| NavigateTo (Pages.BusStopPage routeId stop.direction stop.id)
        ]
        [ div [ class [ StopName ] ] [ text stop.name ]
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


view : Model -> Html Msg
view model =
    div []
        [ div [ class [ ControlsContainer ] ]
            [ SearchBarCmp.view model.searchText UpdateSearchText ClearSearchText
            , viewDirectionSelector model.selectedDirection model.route.directions
            ]
        , div []
            <| (model.stops
                    |> filterStops model.searchText model.selectedDirection
                    |> List.map (viewStop model.route.id)
               )
        ]


{ class, classList } =
    Html.CssHelpers.withNamespace cssNamespace
