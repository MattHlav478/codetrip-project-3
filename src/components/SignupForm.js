import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { db } from "../services/firebaseConnection";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { auth } from "../services/firebaseConnection";
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const SignupForm = () => {
    //set initial form state
    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [userFormData, setUserFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
      console.log(userFormData);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log("submit clicked!");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        setShowAlert(true);
        event.preventDefault();
        event.stopPropagation();
    } else {
        window.location.assign("/dashboard");
        setValidated(true);
        setShowAlert(false);
    }

    // exclude third arg to automatically generate unique id (for add doc)
    // Add a new document with a generated id.
    // const docRef = await addDoc(collection(db, "cities"), {
    //   name: "Tokyo",
    //   country: "Japan",
    // });
    // console.log("Document written with ID: ", docRef.id);

    //STORE IN FIRESTORE
    await setDoc(doc(db, "users", userFormData.email), {
      name: userFormData.name,
      password: userFormData.password,
    });

    // AUTHENTICATE USER SIGN-UP IN FIREBASE
    try {
      const userCredential = createUserWithEmailAndPassword(
        auth,
        userFormData.email,
        userFormData.password
      );
      console.log(userCredential.user);
      // await addDoc(doc(db, "users"));
    } catch (error) {
      console.log(error);
    }
  };

  // SIGN-UP with AUTHENTICIATION

  return (
    <>
    <br></br>
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
                    Email is required
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
            </Form.Group>
            <br></br>
            <Button
                disabled={
                    !(
                        userFormData.name &&
                        userFormData.email &&
                        userFormData.password
                    )
                }
                type="submit"
                variant="dark"
            >
                Submit
            </Button>
        </Form>
    </>
);
};

export default SignupForm;