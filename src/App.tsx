import { Layout } from 'antd';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import { MyRoutes } from './routes';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
          <Layout.Content>
            <MyRoutes />
            <GlobalStyle />
          </Layout.Content>
      </Layout>
    </ThemeProvider>
  )
}