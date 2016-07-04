module Pages exposing (Page(..), parser, url, navigateTo, redirectTo)

import String
import UrlParser exposing (..)
import Navigation


type Page
    = BusRoutesPage
    | BusRoutePage String
    | BusStopPage String String
    | FavoritesPage
    | NotFound


url : Page -> String
url page =
    "#/"
        ++ case page of
            FavoritesPage ->
                ""

            BusRoutesPage ->
                "bus/routes"

            BusRoutePage routeId ->
                "bus/routes/" ++ routeId

            BusStopPage routeId stopId ->
                "bus/routes/" ++ routeId ++ "/stops/" ++ stopId

            _ ->
                "not-found"


navigateTo : Page -> Cmd msg
navigateTo page =
    Navigation.newUrl (url page)


redirectTo : Page -> Cmd msg
redirectTo page =
    Navigation.modifyUrl (url page)


pageParser : Parser (Page -> a) a
pageParser =
    oneOf
        [ format FavoritesPage (s "")
        , format BusStopPage (s "bus" </> s "routes" </> string </> s "stops" </> string)
        , format BusRoutePage (s "bus" </> s "routes" </> string)
        , format BusRoutesPage (s "bus" </> s "routes")
        ]


parser : Navigation.Parser Page
parser =
    Navigation.makeParser
        (.hash
            >> String.dropLeft 2
            >> UrlParser.parse identity pageParser
            >> Result.withDefault NotFound
        )
