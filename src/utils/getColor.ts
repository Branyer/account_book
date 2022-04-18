import { MantineColor, MantineTheme } from "@mantine/core";

export const getTextColor = (theme: MantineTheme, color: MantineColor) =>
  theme.colorScheme === "light" ? theme.colors[color][8] : theme.colors[color][1];
