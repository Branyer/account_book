import {
  addDoc,
  collection,
  Timestamp,
  getDocs,
  query,
  orderBy,
  setDoc,
  doc,
} from "firebase/firestore";
import { customShowNotification } from "./showNotification";
import { db } from "../firebase.config";
import { addLog } from "./addLog";

export const getTransactions = async (uid: string) => {
  if (!uid) {
    return {
      globalCOP: 0,
      globalUSD: 0,
      transactions: [],
      amounts: {
        cop: 0,
        usd: 0,
      },
    };
  }

  const q = query(
    collection(db, "users", uid, "transactions"),
    orderBy("date", "desc")
  );

  const querySnapshot = await getDocs(q);

  let transactions: any = [];
  let cop = 0;
  let usd = 0;

  querySnapshot.forEach((doc) => {
    let date: Date = doc.data().date.toDate();
    const currency = doc.data().currency;
    const amount = doc.data().amount;
    const type = doc.data().type;

    if (currency === "COP")
      cop += type === "Deposit" ? parseInt(amount) : -parseInt(amount);
    else usd += type === "Deposit" ? parseInt(amount) : -parseInt(amount);

    transactions.push({
      id: doc.id,
      ...doc.data(),
      date: date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      hour: date.toLocaleDateString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  });

  return {
    globalCOP: cop + usd * 3750,
    globalUSD: usd + cop / 3750,
    transactions,
    amounts: {
      cop,
      usd,
    },
  };
};

export const getLogs = async (uid: string) => {
  if (!uid) {
    return { logs: [] };
  }
  const q = query(collection(db, "logs" ));



  const querySnapshot = await getDocs(q);

  
  let logs: any = [];
  
  querySnapshot.forEach((doc) => {
    logs.push({
      ...doc.data(),
    });
  });

  return { logs };
};

export const postTransaction = async (
  values: {
    amount: string;
    currency: string;
    tags: never[];
    type: "Deposit" | "Withdraw";
    description: string;
    id: string;
  },
  uid: string
) => {
  const { amount, currency, tags, type, description, id } = values;

  await setDoc(doc(db, "users", uid as string, "transactions", id), {
    amount,
    currency,
    tags,
    type,
    description,
    date: Timestamp.now(),
  });

  await addLog(`Adding Transaction (${type})`);
  customShowNotification("green", "Succesful transaction!");

  return true;
};
