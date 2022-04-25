import { useState, useEffect } from 'react'
import auth from '../states/auth'
import { useLocalStorage } from '@mantine/hooks'

/**
 * Hook that checks if the auth object is stored in LocalStorage
 * @returns Boolean value that indicates if the check has already finished
 */
const useCheckAuthStorage = () => {

  const [isAuthStorageChecked, setIsAuthStorageChecked] = useState(false)
  

  useEffect(() => {
    const storageAuth = localStorage.getItem('auth')

    if (storageAuth) {
      const parsedData = JSON.parse(storageAuth)
      auth.user =  parsedData.user
     
      
    }

    setIsAuthStorageChecked(true)
  }, [])

  return isAuthStorageChecked
}

export default useCheckAuthStorage