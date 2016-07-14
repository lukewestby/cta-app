module TrainRoutes.View exposing (view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.CssHelpers
import Pages
import Api.Train exposing (TrainRoute)
import TrainRoutes.Model as Model exposing (Model)
import TrainRoutes.Update as Update exposing (Msg(..))
import TrainRoutes.Classes exposing (..)
import Icons


viewRouteIcon : String -> Html Msg
viewRouteIcon color =
    span
        [ class [ RouteIconContainer ]
        , style [ ( "background-color", color ) ]
        ]
        [ span [ class [ RouteIcon ] ] [ Icons.train ] ]


viewRoute : TrainRoute -> Html Msg
viewRoute route =
    a
        [ class [ RouteItem ]
        , href <| Pages.url <| Pages.TrainRoutePage route.id
        ]
        [ viewRouteIcon route.color
        , div [ class [ RouteName ] ] [ text route.name ]
        , div [ class [ Chevron ] ] [ Icons.chevronRight ]
        ]


view : Model -> Html Msg
view model =
    div [] (List.map viewRoute model.routes)


{ class, classList } =
    Html.CssHelpers.withNamespace cssNamespace
