import {
  Card,
  Divider,
  Group,
  Image,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const labels: any = {
  food: "Food and drinks",
  health: "Health",
  transport: "Transport",
  loan: "Loan",
  salary: "Salary",
};

export const RecentTransactions: React.FC<{ data: any[] }> = ({ data }) => {
  const navigation = useNavigate()

  return (
    <Card p="md" shadow="xl" sx={{ height: "100%", width: 400 }} >
        <Group position="apart" my="md">
            <Text weight={600}>Recent Transactions </Text>
            <Text weight={500} sx={{cursor: "pointer"}} onClick={() => navigation("/transactions")} color="green"> {">"} </Text>
        </Group>
      <Divider mb="lg" />
      <ScrollArea style={{height: "calc(100vh - 250px)"}}>
        <Stack spacing={40} px="lg">
          {data.map((el: any) => {
            return (
              <Group position="apart">
                <Group>
                  <Image
                    withPlaceholder
                    src={`/images/icons/${el.tags}.svg`}
                    width={47}
                    height={45}
                    fit="contain"
                  />
                  <Stack spacing={5}>
                    <Text size="sm" weight={500}>
                      {labels[el.tags]}
                    </Text>
                  
                    <Text size="xs" color="gray">
                      {el.date}
                    </Text>
                  </Stack>
                </Group>
                <Text
                  size="sm"
                  color={el.type === "Deposit" ? "#009664" : "red"}
                >
                  {el.type === "Deposit" ? "+" : "-"} {el.amount}
                  {el.currency}
                </Text>
              </Group>
            );
          })}
        </Stack>
      </ScrollArea>
    </Card>
  );
};
