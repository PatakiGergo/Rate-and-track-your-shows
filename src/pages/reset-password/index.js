import React from "react";
import Head from "next/head";
import ForgottenPassword from "@/Components/User/ForgottenPassword";

export default function PasswordReset() {
  return (
    <html lang="en">
      <Head>
        <title>Reset password</title>
      </Head>
      <body>
        <ForgottenPassword></ForgottenPassword>
      </body>
    </html>
  );
}
