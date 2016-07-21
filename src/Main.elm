port module Main exposing (..)

import Dict exposing (Dict)
import Utils exposing (..)
import Html exposing (..)
import Html.App as HtmlApp
import Html.CssHelpers
import Navigation
import NetworkConnection exposing (Connection(..))
import Routing
import Pages
import Classes exposing (Classes(..), appNamespace)
import Components.Loading as LoadingComponent
import Components.NavBar as NavBar
import Components.ErrorMessage as ErrorMessage
import Icons


-- MODEL


type alias Model =
    { pageModel : LoadState String Routing.PageModel
    , currentPage : Pages.Page
    , connection : Connection
    , cache : Dict String Routing.PageModel
    }



-- UPDATE


type Msg
    = PageMsg Pages.Page Routing.PageMsg
    | LoadPageFinish Bool (Result String Routing.PageModel)
    | RetryLoad
    | ConnectionChanged Connection


init : Pages.Page -> ( Model, Cmd Msg )
init page =
    ( { pageModel = Loading, currentPage = page, cache = Dict.empty, connection = Online }
    , Cmd.batch
        [ Routing.load page
            |> performSucceed (LoadPageFinish (Routing.isCacheable page))
        , NetworkConnection.connection
            |> performFailproof ConnectionChanged
        ]
    )


urlUpdate : Pages.Page -> Model -> ( Model, Cmd Msg )
urlUpdate page model =
    case Dict.get (Pages.url page) model.cache of
        Just cachedModel ->
            ( { model | pageModel = Success cachedModel, currentPage = page }
            , Cmd.none
            )

        Nothing ->
            ( { model | pageModel = Loading, currentPage = page }
            , Routing.load page |> performSucceed (LoadPageFinish (Routing.isCacheable page))
            )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LoadPageFinish isCacheable result ->
            case result of
                Ok pageModel ->
                    ( { model
                        | pageModel = Success pageModel
                        , cache =
                            if isCacheable then
                                Dict.insert (Pages.url model.currentPage) pageModel model.cache
                            else
                                model.cache
                      }
                    , Cmd.none
                    )

                Err message ->
                    ( { model | pageModel = Failure message }
                    , Cmd.none
                    )

        RetryLoad ->
            init model.currentPage

        ConnectionChanged connection ->
            ( { model | connection = connection }
            , Cmd.none
            )

        PageMsg intendedPage subMsg ->
            case ( intendedPage == model.currentPage, model.pageModel ) of
                ( True, Success pageModel ) ->
                    let
                        ( pageModel, pageCmd ) =
                            Routing.update subMsg pageModel
                    in
                        ( { model | pageModel = Success pageModel }
                        , Cmd.map (PageMsg model.currentPage) pageCmd
                        )

                _ ->
                    ( model, Cmd.none )



-- VIEW


viewPage : Model -> Html Msg
viewPage model =
    case model.pageModel of
        Success pageModel ->
            div []
                [ div [ class [ PageTitle ] ]
                    [ div [ class [ PageTitleInner ] ]
                        [ text <| Routing.title pageModel ]
                    ]
                , HtmlApp.map (PageMsg model.currentPage) <| Routing.view pageModel
                ]

        Failure _ ->
            ErrorMessage.view RetryLoad

        _ ->
            LoadingComponent.view


viewOffline : Html msg
viewOffline =
    div [ class [ MessageContainer ] ]
        [ span [ class [ MessageIcon ] ] [ Icons.warning ]
        , text "Lost internet connection"
        ]


view : Model -> Html Msg
view model =
    div [ class [ AppContainer ] ]
        [ NavBar.view model.currentPage
        , main'
            [ classList
                [ ( PageContainer, True )
                , ( PageWithMessage, model.connection == Offline )
                ]
            ]
            <| flatten
                [ ( True, \_ -> viewPage model )
                , ( model.connection == Offline, \_ -> viewOffline )
                ]
        ]


{ class, classList } =
    Html.CssHelpers.withNamespace appNamespace



-- SUBS


subscriptions : Model -> Sub Msg
subscriptions model =
    let
        pageSub =
            case model.pageModel of
                Success pageModel ->
                    Sub.map (PageMsg model.currentPage) (Routing.subscriptions pageModel)

                _ ->
                    Sub.none
    in
        Sub.batch
            [ pageSub
            , NetworkConnection.connectionChanges ConnectionChanged
            ]



-- APP


main : Program Never
main =
    Navigation.program Pages.parser
        { init = init
        , update = update
        , urlUpdate = urlUpdate
        , view = view
        , subscriptions = subscriptions
        }
