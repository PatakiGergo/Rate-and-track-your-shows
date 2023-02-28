import React, { useState, useContext, useEffect } from "react";
import UserAlert from "../Alerts/UserAlert";
import LinearProgress from "@mui/material/LinearProgress";

export default function ProgressBar({ title, progress }) {
  const [finished, setFinished] = useState(false);
  const userProgress = Math.floor(progress * 100);
  const [newProgress, setNewProgress] = useState(0);

  useEffect(() => {
    // Write your client-side statements here.
    if (progress > 0) {
      window.localStorage.setItem(`${title}progress`, progress);
    }
  }, [userProgress]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newProg = window.localStorage.getItem(`${title}progress`);
      setNewProgress(newProg);
    }
  }, []);

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
        <h1>
          Progress:{" "}
          {progress ? Math.floor(progress * 100) : Math.min(newProgress * 100)}{" "}
          %
        </h1>
        <LinearProgress
          color={"secondary"}
          variant="determinate"
          value={
            progress ? Math.floor(progress * 100) : Math.min(newProgress * 100)
          }
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
