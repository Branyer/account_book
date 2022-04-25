import React from "react";

import { Navbar as MantineNavbar, Stack } from "@mantine/core";

import NavbarItem from "../NavbarItem";
import NavbarAvatar from "../NavbarAvatar";

import items from "./navbarItems";
import { useNavbarContext } from "./NavbarProvider/NavbarProvider";


const Navbar = ({hidden} : {hidden : boolean}) => {

  const {opened} = useNavbarContext()

  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      style={{visibility: hidden ? "hidden" : "visible"}}
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
      
    >
      <MantineNavbar.Section grow>
        <Stack>
          {items.map((item) => (
            <NavbarItem {...item} key={item.path} />
          ))}
        </Stack>
      </MantineNavbar.Section>

      <MantineNavbar.Section>
        <NavbarAvatar name="Branyer Vergara" />
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};

export default Navbar;
