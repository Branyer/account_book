import React from 'react'
import ReactDOM from 'react-dom/client'


import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import ProtectedRoutes from "./routes/ProtectedRoutes"
import AppProviders from './components/AppProviders'

import routes from "./routes"


import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              {routes.map((route, idx) => (
                <Route
                  key={idx}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Route>
          </Routes>
        </Router>
    </AppProviders>
    
  </React.StrictMode>
)
