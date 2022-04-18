import { Box, SimpleGrid, Text } from "@mantine/core";
import { getTextColor } from "../../../utils/getColor";

const Head: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === "light" ? theme.colors.gray[3] : theme.colors.dark[9],
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
          <Text key={item} weight={600} sx={ theme => ({
            color: getTextColor(theme, 'gray')
          }) }>
            {item}
          </Text>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Head;
