import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AreYouSure = (props) => {
  const [open, setOpen] = React.useState(props.open);

  function handleYes() {
    setOpen(false);
    props.yesHandler();
  }

  function handleNo() {
    setOpen(false);
    props.noHandler();
  }

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.question}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleYes}>Yes</Button>
          <Button onClick={handleNo} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AreYouSure;
