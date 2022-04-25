import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Skeleton } from '@mantine/core';
import Login from "../../pages/Login";
import ProtectedRoutes from "../ProtectedRoutes";
import routes from "../routes.config"
import { LoadingOverlay } from "@mantine/core";
import useCheckAuthStorage from "../../hooks/useCheckAuthStorage";
import App from "../../App";


export const RoutesComponents: React.FC = () => {

  const isAuthStorageChecked = useCheckAuthStorage()

  return (
    <Router>
      <Routes>
        {isAuthStorageChecked
            ?
            <>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoutes />}>
                {routes.map((route, idx) => (
                    <Route key={idx} path={route.path} element={<route.element />} />
                ))}
                </Route>
            </>
            :
            <Route path="*" element={<App />} />
        }
      </Routes>
    </Router>
  );
};
