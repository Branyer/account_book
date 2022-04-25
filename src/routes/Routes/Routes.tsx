import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Skeleton } from '@mantine/core';
import Login from "../../pages/Login";
import ProtectedRoutes from "../ProtectedRoutes";
import routes from "../routes.config"
import { LoadingOverlay } from "@mantine/core";
import useCheckAuthStorage from "../../hooks/useCheckAuthStorage";
import App from "../../App";
import { RequireAuth } from "../ProtectedRoutes/RequireAuth";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import { useSnapshot } from "valtio";
import auth from "../../states/auth";


export const RoutesComponents: React.FC = () => {

  const snap = useSnapshot(auth)

  return (
    <Router>
      <Routes>
          <Route element={<App />}>
            {typeof snap.user !== 'undefined' ? 
              <>
                <Route path="/" element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                } />
                
                  <Route path="/login" element={<Login />} />

                
                  <Route path="*" element={<NotFound />} />

                </>
              :
              <Route path="*" element={<LoadingOverlay  
                
                styles={(theme) => ({

                  root: {
                    '& div': {

                      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
                    }
                  }


                })}
                visible={true}/>} />
          }
            
          </Route>
      </Routes>
    </Router>
  );
};
