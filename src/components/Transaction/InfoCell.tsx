import React from 'react';
import { Stack, Text } from "@mantine/core";

interface DetailCellProps {
  title: string;
  children: React.ReactNode;
  css?: any
}

const InfoCell: React.FC<DetailCellProps> = (
  {
    title,
    children,
    css,
  }
) => {
  return (
    <Stack sx={css}>
      <Text
        size={'sm'}
        weight={500}
        sx={{ color: '#545759' }}
      >
        {title}
      </Text>
      <Text
        size={'sm'}
        sx={{
          color: '#727273',
          maxWidth: '20ch',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </Text>
    </Stack>
  );
};

export default InfoCell;