module Screens.BusRoutes.View exposing (view)

import String
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.CssHelpers
import Pages
import Api.Bus exposing (BusRouteSummary)
import Screens.BusRoutes.Model as Model exposing (Model)
import Screens.BusRoutes.Update as Update exposing (Msg(..))
import Screens.BusRoutes.Classes exposing (..)
import Icons
import Components.SearchBar as SearchBar


viewRouteIdLabel : String -> String -> Html Msg
viewRouteIdLabel routeId color =
    span [ class [ RouteIdLabel ] ]
        [ text routeId ]


viewRoute : BusRouteSummary -> Html Msg
viewRoute summary =
    a
        [ class [ RouteItem ]
        , href <| Pages.url (Pages.BusRoutePage summary.id)
        ]
        [ viewRouteIdLabel summary.id summary.color
        , div [ class [ RouteName ] ] [ text summary.name ]
        , div [ class [ Chevron ] ] [ Icons.chevronRight ]
        ]


fieldMatches : String -> (BusRouteSummary -> String) -> BusRouteSummary -> Bool
fieldMatches searchText accessor summary =
    String.contains searchText (String.toLower (accessor summary))


filteredRoutes : Model -> List BusRouteSummary
filteredRoutes model =
    let
        lowerSearchText =
            String.toLower (SearchBar.getSearchValue model.searchModel)
    in
        model.routes
            |> List.filter (\s -> (fieldMatches lowerSearchText .id s) || (fieldMatches lowerSearchText .name s))


view : Model -> Html Msg
view model =
    div []
        [ div [ class [ ControlsContainer ] ]
            [ SearchBar.view model.searchModel SearchBarMsg
            ]
        , div [] (filteredRoutes model |> List.map viewRoute)
        ]


{ class, classList } =
    Html.CssHelpers.withNamespace cssNamespace
