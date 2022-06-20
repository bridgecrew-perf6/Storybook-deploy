import light from './lightTheme'
import dark from './darkTheme'

const defaultTheme = {
  sizes: {
    xxxxsmall: 8,
    xxxsmall: 10,
    xxsmall: 11,
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 18,
    xlarge: 20,
    xxlarge: 24,
    xxxlarge: 28,
    xxxxlarge: 34
  }
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
