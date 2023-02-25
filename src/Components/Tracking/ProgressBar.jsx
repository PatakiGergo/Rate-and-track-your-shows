import React, { useState, useContext, useEffect } from "react";
import UserAlert from "../Alerts/UserAlert";
import LinearProgress from "@mui/material/LinearProgress";

export default function ProgressBar(props) {
  const [finished, setFinished] = useState(false);
  const progress = Math.floor(props.progress * 100);
  const title = props.title;

  //Whenever the user finishes it sends an alert
  useEffect(() => {
    if (progress === 100) {
      setFinished(true);
      setTimeout(() => {
        setFinished(false);
      }, 3000);
    }
  }, [progress]);

  return (
    <>
      {finished && (
        <UserAlert
          type={"success"}
          message={`You finished watching ${title} you may want to add it to your toplist`}
        ></UserAlert>
      )}
      <div className="bar">
        <h1>Progress: {progress} %</h1>
        <LinearProgress
          color={"secondary"}
          variant="determinate"
          value={progress}
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
