module Components.SearchBar exposing (Model, Msg, model, view, update, getSearchValue)

import Html exposing (..)
import Html.App as HtmlApp
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html.CssHelpers
import Icons
import Components.Classes exposing (..)


type alias Model =
    { searchValue : String }


model : Model
model =
    { searchValue = "" }


type Msg
    = UpdateSearchValue String
    | ClearSearchValue


getSearchValue : Model -> String
getSearchValue =
    .searchValue


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        UpdateSearchValue value ->
            ( { model | searchValue = value }
            , Cmd.none
            )

        ClearSearchValue ->
            ( { model | searchValue = "" }
            , Cmd.none
            )


view : Model -> (Msg -> msg) -> Html msg
view model upgrade =
    HtmlApp.map upgrade
        <| div [ class [ SearchBarContainer ] ]
            [ span [ class [ SearchIcon ] ] [ Icons.search ]
            , input
                [ type' "text"
                , onInput UpdateSearchValue
                , class [ SearchInput ]
                , value model.searchValue
                ]
                []
            , span
                [ class [ SearchIcon ]
                , onClick ClearSearchValue
                ]
                [ Icons.close ]
            ]


{ class } =
    Html.CssHelpers.withNamespace cssNamespace
