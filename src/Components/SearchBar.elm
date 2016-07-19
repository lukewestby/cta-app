module Components.SearchBar exposing (Model, Msg, model, view, update, getSearchValue)

import Html exposing (..)
import Html.App as HtmlApp
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html.CssHelpers
import Icons
import Components.Classes exposing (..)


type alias Model =
    { searchValue : String
    , isFocused : Bool
    }


model : Model
model =
    { searchValue = ""
    , isFocused = False
    }


type Msg
    = UpdateSearchValue String
    | ClearSearchValue
    | FocusInput
    | UnfocusInput


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

        FocusInput ->
            ( { model | isFocused = True }
            , Cmd.none
            )

        UnfocusInput ->
            ( { model | isFocused = False }
            , Cmd.none
            )


view : Model -> (Msg -> msg) -> Html msg
view model upgrade =
    HtmlApp.map upgrade
        <| div
            [ classList
                [ ( SearchBarContainer, True )
                , ( SearchBarContainerFocused, model.isFocused )
                ]
            ]
            [ span
                [ classList
                    [ ( SearchIcon, True )
                    , ( SearchIconFocused, model.isFocused )
                    ]
                ]
                [ Icons.search ]
            , input
                [ type' "text"
                , onInput UpdateSearchValue
                , onFocus FocusInput
                , onBlur UnfocusInput
                , class [ SearchInput ]
                , value model.searchValue
                ]
                []
            , span
                [ classList
                    [ ( SearchIcon, True )
                    , ( SearchIconFocused, model.isFocused )
                    ]
                , onClick ClearSearchValue
                ]
                [ Icons.close ]
            ]


{ class, classList } =
    Html.CssHelpers.withNamespace cssNamespace
