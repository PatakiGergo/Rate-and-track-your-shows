import React, { useState } from "react";
import Login from "@/Components/Login";
import Register from "@/Components/Register";
import ForgottenPassword from "@/Components/ForgottenPassword";

export default function Dashboard(props) {
  const [register, setRegister] = useState(false);
  const [pw, setPw] = useState(false);

  function registerHandler() {
    setRegister((prev) => !prev);
  }

  function forgottenpwHandler() {
    setRegister(false);
    setPw((prev) => !prev);
  }

  function backToLogin() {
    setPw(false);
    setRegister(false);
  }

  return (
    <div className="home">
      {pw && !register && (
        <ForgottenPassword login={backToLogin}></ForgottenPassword>
      )}
      {!register && !pw && (
        <Login register={registerHandler} forgottenPW={forgottenpwHandler} />
      )}
      {register && <Register register={registerHandler} />}
    </div>
  );
}
