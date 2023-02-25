import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

const Account = () => {
  return (
    <div className="account" title="Currently unavailable">
      <AccountCircleIcon></AccountCircleIcon>
      <Link href="./">
        <p>Login</p>
      </Link>
    </div>
  );
};

export default Account;
