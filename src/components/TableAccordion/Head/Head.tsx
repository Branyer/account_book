import { Box, SimpleGrid, Text } from "@mantine/core";

const Head: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[1],
        borderRadius: theme.defaultRadius,
        padding: 5,
        textAlign: "center",
      })}
    >
      <SimpleGrid
        cols={4}
        sx={{
          marginLeft: 14,
          marginRight: 48,
        }}
      >
        {data.map((item) => (
          <Text key={item} weight={600} color="gray">
            {item}
          </Text>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Head;
