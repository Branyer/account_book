import {
  Group,
  Stack,
  Grid,
  Image,
  Box,
  Button,
  MediaQuery,
  AspectRatio,
  Anchor,
} from "@mantine/core";
import { useNavigate, Navigate } from "react-router-dom";
import Title from "../../components/Title";
import useFrom from "../Login/useFrom";
import { useAuth } from "../../hooks/useAuth";

const Welcome = () => {
  const navigate = useNavigate();
  const from = useFrom();
  const snap = useAuth();

  if (snap.user) {
    return <Navigate to={from === "/welcome" ? "/" : from} replace />;
  }
  return (
    <>
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Grid justify="space-between">
          <Grid.Col
            md={12}
            lg={7}
            sx={{
              backgroundImage: "url(/images/backgrounds/back2.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              backgroundSize: "100vh",
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              padding: 0,
              margin: 0,
              justifyContent: "space-between",
            }}
          >
            <Group align="flex-end" p="15px 30px">
              <Title order={2} weight={500} color="#FFF">
                Account Book
              </Title>
              <Image src="/images/icons/white-logo.svg" alt="logo" />
            </Group>
            <Box sx={{ width: 700 }}>
              <Image src="/images/icons/welcome.png" alt="laptop" />
            </Box>
          </Grid.Col>
          <Grid.Col
            md={12}
            lg={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
            py={100}
          >
            <Title
              order={1}
              color="#008A5C"
              sx={{
                color: "#008A5C",
                fontWeight: 700,
                fontFamily: "Poppins",
                maxWidth: 450,
              }}
              m={40}
              align="right"
            >
              Take your finances to the next levels!
            </Title>
            <Stack align="center" spacing="xl" sx={{}}>
              <Button
                onClick={() => navigate("/login")}
                type="submit"
                styles={(theme) => ({
                  root: {
                    backgroundColor: "#008A5C",
                    border: 0,
                    borderRadius: 11.6,
                    height: 48,
                    width: 320,
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
                Lets get started
              </Button>
              <Button
                onClick={() => navigate("/login")}
                type="submit"
                styles={(theme) => ({
                  root: {
                    backgroundColor: "#D9D9D9",
                    border: 0,
                    borderRadius: 11.6,
                    height: 48,
                    width: 320,
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
                I have an account
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </MediaQuery>

      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Stack
          justify="space-around"
          sx={{
            backgroundImage: "url(/images/backgrounds/back3.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "100vw 60vh",
            minHeight: "100vh",
            padding: 0,
            margin: 0,
          }}
        >
          <AspectRatio ratio={1 / 1} sx={{ maxHeight: 250 }}>
            <Image src="/images/icons/logo.svg" alt="logo" />
          </AspectRatio>

          <Stack align="center" justify="space-around">
            <Title color="white" order={2} mb={70}>
              Account Book
            </Title>
            <Button
              onClick={() => navigate("/login")}
              type="submit"
              styles={(theme) => ({
                root: {
                  backgroundColor: "#00704B",
                  border: 0,
                  borderRadius: 11.6,
                  height: 48,
                  width: 320,
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
              Get Started
            </Button>
            <Button
              onClick={() => navigate("/login")}
              type="submit"
              variant="subtle"
              styles={(theme) => ({
                root: {
                  color: "white",
                  height: 48,
                  width: 320,
                  fontSize: 18,
                  fontFamily: "Poppins",
                  fontWeight: 600,


                  "&:hover": {
                    backgroundColor: theme.fn.darken("#00D68F", 0.05),
                  },
                },
              })}
            >
              Sign In
            </Button>
          </Stack>
        </Stack>
      </MediaQuery>
    </>
  );
};

export default Welcome;
