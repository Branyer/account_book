import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import { LoadingOverlay } from "@mantine/core";
import App from "../../App";
import { RequireAuth } from "../ProtectedRoutes/RequireAuth";
import Home from "../../pages/Home";
import Goals from "../../pages/Goals";
import Welcome from "../../pages/Welcome";
import NotFound from "../../pages/NotFound";
import { useAuth } from "../../hooks/useAuth";
import Transactions from "../../pages/Transactions";

export const RoutesComponents: React.FC = () => {
  const snap = useAuth();

  return (
    <Router>
      <Routes>
        <Route element={<App />}>
          {typeof snap.user !== "undefined" ? (
            <>
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />

              <Route
                path="/goals"
                element={
                  <RequireAuth>
                    <Goals />
                  </RequireAuth>
                }
              />

              <Route path="/welcome" element={<Welcome />} />
              <Route path="/login" element={<Login />} />

              <Route
                path="/transactions"
                element={
                  <RequireAuth>
                    <Transactions />
                  </RequireAuth>
                }
              />

              <Route path="*" element={<NotFound />} />
            </>
          ) : (
            <Route
              path="*"
              element={
                <LoadingOverlay
                  styles={(theme) => ({
                    root: {
                      "& div": {
                        backgroundColor:
                          theme.colorScheme === "dark"
                            ? theme.colors.dark[7]
                            : theme.white,
                      },
                    },
                  })}
                  visible={true}
                />
              }
            />
          )}
        </Route>
      </Routes>
    </Router>
  );
};
