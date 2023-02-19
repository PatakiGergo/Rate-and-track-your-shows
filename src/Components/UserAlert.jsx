import React from "react";
import Alert from "@mui/material/Alert";

const UserAlert = (props) => {
  return (
    <Alert
      variant="filled"
      severity={props.type}
      sx={{
        position: "fixed",
        top: "15px",
        right: "850px",

        zIndex: "9999",
        margin: "0 auto",
      }}
    >
      {props.message}
    </Alert>
  );
};

export default UserAlert;
