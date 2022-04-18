import { Stack } from "@mantine/core";

import Title from "../Title";

import Head from "./Head";
import Body from "./Body";

interface TableAccordionProps {
  rows: any[];
  cols: string[];
}

const TableAccordion: React.FC<TableAccordionProps> = ({ rows, cols }) => {
  return (
    <Stack>
      <Title pb="md">
        Account History
      </Title>
      <Head data={cols} />
      <Body data={rows} />
    </Stack>
  );
};

export default TableAccordion;
