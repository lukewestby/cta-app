module Screens.TrainRoutes.View exposing (view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.CssHelpers
import Pages
import Api.Train exposing (TrainRoute)
import Screens.TrainRoutes.Model as Model exposing (Model)
import Screens.TrainRoutes.Classes exposing (..)
import Icons


viewRouteIcon : String -> Html msg
viewRouteIcon color =
    span
        [ class [ RouteIconContainer ]
        , style [ ( "background-color", color ) ]
        ]
        [ span [ class [ RouteIcon ] ] [ Icons.train ] ]


viewRoute : TrainRoute -> Html msg
viewRoute route =
    a
        [ class [ RouteItem ]
        , href <| Pages.url <| Pages.TrainRoutePage route.id
        ]
        [ viewRouteIcon route.color
        , div [ class [ RouteName ] ] [ text route.name ]
        , div [ class [ Chevron ] ] [ Icons.chevronRight ]
        ]


view : Model -> Html msg
view model =
    div [] (List.map viewRoute model.routes)


{ class, classList } =
    Html.CssHelpers.withNamespace cssNamespace
