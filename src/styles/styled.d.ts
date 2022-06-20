import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: {
      xxxxsmall: number
      xxxsmall: number
      xxsmall: number
      xsmall: number
      small: number
      medium: number
      large: number
      xlarge: number
      xxlarge: number
      xxxlarge: number
      xxxxlarge: number
    }
    colors: {
      white: string
      primary: string
      secondary: string
      success: string
      info: string
      warning: string
      danger: string
      light: string
      dark: string
      grey: string
      background: string
      backgroundNavbar: string
      textDefault: string
      textWithBackground: string
      textLink: string
    }
    gray: {
      'gray-100': string
      'gray-200': string
      'gray-300': string
      'gray-400': string
      'gray-500': string
      'gray-600': string
      'gray-700': string
      'gray-800': string
      'gray-900': string
    }
  }
}
