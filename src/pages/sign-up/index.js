import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import Register from "@/Components/User/Register";

export default function SignUp(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <section>
        <Register />
      </section>
    </>
  );
}
