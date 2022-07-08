import { useState } from 'react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from 'styled-components'
import theme from '@/config/theme'
import GlobalStyle from '@/config/globalstyles'

function MyApp({ Component, pageProps }: AppProps) {
  const [client] = useState(() => new QueryClient())
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={client}>
          <GlobalStyle />
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
