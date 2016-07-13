module TrainRoutes.Update exposing (Msg(..), load, update)

import Task exposing (Task)
import Api.Train as TrainApi exposing (TrainRoute)
import TrainRoutes.Model as Model exposing (Model)
import Components.SearchBar as SearchBar


type Msg
    = SearchBarMsg SearchBar.Msg


load : Task String Model
load =
    TrainApi.getTrainRoutes
        |> Task.map Model.model


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
