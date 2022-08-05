import React, { useState } from "react";
import { NumberInput, TextInput, Button, Stack, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

const GoalForm: React.FC<{
  closeModal: () => void;
}> = ({ closeModal }) => {
  const form = useForm({
    initialValues: { amount: 0, name: "", description: "" },

    validate: {
      name: (value) => (value === "" ? "Goal name is required" : null),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.log(values);
        closeModal();
      })}
    >
      <Stack
        spacing="xl"
        sx={(theme) => ({ paddingBlock: 20, paddingInline: 15 })}
      >
        <NumberInput
          size="md"
          placeholder="Amount"
          min={0}
          {...form.getInputProps("amount")}
        />
        <TextInput
          size="md"
          placeholder="Goal Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          size="md"
          placeholder="Description"
          {...form.getInputProps("description")}
        />
        <Button
          type="submit"
          styles={(theme) => ({
            root: {
              backgroundColor: "#008A5C",
              border: 0,
              borderRadius: 11.6,
              height: 48,
              padding: "10px, 20px, 10px, 20px",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: 600,

              "&:hover": {
                backgroundColor: theme.fn.darken("#00D68F", 0.05),
              },
            },
          })}
        >
          Save
        </Button>
      </Stack>
    </form>
  );
};

export default GoalForm;
