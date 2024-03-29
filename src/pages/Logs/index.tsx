import React, { useState } from 'react';
import { Box, Grid, Input, Pagination, ScrollArea, Text } from "@mantine/core";
import { Search } from "tabler-icons-react";
import { useLogs } from "../../hooks/useLogs";

const applyPagination = (items: any, page: number, rowsPerPage: number) => items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

const applySearch = (items: any, search: string) => items.filter((item: any) => {
  if (search) {
    let queryMatched = false
    const properties = ['user', 'action', 'date']
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

const ROWS_PER_PAGE = 10

const Logs = () => {
  const { data, isSuccess } = useLogs()

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const handlePageChange = (newPage: number) => setPage(newPage - 1)

  const logsFiltered = isSuccess ? applySearch(data?.logs, search) : []
  const logListPaginated = applyPagination(logsFiltered, page, ROWS_PER_PAGE)

  return (
    <Box
      sx={(theme) => ({
        margin: '3% 9%',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          margin: '20px 14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      })}
    >
      <Input
        icon={<Search/>}
        variant="filled"
        onChange={(event: any) => {
          setPage(0)
          setSearch(event.target.value)
        }}
        placeholder="Search by User, Action or Date"
        sx={{ marginBottom: 20 }}
      />
      <Grid
        gutter="xl"
        sx={(theme) => ({
          backgroundColor: '#F2F2F2',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 40,
          marginBottom: 2,
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: '100vw',
          }
        })}
      >
        <Grid.Col sm={3} span={4}>
          <Text
            size={'sm'}
            sx={{ color: '#727273', marginLeft: 15 }}
          >
            Date
          </Text>
        </Grid.Col>
        <Grid.Col sm={5} span={4}>
          <Text
            size={'sm'}
            sx={{ color: '#727273' }}
          >
            Action
          </Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text
            size={'sm'}
            sx={{ color: '#727273' }}
          >
            User
          </Text>
        </Grid.Col>

      </Grid>
      <ScrollArea style={{ height: 250 }}>
        <Box p="sm">
          {
            logListPaginated.map((log: { date: string, action: string, user: string }, idx: any) => (
              <Grid gutter="xl" key={idx}>
                <Grid.Col sm={3} span={4}>
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
                    {log?.date}
                  </Text>
                </Grid.Col>

                <Grid.Col sm={5} span={4}>
                  <Text
                    size={'sm'}
                    sx={(theme) => ({
                      color: '#727273',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                        maxWidth: '20ch',
                      }
                    })}
                    title={log?.action}
                  >
                    {log?.action}
                  </Text>
                </Grid.Col>

                <Grid.Col span={4}>
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
                    {log?.user}
                  </Text>
                </Grid.Col>
              </Grid>
            ))
          }
        </Box>
      </ScrollArea>
      {
        isSuccess &&
        (data?.logs.length !== 0) &&
        <Pagination
          page={page + 1}
          onChange={handlePageChange}
          total={Math.ceil(logsFiltered.length / ROWS_PER_PAGE)}
          size="xs"
          withEdges
        />
      }
    </Box>
  );
};

export default Logs;
