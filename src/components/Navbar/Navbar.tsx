import { Navbar as MantineNavbar, Stack } from "@mantine/core";

import NavbarItem from "../NavbarItem";
import NavbarAvatar from "../NavbarAvatar";

import items from "./navbarItems";
import { useNavbarContext } from "./NavbarProvider/NavbarProvider";

const Navbar = ({ hidden }: { hidden: boolean }) => {
  const { opened } = useNavbarContext();

  return (
    <MantineNavbar
      hiddenBreakpoint="sm"
      style={{ visibility: hidden ? "hidden" : "visible" }}
      hidden={!opened}
      width={{ sm: 60, lg: 80 }}
    >
      <MantineNavbar.Section grow>
        <Stack
          justify="space-around"
          align="stretch"
          p="md"
          sx={(theme) => ({
            height: "95%",
          })}
        >
          {items.map((item) => (
            <NavbarItem {...item} key={item.path} />
          ))}
        </Stack>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};

export default Navbar;
