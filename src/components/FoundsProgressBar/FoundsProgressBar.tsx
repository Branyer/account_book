import {
  Box,
  Grid,
  Badge,
  Text,
  Progress,
  MantineColor,
  Tooltip,
} from "@mantine/core";
import { formatter } from "../../utils/formatter";

import useCalculateIntervals from "./useCalculateIntervals";

interface FoundsProgressBarProps {
  color: MantineColor;
  currency: string;
  founds: number;
}

const FoundsProgressBar: React.FC<FoundsProgressBarProps> = ({
  color,
  currency,
  founds,
}) => {
  const { start, end, percentage } = useCalculateIntervals(founds);

  return (
    <Box
      p="lg"
      pt="xl"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "light"
            ? theme.colors[color][3]
            : theme.colors[color][9],
        borderRadius: theme.defaultRadius,
      })}
    >
      <Grid align="center" className="relative">
        <Badge
          size="xs"
          className="absolute"
          color={color}
          sx={(theme) => ({
            left: "calc(50% - 16px)",
            top: "-8px",
            color:
              theme.colorScheme === "light"
                ? theme.colors[color][9]
                : theme.colors[color][1],
          })}
        >
          {currency}
        </Badge>

        {founds >= 1 ? (
          <>
            <Grid.Col span={2}>
              <Text
                align="center"
                weight={600}
                sx={(theme) => ({
                  color:
                    theme.colorScheme === "light"
                      ? theme.colors[color][9]
                      : theme.colors[color][1],
                })}
              >
                {start}
              </Text>
            </Grid.Col>

            <Grid.Col span={8}>
              <Tooltip
                label={formatter(founds, {
                  currency,
                  style: "currency",
                  maximumSignificantDigits: 3,
                })}
                className="w-full"
                color={color}
                
                placement="start"
                withArrow
                transition="slide-left"
                transitionDuration={350}
                transitionTimingFunction="ease-in-out"
              >
                <Progress size="lg" color={color} value={percentage} animate />
              </Tooltip>
            </Grid.Col>

            <Grid.Col span={2}>
              <Text
                align="center"
                weight={600}
                sx={(theme) => ({
                  color:
                    theme.colorScheme === "light"
                      ? theme.colors[color][9]
                      : theme.colors[color][1],
                })}
              >
                {end}
              </Text>
            </Grid.Col>
          </>
        ) : (
          <Grid.Col>
            <Text
              align="center"
              weight={600}
              mt="2px"
              sx={(theme) => ({
                color: theme.white
              })}
            >
              No founds
            </Text>
          </Grid.Col>
        )}
      </Grid>
    </Box>
  );
};

export default FoundsProgressBar;
