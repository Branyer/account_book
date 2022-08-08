import React from 'react';
import { Box, Button, Text, Title } from "@mantine/core";
import ActionModal from "../ActionModal";
import { useModals } from "@mantine/modals";

const BalanceHeader = (props: any) => {
  const { balance, title } = props

  const modals = useModals();

  const openContentModal = (type: "Deposit" | "Withdraw") => {
    const id = modals.openModal({
      title: <Title>{type}</Title>,
      children: (
        <ActionModal type={type} closeModal={() => modals.closeModal(id)}/>
      ),
    });
  };

  return (
    <Box
      sx={(theme) => ({
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 50,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          marginBottom: 10,
        }
      })}
    >
      <Title
        order={1}
        sx={(theme) => ({
          color: '#008A5C',
          order: 1,
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            color: '#009664',
            margin: '-15px 0px',
            order: 0,
          }
        })}
      >{balance}</Title>

      <Text
        size={'sm'}
        weight={400}
        sx={(theme) => ({
          color: '#545759',
          lineHeight: 1.5,
          textTransform: 'capitalize',
          [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            color: '#727273',
            fontSize: theme.fontSizes.xl,
            fontWeight: 700,
          }
        })}
      >{title}</Text>

      <Box
        sx={(theme) => ({
          display: 'flex',
          margin: '20px 0px',
          order: 3,
          [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            alignSelf: 'flex-start',
          }
        })}
      >
        <Button
          onClick={() => openContentModal("Deposit")}
          sx={(theme) => ({
            backgroundColor: '#008A5C',
            fontSize: theme.fontSizes.sm,
            fontWeight: 600,
            height: 51,
            marginRight: 15,
            width: 150,
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              fontSize: theme.fontSizes.xs,
              height: 42,
              marginRight: 30,
              width: 110,
            }
          })}
        >
          Income
        </Button>

        <Button
          onClick={() => openContentModal("Withdraw")}
          sx={(theme) => ({
            backgroundColor: '#008A5C',
            fontSize: theme.fontSizes.sm,
            fontWeight: 600,
            height: 51,
            marginLeft: 15,
            width: 150,
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              fontSize: theme.fontSizes.xs,
              height: 42,
              marginLeft: 30,
              width: 110,
            }
          })}
        >
          Expense
        </Button>
      </Box>
    </Box>
  );
};

export default BalanceHeader;