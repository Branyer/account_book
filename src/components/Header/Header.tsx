import {
  ActionIcon,
  useMantineColorScheme,
  MediaQuery,
  Header as HeaderMantine,
  Burger,
  useMantineTheme,
  Group,
} from "@mantine/core";
import { signOut } from "firebase/auth";

import Title from "../Title";

import { Sun, MoonStars, Logout } from "tabler-icons-react";
import { auth as fireAuth } from "../../firebase.config";
import { useNavbarContext } from "../Navbar/NavbarProvider/NavbarProvider";
import { useQueryClient } from "react-query";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const queryClient = useQueryClient();

  const theme = useMantineTheme();
  const { opened, setOpened } = useNavbarContext();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const snap = useAuth();

  return (
    <HeaderMantine height={70} p="md">
      <div className="flex items-center h-full">
        {snap.user ? (
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
        ) : null}
        <Group className="justify-between w-full">
          <Title order={1}>Account Book</Title>
          <Group>
            {snap.user ? (
              <ActionIcon
                variant="outline"
                color={"red"}
                onClick={() =>
                  signOut(fireAuth)
                    .then(() => {
                      queryClient.invalidateQueries("transactions");
                      queryClient.clear();
                    })
                    .catch((error) => {
                      // An error happened.
                    })
                }
                title="Logout"
              >
                <Logout size={18} />
              </ActionIcon>
            ) : null}
            <ActionIcon
              variant="outline"
              color={dark ? "yellow" : "blue"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <Sun size={18} /> : <MoonStars size={18} />}
            </ActionIcon>
          </Group>
        </Group>
      </div>
    </HeaderMantine>
  );
};

export default Header;
