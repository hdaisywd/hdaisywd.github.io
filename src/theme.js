import { extendTheme, textDecoration } from "@chakra-ui/react"

const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      a: {
        textDecoration: "none",
        color: "inherit",
      }
    }
  }
})

export default theme
