module Screens.TrainStop.Utils exposing (..)

import Api.Train as TrainApi exposing (TrainPrediction, TrainStop)
import Api.Favorites as FavoritesApi exposing (TrainStopSummary)


toTrainStopSummary : String -> TrainStop -> TrainStopSummary
toTrainStopSummary routeId stop =
    { name = stop.name
    , routeName = stop.routeName
    , stopId = stop.id
    , routeId = routeId
    }
