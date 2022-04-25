import { Center, Paper } from "@mantine/core"
import { Navigate } from "react-router-dom"

import { useSnapshot } from "valtio"

import auth from "../../states/auth"
import useFrom from "./useFrom"


const Login = () => {

const from = useFrom()

  const snap = useSnapshot(auth)

  const isAuth = snap.authenticated
//   const loginFunc = useLogin()

  return isAuth ? (
    <Navigate to={from === '/login' ? '/' : from} replace />
  ) : (
    <>
      <Center> 
        <Paper>
          

        </Paper>
      </Center>
    </>
  )
}

export default Login