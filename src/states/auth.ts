import { proxy } from "valtio";
import { auth as fireAuth } from "../firebase.config";
import { onAuthStateChanged, User } from "firebase/auth";

type Auth = {
  user: User | null;
};

const initialValue: Auth = {
  user: null,
};

const auth = proxy(initialValue);

onAuthStateChanged(fireAuth, (user) => {
  auth.user = user
});

export default auth;
