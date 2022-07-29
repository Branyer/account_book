import { AppShell, ScrollArea } from "@mantine/core";

import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import NavbarProvider from "./components/Navbar/NavbarProvider";
import { useAuth } from "./hooks/useAuth";

function App() {
  const snap = useAuth();
  const { pathname = "" } = useLocation();

  console.log(location);

  return (
    <NavbarProvider>
      <AppShell
        sx={(theme) => ({
          backgroundColor: "white",
        })}
        fixed
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        header={<Header />}
        navbar={<Navbar hidden={!Boolean(snap.user)} />}
        aside={<Aside hidden={!Boolean(snap.user)} />}
        styles={{
          main:
            pathname === "/login"
              ? {
                  backgroundImage: "url(/images/backgrounds/back1.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",
                  backgroundSize: "164vw 73vh",
                }
              : undefined,
        }}
      >
        <Outlet />
      </AppShell>
    </NavbarProvider>
  );
}

export default App;
// background-image: url(/images/backgrounds/back1.svg);
//     background-repeat: no-repeat;
//     background-position: bottom;
//     background-size: 164vw 73vh;
