

import { Stack } from "@mantine/core";
import GlobalBalance from "../../components/GlobalBalance";
import TableAccordion from "../../components/TableAccordion";

const cols: string[] = ["Amount", "Currency", "Date", "Type"];

const rows: any[] = [
  {
    amount: "2200111",
    currency: "COP",
    date: "Aplir 16, 2022",
    type: "withdraw",
    description: "una descripcion",
    id: "12345",
  },
  {
    id: "2312421",
    amount: "120",
    currency: "USD",
    date: "Aplir 11, 2022",
    type: "deposit",
    description: "una descripcion",
  },
  {
    id: "12321421421",
    amount: "20",
    currency: "USD",
    date: "Aplir 13, 2022",
    type: "deposit",
  },
];

const Home = () => {

  return (
    <>
    <Stack>
      <GlobalBalance />
      <TableAccordion cols={cols} rows={rows} />
    </Stack>
    </>
  );
};

export default Home;
