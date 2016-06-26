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
import Icons


-- MODEL


type alias Model =
    { pageModel : Routing.PageModel
    , currentPage : Pages.Page
    }



-- UPDATE


type Msg
    = PageMsg Routing.PageMsg
    | NavigateTo Pages.Page


init : Pages.Page -> ( Model, Cmd Msg )
init page =
    let
        ( pageModel, pageCmd ) =
            Routing.init page
    in
        ( { pageModel = pageModel, currentPage = page }
        , Cmd.map PageMsg pageCmd
        )


urlUpdate : Pages.Page -> Model -> ( Model, Cmd Msg )
urlUpdate page model =
    init page


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        PageMsg subMsg ->
            let
                ( pageModel, pageCmd ) =
                    Routing.update subMsg model.pageModel
            in
                ( { model | pageModel = pageModel }
                , Cmd.map PageMsg pageCmd
                )

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
            [ div [ class [ PageTitle ] ]
                [ text <| Routing.title model.pageModel ]
            , HtmlApp.map PageMsg <| Routing.view model.pageModel
            ]
        ]


{ class, classList } =
    Html.CssHelpers.withNamespace appNamespace



-- APP


main : Program Never
main =
    Navigation.program Pages.parser
        { init = init
        , update = update
        , urlUpdate = urlUpdate
        , view = view
        , subscriptions = always Sub.none
        }
