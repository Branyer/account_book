import React from "react";

import { Link } from "react-router-dom";
import { Box, Group, ThemeIcon, Text } from "@mantine/core";
import { Icon } from "tabler-icons-react";


export interface NavbarItemProps {
  path: string;
  text: string;
  iconColor: string;
  Icon: Icon;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  path,
  text,
  iconColor,
  Icon,
}) => {
  return (
    <Box
      component={Link}
      to={path}
      sx={(theme) => ({
        textDecoration: "none",
        "&:hover > div": {
          backgroundColor: theme.colors.gray[1],
        },
      })}
    >
      <Group
        p='sm'
        sx={(theme) => ({
          transition: "all ease-in 300ms",
          borderRadius: theme.defaultRadius,
        })}
      >
        <ThemeIcon variant="light" color={iconColor} radius="md">
          <Icon size={20} />
        </ThemeIcon>
        <Text weight={500} sx={(theme) => ({
            color: theme.colors.gray[6]
        })}>{text}</Text>
      </Group>
    </Box>
  );
};

export default NavbarItem;
