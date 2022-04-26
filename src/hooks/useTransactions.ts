import { useQuery } from "react-query"
import { useSnapshot } from "valtio"
import auth from "../states/auth"
import { getTransactions } from "../utils/firestoreUtils"

export const useTransactions = () => {

    const snap = useSnapshot(auth)
    const query = useQuery(["transactions", snap?.user?.uid as string], () => getTransactions(snap?.user?.uid as string))

    return query

}