import { useLocation } from "react-router-dom"
import { Navigate } from "react-router-dom"
import App from "../../App"
import auth from "../../states/auth"

import { useSnapshot } from "valtio"

const ProtectedRoutes = () => {

  const snap = useSnapshot(auth)

  const location = useLocation()
  const isAuth = snap.authenticated

  return isAuth ? (
    <App />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  )

}

export default ProtectedRoutes