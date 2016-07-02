port module BusStop.Update exposing (Msg(..), load, update, initialize)

import Utils exposing (..)
import Task exposing (Task)
import Api exposing (BusPrediction, BusStop, Direction)
import Favorites
import BusStop.Model as Model exposing (Model)


type Msg
    = NoOp
    | ReloadPredictionsStart
    | ReloadPredictionsFinish (Result String (List BusPrediction))
    | UpdateFavorites (List ( String, String, Direction ))
    | SaveFavorite
    | RemoveFavorite


load : String -> Direction -> String -> Task String Model
load routeId direction stopId =
    let
        stopToStopAndPredictions stop =
            Api.getBusPredictions routeId direction stopId
                |> Task.map (\predictions -> ( stop, predictions ))
    in
        Api.getBusStop routeId direction stopId
            |> andThen stopToStopAndPredictions
            |> Task.map (\( stop, predictions ) -> Model.model stop predictions routeId)


initialize : Cmd Msg
initialize =
    Favorites.startFavoritesListen


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        ReloadPredictionsStart ->
            ( model
            , Api.getBusPredictions model.routeId model.busStop.direction model.busStop.id
                |> performSucceed ReloadPredictionsFinish
            )

        ReloadPredictionsFinish result ->
            case result of
                Ok predictions ->
                    ( { model | predictions = predictions }
                    , Cmd.none
                    )

                Err _ ->
                    ( model, Cmd.none )

        UpdateFavorites favorites ->
            ( { model
                | isFavorited =
                    List.any ((==) ( model.routeId, model.busStop.id, model.busStop.direction )) favorites
              }
            , Cmd.none
            )

        SaveFavorite ->
            ( model
            , Favorites.saveFavorite ( model.routeId, model.busStop.id, model.busStop.direction )
            )

        RemoveFavorite ->
            ( model
            , Favorites.removeFavorite ( model.routeId, model.busStop.id, model.busStop.direction )
            )
