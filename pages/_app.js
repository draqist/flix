import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import  theme  from '../theme/theme';
import '@fontsource/poppins';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
       <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
