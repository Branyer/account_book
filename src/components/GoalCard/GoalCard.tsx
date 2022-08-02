import {
  Box,
  Grid,
  Text,
  Slider,
  Stack,
  ActionIcon,
  Group,
} from "@mantine/core";
import { Pencil, Trash } from "tabler-icons-react";
import Title from "../Title";

interface GoalCardProps {
  color: any;
  title: string;
  description: string;
  currency: string;
  founds: number;
}

const GoalCard : React.FC<GoalCardProps> = ({
  color,
  title,
  description,
  currency,
  founds,
}) => {
  return (
    <>
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : "white",
          padding: "30px 80px 30px 80px",
          borderRadius: theme.radius.lg,
          cursor: "pointer",
          boxShadow: "4px 4px 4px 0px #00000017",
        })}
      >
        <Stack>
          <Grid grow justify="space-between">
            <Grid.Col span={8}>
              <Group spacing="xl">
                <Stack align="flex-start" spacing={0}>
                  <Title color="#545759" weight={700} order={3}>
                    {title}
                  </Title>
                  <Text
                    size="sm"
                    sx={{
                      color: "#545759",
                      m: 0,
                    }}
                  >
                    {description}
                  </Text>
                </Stack>
                <Group spacing="xs">
                  <ActionIcon variant="transparent">
                    <Pencil size={22} color="#727273" />
                  </ActionIcon>
                  <ActionIcon variant="transparent">
                    <Trash size={22} color="#F03E3E" />
                  </ActionIcon>
                </Group>
              </Group>
            </Grid.Col>
            <Grid.Col span={4}>
              <Stack align="flex-end">
                <Title color="#545759" weight={700} order={4}>
                  {`${currency}${founds}`}
                </Title>
              </Stack>
            </Grid.Col>
          </Grid>

          <Slider
            disabled
            defaultValue={40}
            size={14}
            styles={(theme) => ({
              bar: {
                backgroundColor: color,
              },
            })}
          ></Slider>
        </Stack>
      </Box>
    </>
  );
};

export default GoalCard;
