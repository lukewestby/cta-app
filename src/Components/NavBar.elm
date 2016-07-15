module Components.NavBar exposing (view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.CssHelpers
import Components.Classes exposing (..)
import Pages exposing (Page)
import Icons


isFavoritesLinkActive : Page -> Bool
isFavoritesLinkActive page =
    case page of
        Pages.FavoritesPage ->
            True

        _ ->
            False


isBusLinkActive : Page -> Bool
isBusLinkActive page =
    case page of
        Pages.BusRoutesPage ->
            True

        Pages.BusRoutePage _ ->
            True

        Pages.BusStopPage _ _ ->
            True

        _ ->
            False


isTrainLinkActive : Page -> Bool
isTrainLinkActive page =
    case page of
        Pages.TrainRoutesPage ->
            True

        Pages.TrainRoutePage _ ->
            True

        Pages.TrainStopPage _ _ ->
            True

        _ ->
            False


viewNavIcon : Bool -> Page -> Html msg -> Html msg
viewNavIcon isActive pageForIcon icon =
    a
        [ classList
            [ ( HeaderNavIcon, True )
            , ( HeaderNavIconActive, isActive )
            ]
        , href <| Pages.url pageForIcon
        ]
        [ icon ]


view : Page -> Html msg
view currentPage =
    header [ class [ HeaderNav ] ]
        [ viewNavIcon (isFavoritesLinkActive currentPage) Pages.FavoritesPage Icons.star
        , viewNavIcon (isBusLinkActive currentPage) Pages.BusRoutesPage Icons.bus
        , viewNavIcon (isTrainLinkActive currentPage) Pages.TrainRoutesPage Icons.train
        ]


{ class, classList } =
    Html.CssHelpers.withNamespace cssNamespace
