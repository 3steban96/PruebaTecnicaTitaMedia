import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { ApolloProvider } from '@apollo/client/react'
import client from './api/graphql/client.js'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ApolloProvider client={client}>      
          <App />
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
