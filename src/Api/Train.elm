module Api.Train
    exposing
        ( TrainRoute
        , getTrainRoutes
        , getTrainRoute
        , TrainStop
        , getTrainStops
        , getTrainStop
        , TrainPrediction
        , getTrainPredictions
        )

import Date exposing (Date)
import Task exposing (Task)
import Json.Decode exposing (..)
import Json.Decode.Pipeline exposing (..)
import HttpBuilder exposing (..)
import Utils exposing (..)


fullUrl : String -> String
fullUrl relative =
    "https://cta-json-api.herokuapp.com" ++ relative


type alias TrainRoute =
    { id : String
    , name : String
    , color : String
    , textColor : String
    }


trainRouteDecoder : Decoder TrainRoute
trainRouteDecoder =
    decode TrainRoute
        |> required "id" string
        |> required "name" string
        |> required "color" string
        |> required "textColor" string


trainRoutesReader : BodyReader (List TrainRoute)
trainRoutesReader =
    trainRouteDecoder
        |> list
        |> jsonReader


trainRouteReader : BodyReader TrainRoute
trainRouteReader =
    trainRouteDecoder
        |> jsonReader


getTrainRoutes : Task String (List TrainRoute)
getTrainRoutes =
    get (fullUrl "/train/routes")
        |> send trainRoutesReader stringReader
        |> Task.map .data
        |> Task.mapError (\_ -> "Could not fetch train routes")


getTrainRoute : String -> Task String TrainRoute
getTrainRoute routeId =
    get (fullUrl ("/train/routes/" ++ routeId))
        |> send trainRouteReader stringReader
        |> Task.map .data
        |> Task.mapError (\_ -> "Could not fetch train route " ++ routeId)


type alias TrainStop =
    { id : String
    , name : String
    , latitude : Float
    , longitude : Float
    , isAccessible : Bool
    }


trainStopDecoder : Decoder TrainStop
trainStopDecoder =
    decode TrainStop
        |> required "id" string
        |> required "name" string
        |> required "latitude" float
        |> required "longitude" float
        |> required "isAccessible" bool


trainStopsReader : BodyReader (List TrainStop)
trainStopsReader =
    trainStopDecoder
        |> list
        |> jsonReader


trainStopReader : BodyReader TrainStop
trainStopReader =
    trainStopDecoder
        |> jsonReader


getTrainStops : String -> Task String (List TrainStop)
getTrainStops routeId =
    get (fullUrl ("/train/routes/" ++ routeId ++ "/stops"))
        |> send trainStopsReader stringReader
        |> Task.map .data
        |> Task.mapError (\_ -> "Could not fetch stops for train route " ++ routeId)


getTrainStop : String -> String -> Task String TrainStop
getTrainStop routeId stopId =
    get (fullUrl ("/train/routes/" ++ routeId ++ "/stops/" ++ stopId))
        |> send trainStopReader stringReader
        |> Task.map .data
        |> Task.mapError (\_ -> "Could not fetch stop " ++ stopId)


type alias TrainPrediction =
    { destination : String
    , timestamp : Date
    , predictedTime : Date
    , isDelayed : Bool
    , isDue : Bool
    }


trainPredictionDecoder : Decoder TrainPrediction
trainPredictionDecoder =
    decode TrainPrediction
        |> required "destination" string
        |> required "timestamp" dateDecoder
        |> required "predictedTime" dateDecoder
        |> required "isDelayed" bool
        |> required "isDue" bool


trainPredictionsReader : BodyReader (List TrainPrediction)
trainPredictionsReader =
    trainPredictionDecoder
        |> list
        |> jsonReader


getTrainPredictions : String -> String -> Task String (List TrainPrediction)
getTrainPredictions routeId stopId =
    get (fullUrl ("/train/routes/" ++ routeId ++ "/stops/" ++ stopId ++ "/predictions"))
        |> send trainPredictionsReader stringReader
        |> Task.map .data
        |> Task.mapError (\_ -> "Could not fetch predictions for stop " ++ stopId)
