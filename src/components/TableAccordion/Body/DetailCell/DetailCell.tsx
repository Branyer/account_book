import { Stack, Title, Box, Text, TitleOrder } from "@mantine/core";

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
        sx={(theme) => ({
          color: theme.colors.indigo[3],
        })}
      >
        {title}
      </Title>
      {children}
    </Stack>
  );
};

export default DetailCell;
