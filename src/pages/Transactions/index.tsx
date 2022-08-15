import React, { useRef, useState } from 'react';
import { ActionIcon, Box, Input, MediaQuery, Stack, Text } from "@mantine/core";
import Calendar from "../../icons/Calendar";
import { useTransactions } from "../../hooks/useTransactions";
import { formatCurrency } from "../../utils/formatCurrency";
import BalanceHeader from "../../components/Transaction/BalanceHeader";
import _ from "lodash";
import StyledRow from "../../components/Transaction/StyledRow";
import { Search } from "tabler-icons-react";

const applySearch = (items: any, search: string) => items.filter((item: any) => {
  if (search) {
    let queryMatched = false
    const properties = ['type', 'date', 'tags']
    properties.forEach((property) => {
      if ((item[property]).toLowerCase().includes(search.toLowerCase())) {
        queryMatched = true
      }
    })

    if (!queryMatched) {
      return false
    }
  }

  return true
})


const Transactions = () => {
  const [search, setSearch] = useState('')
  const { isSuccess: isTransactionSuccess, data: financialState } = useTransactions()
  const queryRef = useRef(null);
  const transactionFiltered = isTransactionSuccess ? applySearch(financialState?.transactions, search) : []

  const transactionsByDate = _.groupBy(transactionFiltered, 'date')
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

  const handleQueryChange = (event: any) => {
    event.preventDefault();
    setSearch(queryRef.current?.value);
  }

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

      <Box
        component={'form'}
        onSubmit={handleQueryChange}
      >
        <Input
          defaultValue={search}
          icon={<Search/>}
          variant="filled"
          ref={queryRef}
          placeholder="Search Date/Action"
          sx={{ marginBottom: 20 }}
        />
      </Box>

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