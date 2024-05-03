import React from "react";
import quora from  '../assets/Quora.jpg';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  MenuItem,
} from "@material-tailwind/react";

const Subscription = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <button onClick={handleOpen}>Try Quora+</button>
      <Dialog size="xs" open={open} handler={handleOpen}>
        <div className="bg-grey-100 w-auto h-auto">
          <div className="w-50 h-20 bg-yellow-100 flex items-center justify-center" >
          <img src={quora} className="w-15 h-10"/>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Subscription



