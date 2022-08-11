import {
  Center,
  Paper,
  PasswordInput,
  TextInput,
  Button,
  Group,
  Stack,
  SegmentedControl,
  useMantineTheme,
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

import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { customShowNotification } from "../../utils/showNotification";
import { useAuth } from "../../hooks/useAuth";
import { addLog } from "../../utils/addLog";

const Login = () => {
  const navigate = useNavigate();

  const snap = useAuth();
  const from = useFrom();
  const theme = useMantineTheme();

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
          backgroundColor: 'transaparent',
          // backgroundImage: "/images/backgrounds/back1.svg"
        })}
      >
        <Paper
          p="xl"
          shadow="xl"
          sx={(theme) => ({
            padding: "70px 150px !important"
          })}
          style={{ width: "700px" }}
        >
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
                  addLog("Logged In", {user: values.email})
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


                  addLog("Register", {user: values.email })

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
              <SegmentedControl
                styles={{
                  root: {
                    backgroundColor: "#D9D9D9"
                  },
                  label: {

                  },
                  labelActive: 
                  {
                    backgroundColor: theme.colors.green[9],
                    color: `${theme.white} !important`
                  }
                }}
                value={loginOrRegister}
                onChange={setLoginOrRegister}
                data={["Login", "Register"]}
              />
              <Title align="center">{loginOrRegister}</Title>
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

              <Group position="center" mt="md">
                <Button type="submit" variant="filled" sx={{backgroundColor: theme.colors.green[9]}} fullWidth>
                  {loginOrRegister}
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
