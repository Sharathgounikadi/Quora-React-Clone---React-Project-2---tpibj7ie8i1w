import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const AskDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen} variant="gradient">
        Ask Question
      </button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>x</DialogHeader>
        <p>
          Tips on getting good answers quickly
          <li>Make sure your question has not been asked already</li>
          <li>Keep your question short and to the point</li>
          <li>Double-check grammar and spelling</li>
        </p>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
export default AskDialog;


