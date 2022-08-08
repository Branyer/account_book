import { useLocation } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth";

export function RequireAuth({ children }: { children: JSX.Element }) {
  let snap = useAuth()

  let location = useLocation();

  if (!snap.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/welcome" state={{ from: location }} replace />;
  }

  return children;
}