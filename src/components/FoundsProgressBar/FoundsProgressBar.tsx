import { Box, Grid, Badge, Text, Progress, MantineColor, Tooltip } from "@mantine/core";
import { formatMoneyNumber } from "../../utils/formatter";

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
        backgroundColor: theme.colors[color][3],
        borderRadius: theme.defaultRadius,
      })}
    >
      <Grid align="center" className="relative">
        <Badge
          size="xs"
          className="absolute"
          color={color}
          sx={{ left: "calc(50% - 16px)", top: "-8px" }}
        >
          {currency}
        </Badge>

        {founds >= 1 ? (
          <>
            <Grid.Col span={2}>
              <Text align="center" weight={600}>
                {start}
              </Text>
            </Grid.Col>

            <Grid.Col span={8}>
              <Tooltip
                label={formatMoneyNumber(founds, currency)}
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
              <Text align="center" weight={600}>
                {end}
              </Text>
            </Grid.Col>
          </>
        ) : (
          <Grid.Col>
            <Text align="center" weight={600} mt="2px" color={color}>
              No founds
            </Text>
          </Grid.Col>
        )}
      </Grid>
    </Box>
  );
};

export default FoundsProgressBar;
