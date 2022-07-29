import { MantineColor } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

export const customShowNotification = (
  color: MantineColor,
  message: string
) => {
  return showNotification({
    message,
    styles: (theme) => ({
      root: {
        backgroundColor: theme.colors[color][6],
        borderColor: theme.colors[color][6],

        "&::before": { backgroundColor: `${theme.white} !important` },
      },

      title: { color: `${theme.white} !important` },
      description: { color: `${theme.white} !important` },
      closeButton: {
        color: `${theme.white} !important`,
        "&:hover": { backgroundColor: theme.colors[color][7] },
      },
    }),
  });
};
