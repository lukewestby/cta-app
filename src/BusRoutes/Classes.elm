module BusRoutes.Classes exposing (Classes(..), cssNamespace)


cssNamespace : String
cssNamespace =
    "BusRoutes"


type Classes
    = RouteItem
    | RouteIdLabel
    | Chevron
    | RouteNameContainer
    | RouteName
    | ReloadingContainer
    | ControlsContainer
