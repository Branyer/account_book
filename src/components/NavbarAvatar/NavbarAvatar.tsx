import React from "react";
import { Avatar, Group, Text, Box } from "@mantine/core";
import { useSnapshot } from "valtio";
import auth from "../../states/auth";

interface NavbarAvatarProps {
  name: string;
  image?: string;
}

const NavbarAvatar: React.FC<NavbarAvatarProps> = ({ name, image }) => {

  const snap = useSnapshot(auth)

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
            fontSize: 14,
            color: theme.colorScheme === "light" ? theme.colors.gray[7] : theme.colors.gray[3],
          })}
        >
          {snap.user?.displayName}
        </Text>
      </Group>
    </Box>
  );
};

export default NavbarAvatar;
