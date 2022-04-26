import {
  addDoc,
  collection,
  Timestamp,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { customShowNotification } from "./showNotification";
import { db } from "../firebase.config";

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

export const postTransaction = async (
  values: {
    amount: string;
    currency: string;
    tags: never[];
    type: "Deposit" | "Withdraw";
    description: string;
  },
  uid: string
) => {
  await addDoc(collection(db, "users", uid as string, "transactions"), {
    ...values,
    date: Timestamp.now(),
  });

  customShowNotification("green", "Succesful transaction!");

  return true;
};
