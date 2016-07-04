module Favorites.Load exposing (load)

import Task exposing (Task)
import Favorites
import Favorites.Model as Model exposing (Model)


load : Task String Model
load =
    Favorites.getBusFavorites
        |> Task.map Model.model
