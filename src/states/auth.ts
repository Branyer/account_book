import { proxy } from "valtio";
import { auth as fireAuth } from "../firebase.config";
import { onAuthStateChanged, User } from "firebase/auth";

type Auth = {
  user: User | null | undefined;
};

const initialValue: Auth = {
  user: undefined,
};

const auth = proxy( initialValue);

onAuthStateChanged(fireAuth, (user) => {

  auth.user = user
});

export default auth;
