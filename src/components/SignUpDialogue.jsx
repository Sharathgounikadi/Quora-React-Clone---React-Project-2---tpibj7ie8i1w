import React, { useState } from "react";
import axios from "axios";
import {
    p,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";


const SignUpDialogue = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    // console.log(formData)
    const handleSubmit = async () => {
        try {
            const body = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                appType: "quora",
            };
    
            const response = await axios.post('https://academics.newtonschool.co/api/v1/user/signup', 
                JSON.stringify(body),
                {
                    headers: {
                        projectID: "tpibj7ie8i1w",
                        "Content-Type": "application/json",
                    }
                }
            );
    
            // if (response.ok) {
                const data = response.data;
                localStorage.setItem("userInfo",JSON.stringify(data));
                console.log(data);
            // }
        }
        catch (err) { 
            console.log(err);
        }
    };

return (
    <>
        <p onClick={handleOpen}>Sign Up with email</p>
        <Dialog
            size="xs"
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full max-w-[24rem]">
                <CardBody className="flex flex-col gap-4">
                    <Typography variant="h5" color="black">
                        Sign Up
                    </Typography>

                    <Typography className="-mb-2" variant="h6">
                        Name
                    </Typography >
                    <Input label="Name" name="name" value={formData.name} onChange={handleChange} size="lg" />
                    <Typography className="-mb-2" variant="h6">
                        Email
                    </Typography>
                    <Input label="Email" name="email" value={formData.email} onChange={handleChange} size="lg" />
                    <Typography className="-mb-2" variant="h6">
                        Password
                    </Typography>
                    <Input label="Password" name="password" value={formData.password} onChange={handleChange} size="lg" />
                </CardBody>
                <CardFooter className="pt-0 flex justify-end ">
                    <p className="bg-[#2e69ff] p-2 rounded-3xl text-white cursor-pointer" variant="gradient" onClick={handleSubmit} fullWidth>
                        Sign Up
                    </p>
                </CardFooter>
            </Card>
        </Dialog>
    </>
);
}

export default SignUpDialogue;
