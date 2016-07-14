module TrainStop.Classes exposing (Classes(..), cssNamespace)


cssNamespace : String
cssNamespace =
    "TrainStop"


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
