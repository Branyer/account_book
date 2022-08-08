import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";

import { useLocalStorage, useColorScheme } from "@mantine/hooks";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from '@mantine/notifications';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
interface AppProvidersProps {
  children: React.ReactNode;
}

import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity
    },
  }
})

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme("light");

  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider
        colorScheme={"light"}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withNormalizeCSS
          theme={{
            fontFamily: "Poppins",
            fontSizes: {
              xl: 32,
              lg: 28,
              md: 24,
              sm: 18,
              xs: 14,
            },
            headings: {
              fontFamily: 'Poppins',
              sizes: {
                h1: { fontWeight: 700, fontSize: 32, lineHeight: 1.5 },
                h2: { fontWeight: 700, fontSize: 28, lineHeight: 1.5 },
                h3: { fontWeight: 500, fontSize: 24, lineHeight: 1.5 },
                h4: { fontWeight: 400, fontSize: 24, lineHeight: 1.5 },
              }
            },
            black: '#565656',
            defaultRadius: 12,
            colorScheme,
            primaryColor: "green"
          }}
        >
          <ModalsProvider>
            <NotificationsProvider position="top-right">
              {children}
            </NotificationsProvider>
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  );
};

export default AppProviders;
