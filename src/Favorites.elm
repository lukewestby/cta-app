port module Favorites
    exposing
        ( FavoriteType(..)
        , startFavoritesListen
        , favoritesUpdates
        , saveFavorite
        , removeFavorite
        )

import Json.Decode as Decode exposing (..)
import Json.Encode as Encode


type FavoriteType
    = Bus
    | Train


decodeFavoriteType : Decoder FavoriteType
decodeFavoriteType =
    customDecoder string
        <| \value ->
            case value of
                "Bus" ->
                    Ok Bus

                "Train" ->
                    Ok Train

                _ ->
                    Err ("Unknown FavoriteType: " ++ value)


port startFavoritesListenRaw : {} -> Cmd msg


startFavoritesListen : Cmd msg
startFavoritesListen =
    startFavoritesListenRaw {}


port favoritesUpdatesRaw : (Value -> msg) -> Sub msg


extractUnsafe : Result x a -> a
extractUnsafe result =
    case result of
        Ok thing ->
            thing

        Err _ ->
            Debug.crash "couldn't extract result"


favoritesUpdates : (List ( FavoriteType, String ) -> msg) -> Sub msg
favoritesUpdates tagger =
    let
        decoder =
            tuple2 (,) decodeFavoriteType string
                |> list

        decode value =
            value
                |> decodeValue decoder
                |> extractUnsafe
    in
        favoritesUpdatesRaw decode
            |> Sub.map tagger


port saveFavoriteRaw : Value -> Cmd msg


port removeFavoriteRaw : Value -> Cmd msg


saveFavorite : ( FavoriteType, String ) -> Cmd msg
saveFavorite ( favoriteType, stopId ) =
    let
        encoded =
            Encode.list
                [ Encode.string <| toString favoriteType
                , Encode.string stopId
                ]
    in
        saveFavoriteRaw encoded


removeFavorite : ( FavoriteType, String ) -> Cmd msg
removeFavorite ( favoriteType, stopId ) =
    let
        encoded =
            Encode.list
                [ Encode.string <| toString favoriteType
                , Encode.string stopId
                ]
    in
        removeFavoriteRaw encoded
