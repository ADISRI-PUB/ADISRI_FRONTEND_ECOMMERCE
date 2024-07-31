import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Favicon from "react-favicon"
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="875412496422-5vpj7j9fd80i8cj6qvigjtiqv4tiudbs.apps.googleusercontent.com">
  <React.StrictMode>
    <Favicon url="favicon2.ico" />
    <Provider store={store}>
   <App/>
   </Provider>
  </React.StrictMode>
  </GoogleOAuthProvider>
)

