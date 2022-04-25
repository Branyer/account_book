import { Card, Group, Text, Button, SegmentedControl, Stack, useMantineTheme } from "@mantine/core";
import { formatter } from "../../utils/formatter";

const GlobalBalance = () => {
  const balance = formatter(150, { currency: "USD", style: "currency" });

  const theme = useMantineTheme()

  return (
    <Card
      p="xl"
      className="md:w-96 xs:w-full"
      mb="xl"
  
      sx={(theme) => ({
        border: `1px solid ${
          theme.colorScheme === "light"
            ? theme.colors.gray[3]
            : theme.colors.gray[8]
        }`,
        backgroundColor: theme.colorScheme === "light"
        ? theme.colors.gray[1]
        : theme.colors.dark[9]

      })}
    >
        <Stack>
            <Group className="justify-between">
                <div>
                <Text>Global Balance</Text>
                <Text
                    weight={500}
                    sx={(_theme) => ({
                    fontSize: 40,
                    })}
                >
                    {balance.split(".")[0]}
                    <sub className="bottom-0 text-base">.00</sub>
                </Text>
                </div>
                <SegmentedControl 
                    data={[
                        { label: 'USD', value: 'USD' },
                        { label: 'COP', value: 'COP' },
                    ]}
                    
                />
            </Group>
            <Group>
                <Button color="green" variant={`${theme.colorScheme === 'light' ? 'filled' : 'outline'}`}>Deposit</Button>
                <Button color="red" variant={`${theme.colorScheme === 'light' ? 'filled' : 'outline'}`}>Withdraw</Button>
            </Group>
        </Stack>
    </Card>
  );
};

export default GlobalBalance;
