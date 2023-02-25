import React from "react";
import Head from "next/head";
import ForgottenPassword from "@/Components/User/ForgottenPassword";

export default function PasswordReset() {
  return (
    <>
      <Head>
        <title>Reset password</title>
      </Head>
      <section>
        <ForgottenPassword />
      </section>
    </>
  );
}
