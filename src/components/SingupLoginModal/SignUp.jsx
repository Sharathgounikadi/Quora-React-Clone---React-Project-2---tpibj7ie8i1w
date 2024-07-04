import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    IconButton,
} from "@material-tailwind/react";
import { XIcon } from "@heroicons/react/solid";

const SignUp = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false); // Add loading state
    const [errorMessage, setErrorMessage] = useState(""); // Add error message state
    const [passwordStrength, setPasswordStrength] = useState(""); // Add password strength indicator

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
            [name]: value.trim(), // Trim spaces from all inputs
        }));

        if (name === "password") {
            // Simple password strength indicator
            if (value.length < 6) {
                setPasswordStrength("Weak");
            } else if (value.length < 10) {
                setPasswordStrength("Medium");
            } else {
                setPasswordStrength("Strong");
            }
        }
    };

    const handleSubmit = async () => {
        // Check for empty fields
        if (!formData.name || !formData.email || !formData.password) {
            setErrorMessage("Please fill in all the required fields.");
            return;
        }

        try {
            setLoading(true); // Show loading spinner
            const body = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                appType: "quora",
            };
                console.log(body)
            const response = await axios.post(
                'https://academics.newtonschool.co/api/v1/user/signup',
                JSON.stringify(body),
                {
                    headers: {
                        projectID: "tpibj7ie8i1w",
                        "Content-Type": "application/json",
                    }
                }
            );

            if (response.status === 201) {
                const data = response.data;

                if (data.status === "success") {
                    localStorage.setItem("userInfo", JSON.stringify(data.data.user));
                    localStorage.setItem("token", data.token);
                    setOpen(false);
                    toast('Your account created successfully');
                    setFormData({ name: "", email: "", password: "" }); // Clear form fields                
                }
            }
        } catch (err) {
            // console.error("Error occurred during sign-up:", err);
            setErrorMessage(err.response.data.message || err.message);
        } finally {
            setLoading(false); // Hide loading spinner
        }
    };

    return (
        <>
            <p onClick={handleOpen} className="p-3 bg-gray-200 text-center rounded-xl">Sign Up with email</p>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
                dismiss={{ enabled: false }} // Prevent dialog from closing on outside click or ESC
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <div className="flex justify-end">
                            <IconButton variant="text" onClick={handleOpen}>
                                <XIcon className="h-5 w-5" />
                            </IconButton>
                        </div>
                        <Typography variant="h5" color="black">
                            Sign Up
                        </Typography>
                        <Typography className="-mb-2" variant="h6">
                            Name
                        </Typography>
                        <Input label="Name" name="name" value={formData.name} onChange={handleChange} size="lg" />
                        <Typography className="-mb-2" variant="h6">
                            Email
                        </Typography>
                        <Input label="Email" name="email" value={formData.email} onChange={handleChange} size="lg" />
                        <Typography className="-mb-2" variant="h6">
                            Password
                        </Typography>
                        <Input label="Password" name="password" type="password" value={formData.password} onChange={handleChange} size="lg" />
                        {passwordStrength && (
                            <Typography variant="caption">{`Password Strength: ${passwordStrength}`}</Typography>
                        )}
                        {errorMessage && (
                            <Typography variant="caption" color="red">{errorMessage}</Typography>
                        )}
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-end">
                        <p className={`bg-[#2e69ff] p-2 rounded-3xl text-white cursor-pointer ${loading ? 'opacity-50' : ''}`} onClick={handleSubmit} fullWidth>
                            Sign Up
                        </p>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}

export default SignUp;
