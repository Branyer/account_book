import React from 'react'
import ReactDOM from 'react-dom/client'

import AppProviders from './components/AppProviders'
import Routes from "./routes/Routes"

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(   <React.StrictMode>
        <AppProviders>
            <Routes />
        </AppProviders>
    </React.StrictMode>
    
)
