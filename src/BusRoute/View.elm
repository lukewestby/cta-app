module BusRoute.View exposing (view)

import Dict
import String
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.CssHelpers
import Pages
import Api.Bus exposing (BusStop, Direction)
import BusRoute.Model as Model exposing (Model)
import BusRoute.Update as Update exposing (Msg(..))
import BusRoute.Classes exposing (..)
import Components.SearchBar as SearchBar
import Icons


filterStops : String -> List ( String, List BusStop ) -> List ( String, List BusStop )
filterStops searchText stopGroups =
    let
        lowerSearchText =
            String.toLower searchText
    in
        stopGroups
            |> List.filter (\( name, _ ) -> String.contains lowerSearchText (String.toLower name))


groupId : List BusStop -> String
groupId busStops =
    busStops
        |> List.map .id
        |> String.join "-"


viewStop : String -> ( String, List BusStop ) -> Html Msg
viewStop routeId ( name, stops ) =
    a
        [ class [ StopItem ]
        , href <| Pages.url (Pages.BusStopPage routeId (groupId stops))
        ]
        [ div [ class [ StopName ] ] [ text name ]
        , div [ class [ Chevron ] ] [ Icons.chevronRight ]
        ]


view : Model -> Html Msg
view model =
    div []
        [ div [ class [ ControlsContainer ] ]
            [ SearchBar.view model.searchModel SearchBarMsg
            ]
        , div []
            <| (model.stops
                    |> Dict.toList
                    |> filterStops (SearchBar.getSearchValue model.searchModel)
                    |> List.sortBy fst
                    |> List.map (viewStop model.route.id)
               )
        ]


{ class, classList } =
    Html.CssHelpers.withNamespace cssNamespace
