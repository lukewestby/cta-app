port module BusStop.Update exposing (Msg(..), load, update, initialize)

import String
import Set
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
load routeId stopGroupIds =
    let
        stopIds =
            String.split "-" stopGroupIds

        stopsTask =
            stopIds
                |> List.map (Api.getBusStop routeId)
                |> Task.sequence

        stopsToPredictions stops =
            stopIds
                |> List.map (Api.getBusPredictions routeId)
                |> Task.sequence
                |> Task.map List.concat
                |> Task.map (\predictions -> ( stops, predictions ))
    in
        stopsTask
            |> andThen stopsToPredictions
            |> Task.map (\( stops, predictions ) -> Model.model stops predictions routeId)


sortedIdList : List BusStop -> List String
sortedIdList stops =
    stops
        |> List.map .id
        |> List.sort


getPredictionsForStops : String -> List BusStop -> Task String (List BusPrediction)
getPredictionsForStops routeId stops =
    stops
        |> List.map (.id >> (Api.getBusPredictions routeId))
        |> Task.sequence
        |> Task.map List.concat


initialize : Cmd Msg
initialize =
    Favorites.startFavoritesListen


groupStopIds : List BusStop -> String
groupStopIds stops =
    stops
        |> List.map .id
        |> List.sort
        |> String.join "-"


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        ReloadPredictionsStart ->
            ( model
            , getPredictionsForStops model.routeId model.busStops
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
            let
                favoriteIdLists =
                    favorites
                        |> List.filter (fst >> (==) Favorites.Bus)
                        |> List.map snd

                isFavorited =
                    List.any ((==) (groupStopIds model.busStops)) favoriteIdLists
            in
                ( { model
                    | isFavorited = isFavorited
                  }
                , Cmd.none
                )

        SaveFavorite ->
            ( model
            , Favorites.saveFavorite ( Favorites.Bus, groupStopIds model.busStops )
            )

        RemoveFavorite ->
            ( model
            , Favorites.removeFavorite ( Favorites.Bus, groupStopIds model.busStops )
            )
