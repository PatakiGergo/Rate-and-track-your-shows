import React, { useState, useContext, useEffect } from "react";
import UserAlert from "../Alerts/UserAlert";
import LinearProgress from "@mui/material/LinearProgress";

export default function ProgressBar({ title, progress }) {
  const [finished, setFinished] = useState(false);
  const userProgress = Math.floor(progress * 100);

  //Whenever the user finishes it sends an alert
  useEffect(() => {
    if (userProgress === 100) {
      setFinished(true);
      setTimeout(() => {
        setFinished(false);
      }, 3000);
    }
  }, [userProgress]);

  return (
    <>
      {finished && (
        <UserAlert
          type={"success"}
          message={`You finished watching ${title} you may want to add it to your toplist`}
        ></UserAlert>
      )}
      <div className="bar">
        <h1>Progress: {userProgress} %</h1>
        <LinearProgress
          color={"secondary"}
          variant="determinate"
          value={userProgress}
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
