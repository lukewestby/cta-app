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
import Components.SearchBar as SearchBar
import Icons


filterStops : String -> List BusStop -> List BusStop
filterStops searchText stops =
    let
        lowerSearchText =
            String.toLower searchText
    in
        stops
            |> List.filter (\stop -> String.contains lowerSearchText (String.toLower stop.name))


viewStop : String -> BusStop -> Html Msg
viewStop routeId stop =
    div
        [ class [ StopItem ]
        , onClick <| NavigateTo (Pages.BusStopPage routeId stop.id)
        ]
        [ div [ class [ StopName ] ] [ text stop.name ]
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
                    |> filterStops (SearchBar.getSearchValue model.searchModel)
                    |> List.map (viewStop model.route.id)
               )
        ]


{ class, classList } =
    Html.CssHelpers.withNamespace cssNamespace
