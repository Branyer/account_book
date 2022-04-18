import { Stack } from "@mantine/core";

import Head from "./Head";
import Body from "./Body";

interface TableAccordionProps {
  rows: any[];
  cols: string[];
}

const TableAccordion: React.FC<TableAccordionProps> = ({ rows, cols }) => {
  return (
    <Stack>
      <Head data={cols} />
      <Body data={rows} />
    </Stack>
  );
};

export default TableAccordion;
