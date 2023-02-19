import React, { useState } from "react";
import Login from "@/Components/Login";
import Register from "@/Components/Register";

export default function Dashboard(props) {
  const [register, setRegister] = useState(false);

  function registerHandler() {
    setRegister((prev) => !prev);
  }

  return (
    <div className="home">
      {!register && <Login register={registerHandler} />}
      {register && <Register register={registerHandler} />}
    </div>
  );
}
