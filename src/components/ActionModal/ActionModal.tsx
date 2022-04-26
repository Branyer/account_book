import React, { useState } from "react";
import {
  Button,
  SegmentedControl,
  Stack,
  useMantineTheme,
  NumberInput,
  InputWrapper,
  MultiSelect,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import { useSnapshot } from "valtio";
import auth from "../../states/auth";
import { postTransaction } from "../../utils/firestoreUtils";
import { useMutation, useQueryClient } from "react-query";

export const ActionModal: React.FC<{ type: "Deposit" | "Withdraw", closeModal: () => void }> = ({
  type,
  closeModal
}) => {
  const theme = useMantineTheme();
  const queryClient = useQueryClient();
  const snap = useSnapshot(auth);
  const [data, setData] = useState<string[]>([]);

  const mutation = useMutation(
    (data: any) => postTransaction(data.values, data.uid),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("transactions");
        closeModal()
      },
    }
  );

  const form = useForm({
    initialValues: {
      amount: "",
      currency: "USD",
      tags: [],
      type,
      description: "",
    },
  });

  return (
    <form
      onSubmit={form.onSubmit( (values) => {
        mutation.mutate({ values, uid: snap?.user?.uid });
      })}
    >
      <Stack>
        <NumberInput
          placeholder="0"
          label="Amount"
          required
          {...form.getInputProps("amount")}
        />
        <InputWrapper
          label="Currency"
          style={{ display: "flex", flexDirection: "column" }}
          required
        >
          <SegmentedControl
            data={[
              { label: "USD", value: "USD" },
              { label: "COP", value: "COP" },
            ]}
            {...form.getInputProps("currency")}
          />
        </InputWrapper>

        <MultiSelect
          label="Tags"
          maxSelectedValues={5}
          data={data}
          placeholder="Create tags"
          searchable
          creatable
          getCreateLabel={(query) => `+ Create ${query}`}
          onCreate={(query) => setData((current) => [...current, query])}
          {...form.getInputProps("tags")}
        />

        <Textarea
          placeholder="A description..."
          label="Description"
          required
          {...form.getInputProps("description")}
        />

        <Button
          type="submit"
          mt="xl"
          color={`${type === "Deposit" ? "green" : "red"}`}
          variant={`${theme.colorScheme === "light" ? "filled" : "outline"}`}
          fullWidth
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};
