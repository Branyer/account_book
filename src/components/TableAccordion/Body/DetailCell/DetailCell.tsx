import { Stack, TitleOrder } from "@mantine/core";

import Title from "../../../Title"

interface DetailCellProps {
  order?: TitleOrder;
  title: string;
  alignTitle?: string;
  children: React.ReactNode;
}

const DetailCell: React.FC<DetailCellProps> = ({
  order = 5,
  title,
  alignTitle = 'left',
  children,
}) => {
  return (
    <Stack align={alignTitle}>
      <Title
        order={order}
        color="indigo"
      >
        {title}
      </Title>
      {children}
    </Stack>
  );
};

export default DetailCell;
