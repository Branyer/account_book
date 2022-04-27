import {
  Center,
  Paper,
  PasswordInput,
  TextInput,
  Button,
  Group,
  Stack,
  SegmentedControl,
} from "@mantine/core";
import { useNavigate, Navigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  User,
} from "firebase/auth";

import { auth as fireAuth, db } from "../../firebase.config";

import useFrom from "./useFrom";
import Title from "../../components/Title";
import { useState } from "react";

import auth from "../../states/auth";

import { doc, setDoc } from "firebase/firestore";
import { customShowNotification } from "../../utils/showNotification";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();

  const snap = useAuth();
  const from = useFrom();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      displayName: "",
      confirmPassword: "",
    },
    validate: {
      confirmPassword: (value, values) => {
        if (loginOrRegister === "Login") return null;

        return value !== values.password ? "Passwords did not match" : null;
      },
    },
  });
  const [loginOrRegister, setLoginOrRegister] = useState("Login");

  if (snap.user) {
    return <Navigate to={from === "/login" ? "/" : from} replace />;
  }

  return (
    <>
      <Center
        style={{ height: "100%" }}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme == "dark" ? theme.colors.dark[7] : theme.white,
        })}
      >
        <Paper
          p="xl"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme == "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[3],
          })}
          style={{ width: "350px" }}
        >
          <Title align="center" pb="lg">
            {loginOrRegister}
          </Title>
          <form
            onSubmit={form.onSubmit(async (values) => {
              if (loginOrRegister === "Login") {
                try {
                  await signInWithEmailAndPassword(
                    fireAuth,
                    values.email,
                    values.password
                  );

                  navigate(from === "/login" ? "/" : from, { replace: true });

                  customShowNotification("green", "User logged in!");
                } catch (error: any) {
                  const errorMessage = error?.message;

                  customShowNotification("red", errorMessage);
                }
              } else {
                try {
                  const userCredentials = await createUserWithEmailAndPassword(
                    fireAuth,
                    values.email,
                    values.password
                  );

                  await setDoc(doc(db, "users", userCredentials.user.uid), {});

                  await updateProfile(fireAuth.currentUser as User, {
                    displayName: values.displayName,
                  });

                  auth.user = {
                    ...auth.user,
                    displayName: values.displayName,
                  };

                  navigate(from === "/login" ? "/" : from, { replace: true });

                  customShowNotification(
                    "green",
                    "You have registered successfully!"
                  );
                } catch (error: any) {
                  const errorMessage = error?.message;

                  customShowNotification("red", errorMessage);
                }
              }
            })}
          >
            <Stack>
              <TextInput
                required
                label="Email"
                type="email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />

              {loginOrRegister === "Register" ? (
                <TextInput
                  required={loginOrRegister === "Register"}
                  label="Display Name"
                  placeholder="Your Name"
                  {...form.getInputProps("displayName")}
                />
              ) : null}

              <PasswordInput
                label="Password"
                required
                placeholder="Password"
                {...form.getInputProps("password")}
              />

              {loginOrRegister === "Register" ? (
                <PasswordInput
                  label="Confirm password"
                  placeholder="Confirm password"
                  {...form.getInputProps("confirmPassword")}
                />
              ) : null}

              <SegmentedControl
                value={loginOrRegister}
                onChange={setLoginOrRegister}
                data={["Login", "Register"]}
              />
              <Group position="center" mt="md">
                <Button type="submit" variant="outline" color="indigo">
                  Submit
                </Button>
              </Group>
            </Stack>
          </form>
        </Paper>
      </Center>
    </>
  );
};

export default Login;
