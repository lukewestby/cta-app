module Favorites
    exposing
        ( Favorite(..)
        , getFavorites
        , saveFavorite
        , removeFavorite
        )

import Utils exposing (..)
import Task exposing (Task)
import Json.Decode as Decode exposing (..)
import Json.Encode as Encode
import LocalStorage


type Favorite
    = Bus String
    | Train


favoriteDecoder : Decoder Favorite
favoriteDecoder =
    customDecoder (list string)
        <| \value ->
            case value of
                "Bus" :: ids :: [] ->
                    Ok (Bus ids)

                "Train" :: [] ->
                    Ok Train

                _ ->
                    Err "Can't decode favorite"


favoriteEncoder : Favorite -> Encode.Value
favoriteEncoder favorite =
    case favorite of
        Bus ids ->
            Encode.list
                [ Encode.string "Bus"
                , Encode.string ids
                ]

        Train ->
            Encode.list
                [ Encode.string "Train"
                ]


getFavorites : Task String (List Favorite)
getFavorites =
    let
        parse result =
            result
                |> (flip Result.andThen) (Decode.decodeString (list favoriteDecoder))
    in
        LocalStorage.get "favorites"
            |> Task.mapError (always "Couldn't fetch favorites from LocalStorage")
            |> Task.map (Maybe.withDefault "")
            |> Task.toResult
            |> Task.map parse
            |> (flip Task.andThen) Task.fromResult


set : String -> String -> Task String ()
set l r =
    LocalStorage.set l r
        |> Task.mapError (always "Couldn't save value to LocalStorage")


saveFavorite : Favorite -> Task String ()
saveFavorite favorite =
    getFavorites
        |> Task.map (\favorites -> favorite :: favorites)
        |> Task.map (\favorites -> Encode.list (List.map favoriteEncoder favorites))
        |> Utils.andThen (\jsValue -> set "favorites" (Encode.encode 0 jsValue))


removeFavorite : Favorite -> Task String ()
removeFavorite favorite =
    getFavorites
        |> Task.map (List.filter ((/=) favorite))
        |> Task.map (\favorites -> Encode.list (List.map favoriteEncoder favorites))
        |> Utils.andThen (\jsValue -> set "favorites" (Encode.encode 0 jsValue))
