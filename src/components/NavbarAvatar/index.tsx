import React from "react"
import {  Avatar, Group, Text, Box } from "@mantine/core"

interface NavbarAvatarProps {
    name : string,
    image?: string 
}

const NavbarAvatar : React.FC<NavbarAvatarProps> = ( { name, image } ) => {

    return (
        <Box 
        p="sm"
        sx={(theme) => ({
            backgroundColor: theme.colors.gray[1],
            borderRadius: theme.defaultRadius,
        })}>
            <Group>
                <Avatar src={image} radius="xl"/>
                <Text  sx={(theme) => ({
                    color: theme.colors.gray[7]
                })}>{name}</Text>
            </Group>
        </Box>
    )
}

export default NavbarAvatar