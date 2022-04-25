import {
  AppShell,
  ScrollArea,
} from "@mantine/core";

import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

import NavbarProvider from "./components/Navbar/NavbarProvider";
import { useSnapshot } from "valtio";
import auth from "./states/auth";


function App() {

  const snap = useSnapshot(auth)
  
  return (
    <NavbarProvider>
      <AppShell
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === "light" ? 'white' : theme.colors.dark[7]
        })}
        fixed
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        header={<Header />}
        navbar={<Navbar hidden={!Boolean(snap.user) } />}
        aside={<Aside hidden={!Boolean(snap.user)}/>}
      >
        <ScrollArea p="xl" style={{ height: "calc(100vh - 150px)" }}>
         
          <Outlet />
        
        </ScrollArea>
      </AppShell>
    </NavbarProvider>
  );
}

export default App;
