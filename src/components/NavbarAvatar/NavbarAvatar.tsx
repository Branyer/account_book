import React from "react";
import { Avatar, Group, Text, Box } from "@mantine/core";

interface NavbarAvatarProps {
  name: string;
  image?: string;
}

const NavbarAvatar: React.FC<NavbarAvatarProps> = ({ name, image }) => {
  return (
    <Box
      p="sm"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === "light" ? theme.colors.gray[1] : theme.colors.dark[8],
        borderRadius: theme.defaultRadius,
      })}
    >
      <Group noWrap>
        <Avatar src={image} radius="xl" />
        <Text
          sx={(theme) => ({
            color: theme.colorScheme === "light" ? theme.colors.gray[7] : theme.colors.gray[3],
          })}
        >
          {name}
        </Text>
      </Group>
    </Box>
  );
};

export default NavbarAvatar;
