import { proxy } from "valtio";
import { auth as fireAuth } from "../firebase.config";
import { onAuthStateChanged, User } from "firebase/auth";

type Auth = {
  user: Partial<User> | null | undefined;
};

const initialValue: Auth = {
  user: undefined,
};

const auth = proxy(initialValue);

onAuthStateChanged(fireAuth, (user) => {
  if (user) {
    const { email, uid, displayName } = user;

    auth.user = { email, uid, displayName };
  } else {
    auth.user = user;
  }
});

export default auth;
