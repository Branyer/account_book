import { useLocalStorage } from "@mantine/hooks";

const useAuthLocalStorage = () => {

    const [authStorage, setAuthStorage] = useLocalStorage({
        key: "auth",
        defaultValue: {
            user: null
        },
        getInitialValueInEffect: true,
      });
      
      const changeAuth = (value : any) =>
        setAuthStorage(value );


      return {authStorage, changeAuth}
}

export default useAuthLocalStorage