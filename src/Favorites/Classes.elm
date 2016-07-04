module Favorites.Classes exposing (Classes(..), cssNamespace)


cssNamespace : String
cssNamespace =
    "Favorites"


type Classes
    = FavoriteItem
    | ListTitle
    | ItemIcon
    | FavoriteDetails
    | RouteName
    | StopName
    | Chevron
    | EmptyMessage
    | EmptyMessageLink
