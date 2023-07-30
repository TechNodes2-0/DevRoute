import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
  <Auth0Provider
    domain="dev-fkzyzzay6f6jrars.us.auth0.com"
    clientId="jJmfx0xqaITTVv1V8AWIb5QUWSWyOCav"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <App />
    </Auth0Provider>
  </React.StrictMode>
  </BrowserRouter>,
)
