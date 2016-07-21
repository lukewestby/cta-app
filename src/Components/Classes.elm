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
    | HeaderNavInner
    | HeaderNavIcon
    | HeaderNavIconActive
    | FailureView
    | ErrorMessage
    | ReloadButtonContainer
    | ReloadButton
