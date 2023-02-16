import { AppContextProvider } from '@/context/AppContext';
import '@/styles/globals.scss'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import dayjs from 'dayjs';
import type { AppProps } from 'next/app'
import { useState } from 'react';
import PageLayout from './pageLayout';


export default function App({ Component, pageProps }: AppProps) {

  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))
    dayjs().locale('nb')
  }
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: colorScheme }}>
        <PageLayout>
          <AppContextProvider>
            <Component {...pageProps} />
          </AppContextProvider>
        </PageLayout>
      </MantineProvider>
    </ColorSchemeProvider >





  )

}
