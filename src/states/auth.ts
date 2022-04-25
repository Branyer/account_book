import { proxy } from "valtio";


const auth = proxy({
    authenticated: false,
    userName : ""
})

export default auth