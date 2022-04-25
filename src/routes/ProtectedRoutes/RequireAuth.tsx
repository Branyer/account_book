import { useLocation } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { useSnapshot } from "valtio";

import auth from "../../states/auth"

export function RequireAuth({ children }: { children: JSX.Element }) {
  let snap = useSnapshot(auth);
  

  let location = useLocation();


  if (!snap.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}