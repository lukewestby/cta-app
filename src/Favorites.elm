port module Favorites
    exposing
        ( startFavoritesListen
        , favoritesUpdates
        , saveFavorite
        , removeFavorite
        )

import Json.Decode as Decode exposing (..)
import Json.Encode as Encode
import Api exposing (Direction(..))


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


favoritesUpdates : (List ( String, String, Direction ) -> msg) -> Sub msg
favoritesUpdates tagger =
    let
        decoder =
            tuple3 (,,) string string (customDecoder string Api.parseDirection)
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


saveFavorite : ( String, String, Direction ) -> Cmd msg
saveFavorite ( routeId, stopId, direction ) =
    let
        encoded =
            Encode.list
                [ Encode.string routeId
                , Encode.string stopId
                , Encode.string (toString direction)
                ]
    in
        saveFavoriteRaw encoded


removeFavorite : ( String, String, Direction ) -> Cmd msg
removeFavorite ( routeId, stopId, direction ) =
    let
        encoded =
            Encode.list
                [ Encode.string routeId
                , Encode.string stopId
                , Encode.string (toString direction)
                ]
    in
        removeFavoriteRaw encoded
