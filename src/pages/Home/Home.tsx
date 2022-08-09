import { Card, Group, Progress, Stack, Text } from "@mantine/core";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import GlobalBalance from "../../components/GlobalBalance";
import RecentTransactions from "../../components/RecentTransactions";
import TableAccordion from "../../components/TableAccordion";
import { useTransactions } from "../../hooks/useTransactions";
import auth from "../../states/auth";
import { getTransactions } from "../../utils/firestoreUtils";

const cols: string[] = ["Amount", "Currency", "Date", "Type"];

const rows: any[] = [
  {
    amount: "2200111",
    currency: "COP",
    date: "April 16, 2022",
    type: "withdraw",
    description: "una descripcion",
    id: "12345",
  },
  {
    id: "2312421",
    amount: "120",
    currency: "USD",
    date: "April 11, 2022",
    type: "deposit",
    description: "una descripcion",
  },
  {
    id: "12321421421",
    amount: "20",
    currency: "USD",
    date: "April 13, 2022",
    type: "deposit",
  },
];

const Home = () => {
  const query = useTransactions();
  const navigation = useNavigate()

  return (
    <>
      <Stack>
        <Group noWrap sx={{ height: "calc(100vh - 140px)" }} align="flex-start">
          <Stack sx={{ width: "60%" }}>
            <GlobalBalance />
            <Group >
              <Stack>
                <Card p="xl" shadow="xl" sx={{width: "500px"}}>
                  <Stack>
                    <Group position="apart" mb="md">
                      <Text weight={600}>Savings </Text>
                      <Text
                        weight={500}
                        sx={{ cursor: "pointer" }}
                        onClick={() => navigation("/savings")}
                        color="green"
                      >
                        {" "}
                        {">"}{" "}
                      </Text>
                    </Group>
                    <Text weight={500}>100,00 US$</Text>
                    <Text size="xs">Total saved this month</Text>
                  </Stack>

                </Card>
                <Card p="md" shadow="xl">
                  <Stack>
                    <Group position="apart" mb="md">
                      <Text weight={600}>Goals </Text>
                      <Text
                        weight={500}
                        sx={{ cursor: "pointer" }}
                        onClick={() => navigation("/goals")}
                        color="green"
                      >
                        {">"}{" "}
                      </Text>
                    </Group>
                    <Group position="apart">
                      <Stack spacing={0}>
                        <Text weight={500}>Goal 1</Text>
                        <Text size="xs">Last goal</Text>
                      </Stack>
                      <Text weight={500}>50,00 US$ </Text>
                    </Group>
                    <Progress color="yellow" value={60} size="lg" />
                  </Stack>
                </Card>
              </Stack>
            </Group>
          </Stack>
          <Stack sx={{ width: "40%", height: "100%" }} align="center">
            <RecentTransactions data={query?.data?.transactions ?? []} />
          </Stack>
        </Group>
      </Stack>
    </>
  );
};

export default Home;
