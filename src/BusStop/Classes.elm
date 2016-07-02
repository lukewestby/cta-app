module BusStop.Classes exposing (Classes(..), cssNamespace)


cssNamespace : String
cssNamespace =
    "BusStop"


type Classes
    = ItemIcon
    | PredictionItem
    | PredictionDetails
    | StopName
    | RouteName
    | PredictionValue
    | PredictionLabel
    | NearPrediction
    | MediumPrediction
    | FarPrediction
