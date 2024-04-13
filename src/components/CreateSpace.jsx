import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

const CreateSpace = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
   
    return (
      <>
        <button onClick={handleOpen}>Create Space</button>
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Create a Space
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Share your interests, curate content, host discussions, and more.
              </Typography>
              <div className="-mb-2" variant="h6">
                Name*
                <div className="text-5">This can be changed in Space settings.</div>
              </div>
              <Input label="name" placeholder="Sharath Space 3" size="lg" />
              <div className="-mb-2" variant="h6">
              Brief description
              <div className="text-10">Include a few keywords to show people what to expect if they join.</div>
              </div>
              <Input label="description" size="xl" />
              <div className="-ml-2.5 -mt-3">
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <button className="bg-blue-500 p-2 rounded-2xl ml-40" onClick={handleOpen} >
                Create
              </button>    
            </CardFooter>
          </Card>
        </Dialog>
      </>
    );
}

export default CreateSpace