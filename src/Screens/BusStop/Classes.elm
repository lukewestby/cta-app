module Screens.BusStop.Classes exposing (Classes(..), cssNamespace)


cssNamespace : String
cssNamespace =
    "Screens_BusStop"


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
    | ControlsContainer
    | FavoriteContainer
    | FavoriteIcon
    | FavoriteText
    | DirectionLabel
