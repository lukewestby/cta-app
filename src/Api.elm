module Api
    exposing
        ( BusRouteSummary
        , getBusRoutes
        , BusRoute
        , Direction(..)
        , parseDirection
        , getBusRoute
        , BusStop
        , getBusStops
        , getBusStop
        , BusVehicle
        , getBusVehicles
        , BusPrediction
        , Approach(..)
        , getBusPredictions
        )

import Time
import Utils exposing (..)
import Date exposing (Date)
import Task exposing (Task)
import HttpBuilder as Http exposing (..)
import Json.Decode as Decode exposing (..)
import Json.Decode.Pipeline exposing (..)


trackError : Http.Error String -> String
trackError error =
    case error of
        UnexpectedPayload msg ->
            msg

        NetworkError ->
            "Failed network"

        Timeout ->
            "timeout"

        BadResponse response ->
            response.data


dateDecoder : Decoder Date
dateDecoder =
    customDecoder string Date.fromString


fullUrl : String -> String
fullUrl relative =
    "http://localhost:1337" ++ relative


type alias BusRouteSummary =
    { id : String
    , name : String
    , color : String
    }


busRouteSummariesReader : BodyReader (List BusRouteSummary)
busRouteSummariesReader =
    decode BusRouteSummary
        |> required "id" string
        |> required "name" string
        |> required "color" string
        |> list
        |> jsonReader


getBusRoutes : Task String (List BusRouteSummary)
getBusRoutes =
    get (fullUrl "/bus/routes")
        |> send busRouteSummariesReader stringReader
        |> Task.map .data
        |> Task.mapError trackError


type alias BusRoute =
    { id : String
    , name : String
    , color : String
    , directions : ( Direction, Direction )
    }


type Direction
    = Northbound
    | Southbound
    | Eastbound
    | Westbound


parseDirection : String -> Result String Direction
parseDirection value =
    case value of
        "Northbound" ->
            Ok Northbound

        "Southbound" ->
            Ok Southbound

        "Eastbound" ->
            Ok Eastbound

        "Westbound" ->
            Ok Westbound

        _ ->
            Err ("Unknown direction " ++ value)


directionDecoder : Decoder Direction
directionDecoder =
    customDecoder string parseDirection


busRouteReader : BodyReader BusRoute
busRouteReader =
    decode BusRoute
        |> required "id" string
        |> required "name" string
        |> required "color" string
        |> required "directions" (tuple2 (,) directionDecoder directionDecoder)
        |> jsonReader


getBusRoute : String -> Task String BusRoute
getBusRoute id =
    fullUrl ("/bus/routes/" ++ id)
        |> get
        |> send busRouteReader stringReader
        |> Task.map .data
        |> Task.mapError trackError


type alias BusStop =
    { id : String
    , name : String
    , latitude : Float
    , longitude : Float
    , direction : Direction
    }


busStopDecoder : Direction -> Decoder BusStop
busStopDecoder direction =
    decode BusStop
        |> required "id" string
        |> required "name" string
        |> required "latitude" float
        |> required "longitude" float
        |> hardcoded direction


busStopsReader : Direction -> BodyReader (List BusStop)
busStopsReader direction =
    busStopDecoder direction |> list |> jsonReader


busStopReader : Direction -> BodyReader BusStop
busStopReader direction =
    busStopDecoder direction |> jsonReader


getBusStops : String -> Direction -> Task String (List BusStop)
getBusStops id direction =
    fullUrl ("/bus/routes/" ++ id ++ "/stops/" ++ (toString direction))
        |> get
        |> send (busStopsReader direction) stringReader
        |> Task.map .data
        |> Task.mapError trackError


getBusStop : String -> Direction -> String -> Task String BusStop
getBusStop routeId direction stopId =
    fullUrl ("/bus/routes/" ++ routeId ++ "/stops/" ++ (toString direction) ++ "/" ++ stopId)
        |> get
        |> send (busStopReader direction) stringReader
        |> Task.map .data
        |> Task.mapError trackError


type alias BusVehicle =
    { id : String
    , updatedAt : Date
    , latitude : Float
    , longitude : Float
    , heading : Int
    , patternId : String
    , patternDistance : Int
    , routeId : String
    , destination : String
    }


busVehiclesReader : BodyReader (List BusVehicle)
busVehiclesReader =
    decode BusVehicle
        |> required "id" string
        |> required "updatedAt" dateDecoder
        |> required "latitude" float
        |> required "longitude" float
        |> required "heading" int
        |> required "patternId" string
        |> required "patternDistance" int
        |> required "routeId" string
        |> required "destination" string
        |> list
        |> jsonReader


getBusVehicles : String -> Task String (List BusVehicle)
getBusVehicles routeId =
    fullUrl ("/bus/routes/" ++ routeId ++ "/vehicles")
        |> get
        |> send busVehiclesReader stringReader
        |> Task.map .data
        |> Task.mapError trackError


type alias BusPrediction =
    { timestamp : Date
    , approach : Approach
    , stopId : String
    , stopName : String
    , vehicleId : String
    , distance : Int
    , routeId : String
    , routeDirection : Direction
    , vehicleDestination : String
    , predictedTime : Date
    , isDelayed : Bool
    }


type Approach
    = Arriving
    | Departing


approachDecoder : Decoder Approach
approachDecoder =
    customDecoder string
        <| \value ->
            case value of
                "Arriving" ->
                    Ok Arriving

                "Departing" ->
                    Ok Departing

                _ ->
                    Err ("Unknown approach " ++ value)


busPredictionsDecoder : Decoder (List BusPrediction)
busPredictionsDecoder =
    decode BusPrediction
        |> required "timestamp" dateDecoder
        |> required "approach" approachDecoder
        |> required "stopId" string
        |> required "stopName" string
        |> required "vehicleId" string
        |> required "distance" int
        |> required "routeId" string
        |> required "routeDirection" directionDecoder
        |> required "vehicleDestination" string
        |> required "predictedTime" dateDecoder
        |> required "isDelayed" bool
        |> list


busPredictionsReader : BodyReader (List BusPrediction)
busPredictionsReader =
    jsonReader busPredictionsDecoder


getBusPredictions : String -> Direction -> String -> Task String (List BusPrediction)
getBusPredictions routeId direction stopId =
    fullUrl ("/bus/routes/" ++ routeId ++ "/stops/" ++ toString direction ++ "/" ++ stopId ++ "/predictions")
        |> get
        |> send busPredictionsReader stringReader
        |> Task.map .data
        |> Task.mapError trackError
