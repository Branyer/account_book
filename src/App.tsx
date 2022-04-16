import { useState } from "react";

import { AppShell, Text, Aside, MediaQuery, Header, Burger, useMantineTheme } from "@mantine/core"
import { Outlet } from "react-router-dom"

import Navbar from "./components/Navbar";

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={  
        <Header height={70} p="md">
          <div className="flex items-center h-full" >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Billing Dashboard</Text>
          </div>
        </Header>
      }
      navbar={<Navbar opened={opened} />}
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 300, lg: 400 }} >
              <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
    >
        <Outlet />
    </AppShell>
  )
}

export default App
