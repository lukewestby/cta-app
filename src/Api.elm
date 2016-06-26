module Api
    exposing
        ( BusRouteSummary
        , getBusRoutes
        , BusRoute
        , Direction(..)
        , getBusRoute
        , BusStop
        , getBusStops
        , BusVehicle
        , getBusVehicles
        , BusPrediction
        , Approach(..)
        , getBusPredictions
        )

import Process
import Date exposing (Date)
import Task exposing (Task)
import HttpBuilder as Http exposing (..)
import Json.Decode as Decode exposing (..)
import Json.Decode.Pipeline exposing (..)


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
        |> Task.mapError (always "Couldn't fetch bus routes!")


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


directionDecoder : Decoder Direction
directionDecoder =
    customDecoder string
        <| \value ->
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
        |> Task.mapError (always ("Couldn't fetch bus route #" ++ id))


type alias BusStop =
    { id : String
    , name : String
    , latitude : Float
    , longitude : Float
    , direction : Direction
    }


busStopsReader : Direction -> BodyReader (List BusStop)
busStopsReader direction =
    decode BusStop
        |> required "id" string
        |> required "name" string
        |> required "latitude" float
        |> required "longitude" float
        |> hardcoded direction
        |> list
        |> jsonReader


getBusStops : String -> Direction -> Task String (List BusStop)
getBusStops id direction =
    fullUrl ("/bus/routes/" ++ id ++ "/stops/" ++ (toString direction))
        |> get
        |> send (busStopsReader direction) stringReader
        |> Task.map .data
        |> Task.mapError (always ("couldn't get " ++ toString direction ++ " stops for route " ++ id ++ "!"))
        |> (\t -> Process.sleep 2000 `Task.andThen` (\_ -> t))


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
        |> Task.mapError (always ("couldn't get vehicles for route " ++ routeId ++ "!"))


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


busPredictionsReader : BodyReader (List BusPrediction)
busPredictionsReader =
    decode BusPrediction
        |> required "id" dateDecoder
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
        |> jsonReader


getBusPredictions : String -> Task String (List BusPrediction)
getBusPredictions stopId =
    fullUrl ("/bus/stops/" ++ stopId ++ "/predictions")
        |> get
        |> send busPredictionsReader stringReader
        |> Task.map .data
        |> Task.mapError (always ("couldn't fetch predictions for stop " ++ stopId ++ "!"))
