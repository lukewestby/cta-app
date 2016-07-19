module Components.Classes exposing (Classes(..), cssNamespace)


cssNamespace : String
cssNamespace =
    "Components"


type Classes
    = LoadingIcon
    | LoadingContainer
    | SearchIcon
    | SearchInput
    | SearchBarContainer
    | SearchIconFocused
    | SearchBarContainerFocused
    | HeaderNav
    | HeaderNavIcon
    | HeaderNavIconActive
    | FailureView
    | ErrorMessage
    | ReloadButtonContainer
    | ReloadButton
