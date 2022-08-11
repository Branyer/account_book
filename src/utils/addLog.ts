import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.config";
import auth from "../states/auth";

export const addLog = (action: any, extraInfo = {}) => {
  const date = new Date();

  return addDoc(collection(db, "logs"), {
    action,
    user: auth.user?.email,
    ...extraInfo,
    date: date.toLocaleString(),
  });
};
