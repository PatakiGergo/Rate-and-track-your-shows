import React, { useState } from "react";
import Login from "@/Components/User/Login";
import Head from "next/head";

export default function Dashboard(props) {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <section className="home">
        <Login />
      </section>
    </>
  );
}
