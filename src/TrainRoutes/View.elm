module TrainRoutes.View exposing (view)

import String
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.CssHelpers
import Pages
import Api.Train exposing (TrainRoute)
import TrainRoutes.Model as Model exposing (Model)
import TrainRoutes.Update as Update exposing (Msg(..))
import TrainRoutes.Classes exposing (..)
import Icons
import Components.SearchBar as SearchBar


viewRouteIdLabel : String -> String -> Html Msg
viewRouteIdLabel routeId color =
    span
        [ class [ RouteIconContainer ]
        , style [ ( "background-color", color ) ]
        ]
        [ span [ class [ RouteIcon ] ] [ Icons.train ] ]


viewRoute : TrainRoute -> Html Msg
viewRoute route =
    a
        [ class [ RouteItem ]
        ]
        [ viewRouteIdLabel route.id route.color
        , div [ class [ RouteName ] ] [ text route.name ]
        , div [ class [ Chevron ] ] [ Icons.chevronRight ]
        ]


fieldMatches : String -> (TrainRoute -> String) -> TrainRoute -> Bool
fieldMatches searchText accessor summary =
    String.contains searchText (String.toLower (accessor summary))


filteredRoutes : Model -> List TrainRoute
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
