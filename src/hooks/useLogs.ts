import { useQuery } from "react-query"
import { getLogs } from "../utils/firestoreUtils"
import { useAuth } from "./useAuth"

export const useLogs = () => {
  const snap = useAuth()
  return useQuery(["logs", snap?.user?.uid as string], () => getLogs(snap?.user?.uid as string))
}