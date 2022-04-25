import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";

import { useLocalStorage, useColorScheme } from "@mantine/hooks";
import { NotificationsProvider } from '@mantine/notifications';

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        theme={{
          fontFamily: "Poppins",
          defaultRadius: 8,
          colorScheme,
        }}
      >
        <NotificationsProvider>
          {children}
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default AppProviders;
