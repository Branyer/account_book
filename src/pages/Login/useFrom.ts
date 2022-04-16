import { useLocation } from 'react-router-dom'

type LocationState = {
  from: {
    pathname: string
  }
}

const useFrom = () => {
  const location = useLocation()

  const { from } = location.state
    ? (location.state as LocationState)
    : ({ from: { pathname: '/' } } as LocationState)

  return from.pathname
}

export default useFrom
