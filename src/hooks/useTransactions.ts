import { useQuery } from "react-query"
import { getTransactions } from "../utils/firestoreUtils"
import { useAuth } from "./useAuth"

export const useTransactions = () => {
    const snap = useAuth()
    const query = useQuery(["transactions", snap?.user?.uid as string], () => getTransactions(snap?.user?.uid as string))

    return query

}