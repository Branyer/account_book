import React from 'react';
import { ActionIcon, Box, MediaQuery, Stack, Text } from "@mantine/core";
import Calendar from "../../icons/Calendar";
import { useTransactions } from "../../hooks/useTransactions";
import { formatCurrency } from "../../utils/formatCurrency";
import BalanceHeader from "../../components/Transaction/BalanceHeader";
import _ from "lodash";
import StyledRow from "../../components/Transaction/StyledRow";

const Transactions = () => {
  const { isSuccess: isTransactionSuccess, data: financialState } = useTransactions()

  const transactionsByDate = _.groupBy(financialState?.transactions, 'date')
  const transactionDays = _.keys(transactionsByDate)

  const totalByDay = (items: any) => _.reduce(items, function (sum, n) {
    return sum + (n?.type === 'Deposit' ? n.amount : -n.amount);
  }, 0);

  const balance = formatCurrency(
    isTransactionSuccess ?
      financialState?.globalUSD :
      0,
    'USD'
  )

  return (
    <Box
      sx={(theme) => ({
        margin: '0% 9%',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          margin: '0px 14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      })}
    >
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <ActionIcon sx={{ alignSelf: 'flex-end' }}>
          <Calendar/>
        </ActionIcon>
      </MediaQuery>

      <BalanceHeader
        title={'Balance'}
        balance={balance}
      />

      {
        transactionDays.map((day: string) => (
          <Stack spacing={'xs'}>
            <Box
              sx={(theme) => ({
                backgroundColor: '#F2F2F2',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 40,
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  width: '100vw',
                }
              })}
            >
              <Text
                size={'sm'}
                sx={(theme) => ({
                  color: '#727273',
                  marginLeft: 20,
                  [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                    marginLeft: 30,
                  }
                })}
              >
                {day}
              </Text>

              <Text
                size={'sm'}
                sx={{ color: '#727273', marginRight: 70 }}
                weight={500}
              >
                {formatCurrency(totalByDay(transactionsByDate[day]), 'USD')}
              </Text>
            </Box>

            <StyledRow data={transactionsByDate[day]}/>

          </Stack>
        ))
      }
    </Box>
  );
};

export default Transactions;