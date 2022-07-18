import { Layout } from 'antd'

import theme from './styles/theme'
import { MyRoutes } from './routes'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <Layout.Content>
          <MyRoutes />
        </Layout.Content>
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  )
}