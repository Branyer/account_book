import { AppShell, ScrollArea } from "@mantine/core";

import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import NavbarProvider from "./components/Navbar/NavbarProvider";
import { useAuth } from "./hooks/useAuth";

function App() {
  const snap = useAuth();

  return (
    <NavbarProvider>
      <AppShell
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "light" ? "white" : theme.colors.dark[7],
        })}
        fixed
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        header={<Header />}
        navbar={<Navbar hidden={!Boolean(snap.user)} />}
        aside={<Aside hidden={!Boolean(snap.user)} />}
      >
        <ScrollArea p="xl" style={{ height: "calc(100vh - 150px)" }}>
          <Outlet />
        </ScrollArea>
      </AppShell>
    </NavbarProvider>
  );
}

export default App;
