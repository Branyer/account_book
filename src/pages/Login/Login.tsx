import { Navigate } from "react-router-dom"

import useFrom from "./useFrom"


const Login = () => {

const from = useFrom()
  const isAuth = true
//   const loginFunc = useLogin()

  return isAuth ? (
    <Navigate to={from === '/login' ? '/' : from} replace />
  ) : (
    <>
      <button onClick={() => console.log("login")}>Login</button>
    </>
  )
}

export default Login