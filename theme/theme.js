import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
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