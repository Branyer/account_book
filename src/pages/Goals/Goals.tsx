import {
  Stack,
  Box,
  Button,
  Group,
  MediaQuery,
  ActionIcon,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import { Plus } from "tabler-icons-react";
import Title from "../../components/Title";
import GoalCard from "../../components/GoalCard";
import GoalForm from "./components/GoalForm";

const goals = [
  {
    id: 1,
    color: "#F8CA00",
    currency: "$",
    founds: 850,
    goal: 2500,
    title: "Goal",
    descripcion: "Description goal",
  },
  {
    id: 2,
    color: "#F8CA00",
    currency: "$",
    founds: 100,
    goal: 300,
    title: "Goal",
    descripcion: "Description goal",
  },
  {
    id: 3,
    color: "#F8CA00",
    currency: "$",
    founds: 250,
    goal: 500,
    title: "Goal",
    descripcion: "Description goal",
  },
  {
    id: 4,
    color: "#F8CA00",
    currency: "$",
    founds: 350,
    goal: 480,
    title: "Goal",
    descripcion: "Description goal",
  },
  {
    id: 5,
    color: "#F8CA00",
    currency: "$",
    founds: 400,
    goal: 480,
    title: "Goal",
    descripcion: "Description goal",
  },
  {
    id: 6,
    color: "#F8CA00",
    currency: "$",
    founds: 243,
    goal: 480,
    title: "Goal",
    descripcion: "Description goal",
  },
];

const Goals = () => {
  const modals = useModals();

  const openContentModal = () => {
    const id = modals.openModal({
      title: <Title color="#00704B" order={2}>Goal</Title>,
      children: <GoalForm closeModal={() => modals.closeModal(id)} />
    });
  };

  return (
    <Box
      sx={(theme) => ({
        padding: "30px 80px 30px 80px",
      })}
    >
      <Group position="apart" sx={{ marginBottom: 42 }}>
        <Title color="#545759" order={1}>
          Goals
        </Title>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Button
            onClick={() => openContentModal()}
            styles={(theme) => ({
              root: {
                backgroundColor: "#008A5C",
                border: 0,
                borderRadius: 11.6,
                height: 48,
                width: 185,
                padding: "10px, 20px, 10px, 20px",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,

                "&:hover": {
                  backgroundColor: theme.fn.darken("#00D68F", 0.05),
                },
              },
            })}
          >
            Add
          </Button>
        </MediaQuery>

        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <ActionIcon variant="transparent">
            <Plus size={24} color="#008A5C" />
          </ActionIcon>
        </MediaQuery>
      </Group>
      <Stack spacing="lg">
        {goals
          ? goals.map((goal) => (
              <GoalCard
                key={goal.id}
                title={goal.title}
                description={goal.descripcion}
                founds={goal.founds}
                currency={goal.currency}
                color={goal.color}
                goal={goal.goal}
              />
            ))
          : null}
      </Stack>
    </Box>
  );
};

export default Goals;
