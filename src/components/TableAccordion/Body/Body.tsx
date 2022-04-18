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
} from "@mantine/core";

import { IconChevronDown } from "@tabler/icons";

import DetailCell from "./DetailCell";
import { formatter } from "../../../utils/formatter";

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
      backgroundColor: theme.colorScheme === "light" ? theme.colors.indigo[6] : theme.colors.dark[8],
      "& > button": {
        color: theme.colors.gray[2],
      },
      "& > button:hover": {
        backgroundColor: theme.colorScheme === "light" ? theme.colors.indigo[6] : theme.colors.dark[8],
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
                backgroundColor: theme.colorScheme === "light" ? theme.colors.gray[1] : theme.colors.dark[8],
                borderRadius: theme.defaultRadius,
                color: theme.colorScheme === "light" ? theme.colors.gray[7] : theme.colors.gray[3],
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
                    ? theme.colorScheme === "light" ? theme.colors.lime[1] : 'rgba(102, 168, 15, 0.35)'
                    : theme.colorScheme === "light" ? theme.colors.red[1] : 'rgba(224, 49, 49, 0.35)',
                color:
                  item.type === "deposit"
                    ? theme.colorScheme === "light" ? theme.colors.lime[6] : theme.colors.lime[1]
                    : theme.colorScheme === "light" ? theme.colors.red[6] : theme.colors.red[2],
                width: "fit-content",
                borderRadius: theme.defaultRadius,
              })}
            >
              {formatter(item.amount, { notation: 'compact', currency: item.currency, style: 'currency' })} 
            </Text>
          </DetailCell>
        );

        return (
          <Accordion.Item
            key={item.id}
            icon={
              <ThemeIcon sx={(theme) => ({
                color: theme.colorScheme === "light" ? theme.colors.indigo[6] : theme.colors.indigo[2]
              })} variant="light">
                <IconChevronDown size={20} />
              </ThemeIcon>
            }
            label={
              <SimpleGrid cols={4} sx={{ textAlign: "center" }}>
                <Text>{formatter(item.amount, { notation: 'compact' })}</Text>
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
                      borderLeft: `1px solid ${theme.colorScheme === "light" ? theme.colors.gray[2] : theme.colors.gray[8]}`,
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
