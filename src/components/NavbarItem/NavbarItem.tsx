import React from "react";

import { Link } from "react-router-dom";
import { Box, Group, ThemeIcon, Text, MediaQuery } from "@mantine/core";
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
          backgroundColor:
            theme.colorScheme === "light"
              ? "#F2F2F2"
              : theme.colors.dark[8],
        },
      })
    }
    >
      <Group
        p="sm"
        sx={(theme) => ({
          transition: "all ease-in 300ms",
          borderRadius: theme.defaultRadius,
        })}
      >
        <ThemeIcon
          variant="light"
          radius="md"
          sx={(theme) => ({
            backgroundColor: "transparent",
          })}
        >
          <Icon size={24} color={iconColor} />
        </ThemeIcon>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Text
            weight={500}
            sx={(theme) => ({
              color:
                theme.colorScheme === "light"
                  ? theme.colors.gray[7]
                  : theme.colors.gray[3],
            })}
          >
            {text}
          </Text>
        </MediaQuery>
      </Group>
    </Box>
  );
};

export default NavbarItem;
