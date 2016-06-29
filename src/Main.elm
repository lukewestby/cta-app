module Main exposing (..)

import Utils exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html.App as HtmlApp
import Navigation
import Routing
import Pages
import Html.CssHelpers
import Classes exposing (Classes(..), appNamespace)
import Components.Loading as LoadingComponent
import Icons


-- MODEL


type alias Model =
    { pageModel : LoadState String Routing.PageModel
    , currentPage : Pages.Page
    }



-- UPDATE


type Msg
    = PageMsg Pages.Page Routing.PageMsg
    | LoadPageFinish (Result String Routing.PageModel)
    | NavigateTo Pages.Page


init : Pages.Page -> ( Model, Cmd Msg )
init page =
    ( { pageModel = Loading, currentPage = page }
    , Routing.load page
        |> performSucceed LoadPageFinish
    )


urlUpdate : Pages.Page -> Model -> ( Model, Cmd Msg )
urlUpdate page model =
    init page


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LoadPageFinish result ->
            ( { model | pageModel = loadStateFromResult result }
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

        NavigateTo page ->
            ( model
            , Pages.navigateTo page
            )



-- VIEW


viewNavIcon : Pages.Page -> Pages.Page -> Html Msg -> Html Msg
viewNavIcon currentPage pageForIcon icon =
    a
        [ classList
            [ ( HeaderNavIcon, True )
            , ( HeaderNavIconActive, currentPage == pageForIcon )
            ]
        , onClick <| NavigateTo pageForIcon
        ]
        [ icon ]


viewPage : Model -> Html Msg
viewPage model =
    case model.pageModel of
        Success pageModel ->
            div []
                [ div [ class [ PageTitle ] ]
                    [ text <| Routing.title pageModel ]
                , HtmlApp.map (PageMsg model.currentPage) <| Routing.view pageModel
                ]

        Failure _ ->
            text "nope"

        _ ->
            LoadingComponent.view


view : Model -> Html Msg
view model =
    div [ class [ AppContainer ] ]
        [ header [ class [ HeaderNav ] ]
            [ viewNavIcon model.currentPage Pages.NotFound Icons.star
            , viewNavIcon model.currentPage Pages.BusRoutesPage Icons.bus
            , viewNavIcon model.currentPage Pages.NotFound Icons.train
            , viewNavIcon model.currentPage Pages.NotFound Icons.search
            ]
        , main' [ class [ PageContainer ] ]
            [ viewPage model
            ]
        ]


{ class, classList } =
    Html.CssHelpers.withNamespace appNamespace



-- APP


main : Program Never
main =
    Navigation.program Pages.parser
        { init = init
        , update = (\msg model -> Debug.log "out" (update msg model))
        , urlUpdate = urlUpdate
        , view = view
        , subscriptions = always Sub.none
        }
