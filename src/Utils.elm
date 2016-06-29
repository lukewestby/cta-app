module Utils exposing (..)

import Task exposing (Task)
import Process


type LoadState x a
    = Initial
    | Loading
    | Success a
    | Failure x


loadStateFromResult : Result x a -> LoadState x a
loadStateFromResult result =
    case result of
        Ok a ->
            Success a

        Err x ->
            Failure x


loadStateToMaybe : LoadState x a -> Maybe a
loadStateToMaybe loadState =
    case loadState of
        Success x ->
            Just x

        _ ->
            Nothing


loadStateMap : (a -> b) -> LoadState x a -> LoadState x b
loadStateMap tagger loadState =
    case loadState of
        Success a ->
            Success (tagger a)

        Failure x ->
            Failure x

        Loading ->
            Loading

        Initial ->
            Initial


andThen : (a -> Task x b) -> Task x a -> Task x b
andThen =
    flip Task.andThen


never : Never -> a
never a =
    never a


performSucceed : (Result x a -> msg) -> Task x a -> Cmd msg
performSucceed onFinished task =
    task
        |> Task.toResult
        |> Task.perform never onFinished


constant : msg -> Cmd msg
constant msg =
    Task.succeed () |> performSucceed (always msg)


flatten : List ( Bool, a ) -> List a
flatten =
    List.filterMap
        <| \( pred, val ) ->
            if pred then
                Just val
            else
                Nothing


delay : Float -> Task x a -> Task x a
delay howLong task =
    Process.sleep howLong
        |> andThen (always task)
