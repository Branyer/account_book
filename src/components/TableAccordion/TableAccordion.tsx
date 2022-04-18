import { Stack, Title } from "@mantine/core";

import Head from "./Head";
import Body from "./Body";

interface TableAccordionProps {
  rows: any[];
  cols: string[];
}

const TableAccordion: React.FC<TableAccordionProps> = ({ rows, cols }) => {
  return (
    <Stack>
      <Title
        order={3}
        pb="md"
        sx={(theme) => ({ color: theme.colors.gray[8] })}
      >
        Account History
      </Title>
      <Head data={cols} />
      <Body data={rows} />
    </Stack>
  );
};

export default TableAccordion;
