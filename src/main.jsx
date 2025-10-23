import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { ApolloProvider } from '@apollo/client/react'
import client from './api/graphql/client.js'
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>      
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)
