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
      shadow="xl"
      mb="xl"
      sx={(theme) => ({
        backgroundColor: "#E6F3EF"
      })}
    >
      <Stack>
        <Group className="justify-between">
          <div>
            <Text
            color="#009664"
            weight={700}
            sx={(_theme) => ({
              fontSize: 40,
            })}
            >
              {balance.split(".")[0]}
              <sub className="bottom-0 text-base">.{balance.split(".")[1]}</sub>
            </Text>
              <Text size="sm">Total Balance</Text>
          </div>
          {/* <SegmentedControl
            value={currency}
            onChange={setCurrency}
            data={[
              { label: "USD", value: "USD" },
              { label: "COP", value: "COP" },
            ]}
          /> */}
        </Group>
        <Group position="right">
          <Button
             sx={{
              padding: "10px 40px",
              heigth: 30,
              backgroundColor: "#008A5C",
              '&:hover': {
                backgroundColor: "#008A5C"
              }
            }}
            onClick={() => openContentModal("Deposit")}
            variant={`${theme.colorScheme === "light" ? "filled" : "outline"}`}
          >
            Income
          </Button>
          <Button
            sx={{
              padding: "10px 40px",
              heigth: 30,
              backgroundColor: "#008A5C",
              '&:hover': {
                backgroundColor: "#008A5C"
              }
            }}
            onClick={() => openContentModal("Withdraw")}
            variant={`${theme.colorScheme === "light" ? "filled" : "outline"}`}
          >
            Expense
          </Button>
        </Group>
      </Stack>
    </Card>
  );
};

export default GlobalBalance;
