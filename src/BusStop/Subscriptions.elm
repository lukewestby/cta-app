port module BusStop.Subscriptions exposing (subscriptions)

import Time
import BusStop.Model exposing (Model)
import BusStop.Update exposing (Msg(..))
import Favorites


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Time.every (60 * Time.second) (always ReloadPredictionsStart)
        , Favorites.favoritesUpdates UpdateFavorites
        ]
