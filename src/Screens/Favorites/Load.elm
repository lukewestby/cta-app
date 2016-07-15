module Screens.Favorites.Load exposing (load)

import Utils exposing (..)
import Task exposing (Task)
import Api.Favorites as FavoritesApi
import Screens.Favorites.Model as Model exposing (Model)


load : Task String Model
load =
    let
        busFavoritesToTrainFavorites busFavorites =
            FavoritesApi.getTrainFavorites
                |> Task.map (\trainFavorites -> ( busFavorites, trainFavorites ))
    in
        FavoritesApi.getBusFavorites
            |> andThen busFavoritesToTrainFavorites
            |> Task.map (\( busFavorites, trainFavorites ) -> Model.model busFavorites trainFavorites)
