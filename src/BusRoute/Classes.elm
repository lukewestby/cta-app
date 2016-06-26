module BusRoute.Classes exposing (Classes(..), cssNamespace)


cssNamespace : String
cssNamespace =
    "BusRoute"


type Classes
    = StopItem
    | Chevron
    | StopName
    | DirectionsSelector
    | DirectionButton
    | ControlsContainer
    | ActiveDirectionButton
