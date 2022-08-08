import { useState } from "react";
import {
  Card,
  Group,
  Text,
  Button,
  SegmentedControl,
  Stack,
  useMantineTheme,
  NumberInput,
  InputWrapper,
  MultiSelect,
} from "@mantine/core";
import { formatter } from "../../utils/formatter";
import { useModals } from "@mantine/modals";
import ActionModal from "../ActionModal";
import Title from "../Title";
import { useQuery } from "react-query";
import { useTransactions } from "../../hooks/useTransactions";
import { formatCurrency } from "../../utils/formatCurrency";

const GlobalBalance = () => {
  const [currency, setCurrency] = useState("USD")
  const { isSuccess: isTransactionSuccess, data: transactions } = useTransactions()

  const balance = formatCurrency(
    isTransactionSuccess ?
      currency === 'COP' ?
        transactions?.globalCOP :
        transactions?.globalUSD :
      0,
    currency
  )

  const modals = useModals();
  const theme = useMantineTheme();

  const openContentModal = (type: "Deposit" | "Withdraw") => {
    const id = modals.openModal({
      title: <Title>{type}</Title>,
      children: (
        <ActionModal type={type} closeModal={() => modals.closeModal(id)}/>
      ),
    });
  };

  return (
    <Card
      p="xl"
      className="md:w-fit xs:w-full"
      mb="xl"
      sx={(theme) => ({
        border: `1px solid ${
          theme.colorScheme === "light"
            ? theme.colors.gray[3]
            : theme.colors.gray[8]
        }`,
        backgroundColor:
          theme.colorScheme === "light"
            ? theme.colors.gray[1]
            : theme.colors.dark[9],
      })}
    >
      <Stack>
        <Group className="justify-between">
          <div>
            <Text>Global Balance</Text>
            <Text
              weight={500}
              sx={(_theme) => ({
                fontSize: 40,
              })}
            >
              {balance.split(".")[0]}
              <sub className="bottom-0 text-base">.{balance.split(".")[1]}</sub>
            </Text>
          </div>
          <SegmentedControl
            value={currency}
            onChange={setCurrency}
            data={[
              { label: "USD", value: "USD" },
              { label: "COP", value: "COP" },
            ]}
          />
        </Group>
        <Group>
          <Button
            color="green"
            onClick={() => openContentModal("Deposit")}
            variant={`${theme.colorScheme === "light" ? "filled" : "outline"}`}
          >
            Deposit
          </Button>
          <Button
            color="red"
            onClick={() => openContentModal("Withdraw")}
            variant={`${theme.colorScheme === "light" ? "filled" : "outline"}`}
          >
            Withdraw
          </Button>
        </Group>
      </Stack>
    </Card>
  );
};

export default GlobalBalance;
