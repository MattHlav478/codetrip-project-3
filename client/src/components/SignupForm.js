import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const SignupForm = () => {
    //set initial form state
    const [userFormData, setUserFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("submit clicked!");

        setUserFormData({
            name: "",
            email: "",
            password: "",
        });

        window.location.assign("/dashboard");
    };

    return (
        <>
            {/* This is needed for the validation functionality above */}
            <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your name"
                        name="name"
                        onChange={handleInputChange}
                        value={userFormData.name}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Your email address"
                        name="email"
                        onChange={handleInputChange}
                        value={userFormData.email}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Your password"
                        name="password"
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                    />
                </Form.Group>
                <Button
                    disabled={
                        !(
                            userFormData.name &&
                            userFormData.email &&
                            userFormData.password
                        )
                    }
                    type="submit"
                    variant="success"
                >
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default SignupForm;
