import { useSnapshot } from "valtio"
import auth from "../states/auth"

export const useAuth = () => useSnapshot(auth)

    



