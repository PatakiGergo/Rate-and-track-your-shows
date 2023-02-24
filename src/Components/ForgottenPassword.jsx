import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"App made by "}
      <Link
        color="inherit"
        href="https://github.com/PatakiGergo"
        target={"_blank"}
      >
        Github/PatakiGergo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const ForgottenPassword = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, backgroundColor: "grey" }}>
            <LockOutlinedIcon
              sx={{
                backgroundColor: "grey",
              }}
            />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              color: "white",
            }}
          >
            Password recovery
          </Typography>
          <Typography
            sx={{
              color: "white",
              marginTop: "20",
            }}
          >
            We will e-mail you a link to recover your password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, color: "white" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              sx={{
                borderColor: "white",
              }}
              disabled
              title="Currently under development"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              title="Currently under development"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "black",
                "&:hover": {
                  backgroundColor: "grey",
                },
              }}
            >
              Send
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  sx={{
                    color: "white",
                  }}
                  onClick={props.login}
                >
                  {"Back to Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4, color: "white" }} />
      </Container>
    </ThemeProvider>
  );
};

export default ForgottenPassword;
