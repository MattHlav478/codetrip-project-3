import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { db } from "../services/firebaseConnection";
import { doc, setDoc } from "firebase/firestore";
import { auth } from "../services/firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupForm = () => {
    //set initial form state
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [userFormData, setUserFormData] = useState({
        name: "",
        email: "",
        password: "",
        restaurant: {
            name: "",
            address: "",
            phoneNumber: null,
            menuItems: [],
        },
    });

    // adds user input to state
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setShow(true);
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            setShow(false);
            // STORE IN FIRESTORE
            await setDoc(doc(db, "users", userFormData.email), {
                name: userFormData.name,
                password: userFormData.password,
            });

            // AUTHENTICATE USER SIGN-UP IN FIREBASE
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    userFormData.email,
                    userFormData.password
                );
                window.location.assign("/dashboard");
            } catch (error) {
                // displays alert depending on error code type (email already in DB, weak pw)
                if (error.code === "auth/email-already-in-use") {
                    setShow2(true);
                } else if (error.code === "auth/weak-password") {
                    setShow(true);
                }
            }
        }
    };

    return (
        <>
            {/* This is needed for the validation functionality above */}
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
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
                    <Form.Control.Feedback type="invalid">
                        Name is required
                    </Form.Control.Feedback>
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
                    <Form.Control.Feedback type="invalid">
                        Valid email is required
                    </Form.Control.Feedback>
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
                    <Form.Control.Feedback type="invalid">
                        Password is required!
                    </Form.Control.Feedback>
                    <br></br>
                    <Alert
                        onClose={() => setShow2(false)}
                        show={show2}
                        dismissible
                    >
                        We already have this email, would you like to sign in?
                    </Alert>

                    <Alert
                        onClose={() => setShow(false)}
                        show={show}
                        dismissible
                    >
                        Please use a password longer than 6 characters
                    </Alert>
                </Form.Group>
                <br></br>
                <Button className="" type="submit" variant="dark">
                    <div
                        id="liveAlertPlaceholder"
                        className="login-alert"
                    ></div>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default SignupForm;
