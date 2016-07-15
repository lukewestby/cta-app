module Api.Favorites
    exposing
        ( BusStopSummary
        , getBusFavorites
        , saveBusFavorite
        , removeBusFavorite
        , TrainStopSummary
        , getTrainFavorites
        , saveTrainFavorite
        , removeTrainFavorite
        )

import Utils exposing (..)
import Task exposing (Task)
import Json.Decode as Decode exposing (..)
import Json.Decode.Pipeline exposing (..)
import Json.Encode as Encode
import LocalStorage


type alias BusStopSummary =
    { name : String
    , routeId : String
    , stopIds : List String
    }


type alias TrainStopSummary =
    { name : String
    , routeName : String
    , routeId : String
    , stopId : String
    }


busStopSummaryDecoder : Decoder BusStopSummary
busStopSummaryDecoder =
    decode BusStopSummary
        |> required "name" string
        |> required "routeId" string
        |> required "stopIds" (list string)


busStopSummaryEncoder : BusStopSummary -> Encode.Value
busStopSummaryEncoder summary =
    Encode.object
        [ ( "name", Encode.string summary.name )
        , ( "routeId", Encode.string summary.routeId )
        , ( "stopIds", Encode.list <| List.map Encode.string summary.stopIds )
        ]


trainStopSummaryDecoder : Decoder TrainStopSummary
trainStopSummaryDecoder =
    decode TrainStopSummary
        |> required "name" string
        |> required "routeName" string
        |> required "routeId" string
        |> required "stopId" string


trainStopSummaryEncoder : TrainStopSummary -> Encode.Value
trainStopSummaryEncoder summary =
    Encode.object
        [ ( "name", Encode.string summary.name )
        , ( "routeName", Encode.string summary.routeName )
        , ( "routeId", Encode.string summary.routeId )
        , ( "stopId", Encode.string summary.stopId )
        ]


getBusFavorites : Task String (List BusStopSummary)
getBusFavorites =
    let
        parse result =
            result
                |> (flip Result.andThen) (Decode.decodeString (list busStopSummaryDecoder))
    in
        LocalStorage.get "busFavorites"
            |> Task.mapError (always "Couldn't fetch favorites from LocalStorage")
            |> Task.map (Maybe.withDefault "[]")
            |> Task.toResult
            |> Task.map parse
            |> (flip Task.andThen) Task.fromResult


set : String -> String -> Task String ()
set l r =
    LocalStorage.set l r
        |> Task.mapError (always "Couldn't save value to LocalStorage")


saveBusFavorite : BusStopSummary -> Task String ()
saveBusFavorite summary =
    getBusFavorites
        |> Task.map (\favorites -> summary :: favorites)
        |> Task.map (\favorites -> Encode.list (List.map busStopSummaryEncoder favorites))
        |> Utils.andThen (\jsValue -> set "busFavorites" (Encode.encode 0 jsValue))


removeBusFavorite : BusStopSummary -> Task String ()
removeBusFavorite summary =
    getBusFavorites
        |> Task.map (List.filter ((/=) summary))
        |> Task.map (\favorites -> Encode.list (List.map busStopSummaryEncoder favorites))
        |> Utils.andThen (\jsValue -> set "busFavorites" (Encode.encode 0 jsValue))


getTrainFavorites : Task String (List TrainStopSummary)
getTrainFavorites =
    let
        parse result =
            result
                |> (flip Result.andThen) (Decode.decodeString (list trainStopSummaryDecoder))
    in
        LocalStorage.get "trainFavorites"
            |> Task.mapError (always "Couldn't fetch favorites from LocalStorage")
            |> Task.map (Maybe.withDefault "[]")
            |> Task.toResult
            |> Task.map parse
            |> (flip Task.andThen) Task.fromResult


saveTrainFavorite : TrainStopSummary -> Task String ()
saveTrainFavorite summary =
    getTrainFavorites
        |> Task.map (\favorites -> summary :: favorites)
        |> Task.map (\favorites -> Encode.list (List.map trainStopSummaryEncoder favorites))
        |> Utils.andThen (\jsValue -> set "trainFavorites" (Encode.encode 0 jsValue))


removeTrainFavorite : TrainStopSummary -> Task String ()
removeTrainFavorite summary =
    getTrainFavorites
        |> Task.map (List.filter ((/=) summary))
        |> Task.map (\favorites -> Encode.list (List.map trainStopSummaryEncoder favorites))
        |> Utils.andThen (\jsValue -> set "trainFavorites" (Encode.encode 0 jsValue))
