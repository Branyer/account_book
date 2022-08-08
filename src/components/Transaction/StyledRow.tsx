import React, { useCallback } from "react";
import { IconChevronDown, IconPencil, IconTrash } from "@tabler/icons";

import {
  createStyles,
  Accordion,
  Text,
  Grid,
  Box, Avatar, ActionIcon, Group, MantineTheme
} from "@mantine/core";

import { formatCurrency } from "../../utils/formatCurrency";
import InfoCell from "./InfoCell";

const useStyles = createStyles((theme, _params) => ({
  item: {
    borderBottom: 0,
    overflow: "hidden",
    transition: `box-shadow 150ms ${theme.transitionTimingFunction}`,
    paddingRight: 20
  },
}));

const StyledAccordion: React.FC<{ data: any[] }> = ({ data }) => {
  const { classes } = useStyles();

  const buildBody = useCallback(
    (data: any[] = []) =>
      data.map((item) => (
        <Accordion.Item
          key={item.id}
          icon={
            <ActionIcon sx={{ backgroundColor: 'transparent' }}>
              <IconChevronDown size={24}/>
            </ActionIcon>
          }
          label={
            <Box sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              textAlign: "center",
            }}>
              <Group>
                <Avatar src={(typeof item.tags === "string") ? `/images/icons/${item.tags}.svg` : ''} radius="xl" size="lg"/>

                <Text
                  size={'sm'}
                  weight={500}
                  sx={{ color: '#545759', textTransform: 'capitalize'}}
                >{(typeof item.tags === "string") ? item.tags : 'General Tag'}</Text>
              </Group>

              <Text
                size={'sm'}
                weight={500}
                sx={{ color: (item.type === 'Deposit') ? '#00D68F' : '#F03E3E' }}
              >{(item.type === 'Deposit') ? formatCurrency(item.amount) : `-${formatCurrency(item.amount)}`}</Text>
            </Box>
          }
        >
          <Box p="md"
          >
            <Grid gutter="xl">
              <Grid.Col md={4} span={6}>
                <InfoCell title={'Description'} css={{}}>
                  {item.description ? item.description : "No description"}
                </InfoCell>
              </Grid.Col>

              <Grid.Col
                md={3}
                span={6}
                sx={(theme) => ({
                  [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                    order: 1,
                  }
                })}
              >
                <InfoCell
                  title={'Date'}
                  css={
                    (theme: MantineTheme) => ({
                      [`@media (max-width: ${theme.breakpoints.md}px) and (min-width: 769px)`]: {
                        alignItems: 'end',
                      }
                    })}
                >
                  {item.hour}
                </InfoCell>
              </Grid.Col>

              <Grid.Col md={3} span={6}>
                <InfoCell
                  title={'Type'}
                  css={
                    (theme: MantineTheme) => ({
                      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                        alignItems: 'end',
                      }
                    })
                  }
                >
                  {item.type}
                </InfoCell>
              </Grid.Col>

              <Grid.Col
                md={2}
                span={6}
                sx={(theme) => ({
                  order: 2,
                  alignItems: 'end',
                  justifyContent: 'end',
                  display: 'flex',
                })}
              >
                <ActionIcon sx={{ marginRight: 15 }}>
                  <IconPencil size={35} style={{ color: '#727273' }}/>
                </ActionIcon>
                <ActionIcon sx={{ margin: '0px 15px' }}>
                  <IconTrash size={35} style={{ color: '#F03E3E' }}/>
                </ActionIcon>
              </Grid.Col>
            </Grid>

          </Box>
        </Accordion.Item>
      )),
    [data]
  );

  return (
    <Accordion iconPosition="right" classNames={classes}>
      {buildBody(data)}
    </Accordion>
  );
};

export default StyledAccordion;
