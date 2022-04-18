import { useCallback } from "react";

import {
  createStyles,
  Accordion,
  Text,
  Grid,
  ThemeIcon,
  SimpleGrid,
  Center,
  Badge,
  Box,
  Stack,
  Title,
} from "@mantine/core";

import { IconChevronDown } from "@tabler/icons";

import DetailCell from "./DetailCell";

const useStyles = createStyles((theme, _params, getRef) => ({
  item: {
    borderBottom: 0,
    overflow: "hidden",
    transition: `box-shadow 150ms ${theme.transitionTimingFunction}`,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.sm,
    marginTop: 10,
    "&:first-of-type": {
      marginTop: 0,
    },
  },

  itemOpened: {
    [`& .${getRef("itemTitle")}`]: {
      backgroundColor: theme.colors.indigo[6],
      "& > button": {
        color: theme.colors.gray[2],
      },
      "& > button:hover": {
        backgroundColor: theme.colors.indigo[6],
      },
    },
  },

  content: {
    paddingLeft: 0,
  },
}));

const StyledAccordion: React.FC<{ data: any[] }> = ({ data }) => {
  const { classes } = useStyles();

  const buildBody = useCallback(
    (data: any[] = []) =>
      data.map((item) => {
        const descriptionCell = (
          <DetailCell title="Description" order={3}>
            <Box
              p="lg"
              sx={(theme) => ({
                backgroundColor: theme.colors.gray[1],
                borderRadius: theme.defaultRadius,
                color: theme.colors.gray[7],
              })}
            >
              <Text>
                {item.description ? item.description : "No description"}
              </Text>
            </Box>
          </DetailCell>
        );

        const typeCell = (
          <DetailCell title="Type">
            <Badge
              color={item.type === "deposit" ? "lime" : "red"}
              sx={{ width: "fit-content" }}
              size="lg"
            >
              {item.type}
            </Badge>
          </DetailCell>
        );

        const dateCell = (
          <DetailCell title="Date">
            <Text weight={500}>{item.date}</Text>
          </DetailCell>
        );

        const idCell = (
          <DetailCell title="ID Number">
            <Text weight={500}>{item.id}</Text>
          </DetailCell>
        );

        const amountCell = (
          <DetailCell title="Amount" alignTitle="center">
            <Text
              p="md"
              size="xl"
              weight={700}
              sx={(theme) => ({
                backgroundColor:
                  item.type === "deposit"
                    ? theme.colors.lime[1]
                    : theme.colors.red[1],
                color:
                  item.type === "deposit"
                    ? theme.colors.lime[6]
                    : theme.colors.red[6],
                width: "fit-content",
                borderRadius: theme.defaultRadius,
              })}
            >
              {item.amount} {item.currency}
            </Text>
          </DetailCell>
        );

        return (
          <Accordion.Item
            key={item.id}
            icon={
              <ThemeIcon color="indigo" variant="light">
                <IconChevronDown size={20} />
              </ThemeIcon>
            }
            label={
              <SimpleGrid cols={4} sx={{ textAlign: "center" }}>
                <Text>${item.amount}</Text>
                <Text>{item.currency}</Text>
                <Text>{item.date}</Text>
                <Center>
                  <Badge sx={{ width: "fit-content" }}>{item.type}</Badge>
                </Center>
              </SimpleGrid>
            }
          >
            <Box p="md">
              <Grid gutter="xl">
                <Grid.Col span={4}>{descriptionCell}</Grid.Col>
                <Grid.Col span={5}>
                  <SimpleGrid cols={2} spacing="xl">
                    {typeCell}
                    {dateCell}
                    {idCell}
                  </SimpleGrid>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Box
                    sx={(theme) => ({
                      borderLeft: `1px solid ${theme.colors.gray[2]}`,
                      height: "100%",
                    })}
                  >
                    <Center>{amountCell}</Center>
                  </Box>
                </Grid.Col>
              </Grid>
            </Box>
          </Accordion.Item>
        );
      }),
    [data]
  );

  return (
    <Accordion iconPosition="right" classNames={classes} >
      {buildBody(data)}
    </Accordion>
  );
};

export default StyledAccordion;
