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
import { Navigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useSnapshot } from "valtio";
import { showNotification } from '@mantine/notifications';
import { auth as fireAuth } from "../../firebase.config";

import auth from "../../states/auth";
import useFrom from "./useFrom";
import Title from "../../components/Title";
import { useState } from "react";
import useAuthLocalStorage from "../../hooks/useAuthLocalStorage";

const Login = () => {
  const [loginOrRegister, setLoginOrRegister] = useState("Login");

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      confirmPassword: (value, values) => {
        if (loginOrRegister === "Login") return null;

        return value !== values.password ? "Passwords did not match" : null;
      },
    },
  });
  const from = useFrom();
  const snap = useSnapshot(auth);
  const isAuth = snap.user;

  return isAuth ? (
    <Navigate to={from === "/login" ? "/" : from} replace />
  ) : (
    <>
      <Center
        style={{ height: "100vh" }}
        sx={(theme) => ({
          backgroundColor: theme.colorScheme == "dark" ? theme.colors.gray[9] : theme.colors.gray[2] ,
        })}
      >
        <Paper p="xl" style={{width: '350px'}}>
          <Title align="center" pb="lg">
            {loginOrRegister}
          </Title>
          <form onSubmit={form.onSubmit((values) =>  {

              console.log(values)
              

                if(loginOrRegister === "Login") {

                  signInWithEmailAndPassword(fireAuth, values.email, values.password)
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    localStorage.setItem('auth', JSON.stringify(user)  )
                    
                    
                  })
                  .catch((error) => {
                   
                    const errorMessage = error.message;
                   
                    showNotification({
                     
                      title: "Error",
                      message: errorMessage,
                      styles: (theme) => ({
                        root: {
                          backgroundColor: theme.colors.red[6],
                          borderColor: theme.colors.red[6],
          
                          '&::before': { backgroundColor: theme.white },
                        },
          
                        title: { color: theme.white },
                        description: { color: theme.white },
                        closeButton: {
                          color: theme.white,
                          '&:hover': { backgroundColor: theme.colors.red[7] },
                        },
                      }),
                    })
                  });

                } else {
                  
                  createUserWithEmailAndPassword(fireAuth, values.email, values.password)
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;

                    localStorage.setItem('auth', JSON.stringify(user)    )                
                    // ...
                  })  
                  .catch((error) => {
                    
                      const errorMessage = error.message;
                      showNotification({
                        color: 'red',
                        title: "Error",
                        message: errorMessage
                      })
                    });

                }
             }
            
            )}>
            <Stack>
              <TextInput
                required
                label="Email"
                type="email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />
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
                <Button type="submit" variant="outline" color="green">
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
