module Pages exposing (Page(..), parser, url, navigateTo, redirectTo)

import String
import UrlParser exposing (..)
import Navigation


type Page
    = BusRoutesPage
    | BusRoutePage String
    | NotFound


url : Page -> String
url page =
    case page of
        BusRoutesPage ->
            "bus/routes"

        BusRoutePage routeId ->
            "bus/routes/" ++ routeId

        _ ->
            ""


navigateTo : Page -> Cmd msg
navigateTo page =
    Navigation.newUrl (url page)


redirectTo : Page -> Cmd msg
redirectTo page =
    Navigation.modifyUrl (url page)


pageParser : Parser (Page -> a) a
pageParser =
    oneOf
        [ format BusRoutePage (s "bus" </> s "routes" </> string)
        , format BusRoutesPage (s "bus" </> s "routes")
        ]


parser : Navigation.Parser Page
parser =
    Navigation.makeParser
        (.pathname
            >> String.dropLeft 1
            >> Debug.log "path"
            >> UrlParser.parse identity pageParser
            >> Debug.log "parsed"
            >> Result.withDefault NotFound
        )
