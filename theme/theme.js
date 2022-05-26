import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        }
      },
      MenuButton: {
        baseStyle: {
          _focus: {
            boxShadow: 'none',
          }
        },
      },
      Link: {
        baseStyle: {
          _focus: {
            outline: 'none',
          }
        },
      }
    }
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
})

export default theme