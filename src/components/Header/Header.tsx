import {
  ActionIcon,
  useMantineColorScheme,
  MediaQuery,
  Header as HeaderMantine,
  Burger,
  useMantineTheme,
  Group,
} from "@mantine/core";

import Title from "../Title";

import { Sun, MoonStars } from "tabler-icons-react";

import { useNavbarContext } from "../Navbar/NavbarProvider/NavbarProvider";

const Header = () => {
  const theme = useMantineTheme();
  const { opened, setOpened } = useNavbarContext();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <HeaderMantine height={70} p="md">
      <div className="flex items-center h-full">
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Group className="justify-between w-full">
          <Title order={1}>Account Book</Title>
          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Group>
      </div>
    </HeaderMantine>
  );
};

export default Header;
