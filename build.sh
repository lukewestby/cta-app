#! /bin/bash
elm-css ./src/Stylesheet.elm --output ./build/
elm-make ./src/Main.elm --output ./build/main.js
