import { MantineProvider } from "@mantine/core"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import ProtectedRoutes from "./routes/ProtectedRoutes"

import routes from "./routes"

function App() {

  return (
    <MantineProvider withNormalizeCSS>
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
    </MantineProvider>

  )
}

export default App
