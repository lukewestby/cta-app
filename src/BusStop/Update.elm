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
    | UpdateFavorites (List ( Favorites.FavoriteType, String ))
    | SaveFavorite
    | RemoveFavorite


load : String -> String -> Task String Model
load routeId stopId =
    let
        stopToStopAndPredictions stop =
            Api.getBusPredictions routeId stopId
                |> Task.map (\predictions -> ( stop, predictions ))
    in
        Api.getBusStop routeId stopId
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
            , Api.getBusPredictions model.routeId model.busStop.id
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
                    List.any ((==) ( Favorites.Bus, model.busStop.id )) favorites
              }
            , Cmd.none
            )

        SaveFavorite ->
            ( model
            , Favorites.saveFavorite ( Favorites.Bus, model.busStop.id )
            )

        RemoveFavorite ->
            ( model
            , Favorites.removeFavorite ( Favorites.Bus, model.busStop.id )
            )
