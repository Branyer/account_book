import {
    Text,
    MediaQuery,
    Header as HeaderMantine,
    Burger,
    useMantineTheme,

  } from "@mantine/core";
import { useNavbarContext } from "../Navbar/NavbarProvider/NavbarProvider";

const Header = () => {
    const theme = useMantineTheme();
    const {opened, setOpened} = useNavbarContext()
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

            <Text>Billing Dashboard</Text>
          </div>
        </HeaderMantine>
    )


}

export default Header