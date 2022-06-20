import { ApolloProvider } from '@apollo/client'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AuthProvider } from 'contexts/AuthContext'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/bootstrap.scss'
import GlobalStyles from 'styles/global'
import graphql from '../services/graphQL'
import { ToastProvider } from 'react-toast-notifications'
import { PdvOrderProvider } from 'contexts/PdvOrderContext'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'styles/theme'
import { parseCookies, setCookie } from 'nookies'
import { useState } from 'react'
import usePersistedThemeState from 'utils/usePersistedThemeState'
import ToogleTheme from 'components/ToogleTheme'

config.autoAddCss = false

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>('light')

  const [themeDefault, setThemeDefault] = usePersistedThemeState<DefaultTheme>(
    'theme',
    lightTheme
  )

  const toogleTheme = () => {
    const { ['tecnocart.theme']: theme } = parseCookies()
    setThemeDefault(theme === 'light' ? darkTheme : lightTheme)
    setTheme(theme === 'light' ? 'dark' : 'light')
    setCookie(
      undefined,
      'tecnocart.theme',
      theme === 'light' ? `dark` : `light`,
      {
        maxAge: 3600
      }
    )
  }

  return (
    <>
      <Head>
        <title>13 Registro</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
      </Head>
      <ThemeProvider theme={themeDefault}>
        <ToogleTheme label={theme} toogleTheme={toogleTheme} />
        <GlobalStyles />
        <ApolloProvider client={graphql}>
          <AuthProvider>
            <ToastProvider>
              <PdvOrderProvider>
                <Component {...pageProps} />
              </PdvOrderProvider>
            </ToastProvider>
          </AuthProvider>
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
}

export default App
