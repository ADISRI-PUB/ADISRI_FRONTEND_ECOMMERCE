import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Favicon from "react-favicon"

const GoogleId = import.meta.env.VITE_GOOGLE_SIGN_ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={GoogleId}>
  <React.StrictMode>
    <Favicon url="favicon2.ico" />
    <Provider store={store}>
   <App/>
   </Provider>
  </React.StrictMode>
  </GoogleOAuthProvider>
)

