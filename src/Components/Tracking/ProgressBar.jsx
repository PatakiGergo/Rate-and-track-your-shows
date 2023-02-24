import React, { useState, useContext, useEffect } from "react";
import UserAlert from "../Alerts/UserAlert";
import LinearProgress from "@mui/material/LinearProgress";

export default function ProgressBar(props) {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (props.progress === 1) {
      setFinished(true);
      setTimeout(() => {
        setFinished(false);
      }, 3000);
    }
  }, [props.progress]);
  return (
    <>
      {finished && (
        <UserAlert
          type={"success"}
          message={`You finished watching ${props.title} you may want to add it to your toplist`}
        ></UserAlert>
      )}
      <div className="bar">
        <h1>Progress: {Math.floor(props.progress * 100)} %</h1>
        <LinearProgress
          color={"secondary"}
          variant="determinate"
          value={Math.floor(props.progress * 100)}
          sx={{
            height: "10px",
            backgroundColor: "white",
            borderRadius: 5,
          }}
        />
      </div>
    </>
  );
}
