module TrainRoute.Classes exposing (Classes(..), cssNamespace)


cssNamespace : String
cssNamespace =
    "TrainRoute"


type Classes
    = StopItem
    | Chevron
    | StopName
    | DirectionsSelector
    | DirectionButton
    | ControlsContainer
    | ActiveDirectionButton
