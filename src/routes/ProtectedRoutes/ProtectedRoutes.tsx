import { useLocation } from "react-router-dom"
import { Navigate } from "react-router-dom"
import App from "../../App"


const ProtectedRoutes = () => {

  const location = useLocation()
  const isAuth = true

  return isAuth ? (
    <App />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  )

}

export default ProtectedRoutes