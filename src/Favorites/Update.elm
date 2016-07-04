module Favorites.Update exposing (Msg(..), update)

import Pages exposing (Page)
import Favorites.Model exposing (Model)


type Msg
    = NavigateTo Page


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NavigateTo page ->
            ( model
            , Pages.navigateTo page
            )
