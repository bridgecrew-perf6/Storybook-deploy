import 'bootstrap/dist/css/bootstrap.css'
import { ThemeProvider } from 'styled-components'
import theme from '/src/styles/theme'
import '/src/styles/bootstrap.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme.dark}>
        <Story />
      </ThemeProvider>
    </>
  )
]
