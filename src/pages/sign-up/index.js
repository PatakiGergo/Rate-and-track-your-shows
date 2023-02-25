import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Head from "next/head";
import Register from "@/Components/User/Register";

export default function SignUp(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <html>
      <Head>
        <title>Sign Up</title>
      </Head>
      <body>
        <Register></Register>
      </body>
    </html>
  );
}
