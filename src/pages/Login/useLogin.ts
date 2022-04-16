// import { useMutation, useQueryClient } from 'react-query'

// import { useAppDispatch } from '../../app/hooks'
// import { AuthState, setAuth } from '../../features/auth/authSlice'

// import login from '../../utils/api/login'

const useLogin = () => {
//   const dispatch = useAppDispatch()
//   const queryClient = useQueryClient()

//   const mutation = useMutation(login, {
//     onError: (_error, _variables, _context) => {
//       // An error happened!
//     },
//     onSuccess: (data: AuthState) => {
//       dispatch(setAuth(data))
//       localStorage.setItem('auth', JSON.stringify(data))
//       queryClient.invalidateQueries()
//     },
//   })

//   return mutation.mutate
}

export default useLogin
