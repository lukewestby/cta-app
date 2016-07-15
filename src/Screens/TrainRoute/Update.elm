module Screens.TrainRoute.Update exposing (Msg(..), update)

import Screens.TrainRoute.Model as Model exposing (Model)
import Components.SearchBar as SearchBar


type Msg
    = SearchBarMsg SearchBar.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SearchBarMsg subMsg ->
            let
                ( subModel, subCmd ) =
                    SearchBar.update subMsg model.searchModel
            in
                ( { model | searchModel = subModel }
                , Cmd.map SearchBarMsg subCmd
                )
