import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: ${({ theme }) => theme.colors.primary};
}

a {
  text-decoration: none;
  color: inherit;
}
`

export default GlobalStyle
