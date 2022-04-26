import { Stack } from "@mantine/core";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSnapshot } from "valtio";
import GlobalBalance from "../../components/GlobalBalance";
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
  const query = useTransactions()

  return (
    <>
      <Stack>
        <GlobalBalance />
        {query.data ? (
          <TableAccordion cols={cols} rows={query.data.transactions} />
        ) : null}
      </Stack>
    </>
  );
};

export default Home;
