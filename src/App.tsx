import {
  AppShell,
  ScrollArea,
} from "@mantine/core";

import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

import NavbarProvider from "./components/Navbar/NavbarProvider";

function App() {
  return (
    <NavbarProvider>
      <AppShell
        fixed
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        header={<Header />}
        navbar={<Navbar />}
        aside={<Aside />}
      >
        <ScrollArea p="xl" style={{ height: "calc(100vh - 103px)" }}>
          <Outlet />
        </ScrollArea>
      </AppShell>
    </NavbarProvider>
  );
}

export default App;
