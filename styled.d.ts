import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string
      accent: string
      primary: string
      ligthgray: string
      accentDark: string
      accentLight: string
    }
  }
}
