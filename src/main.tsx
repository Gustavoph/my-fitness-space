import React from 'react'
import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client'
import ptBR from 'antd/lib/locale/pt_BR';
import { BrowserRouter } from "react-router-dom";

import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={ptBR}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)
