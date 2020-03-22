// custom typefaces
import ThemeProvider from "./src/context/themeProvider"

import "typeface-montserrat"
import "typeface-merriweather"

import "./src/styles/main.scss"

require("prismjs/themes/prism-tomorrow.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")

export const wrapRootElement = ThemeProvider
