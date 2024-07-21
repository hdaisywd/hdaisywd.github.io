// custom typefaces
import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
// import "prismjs/themes/prism.css"

import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

import { customTheme } from "./src/theme"

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={customTheme}>
    {element}
  </ChakraProvider>
)

require("prismjs/themes/prism-tomorrow.css")