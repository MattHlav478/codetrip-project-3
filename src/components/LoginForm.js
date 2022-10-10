import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { auth } from "../services/firebaseConnection";
import { connectAuthEmulator, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const handleSignupBtn = (event) => {
    window.location.assign("/signup");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    console.log(userFormData);
  };

  const handleFormSubmit = async (event) => {
    console.log("submit clicked");
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setShowAlert(true);
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
          // AUTHENTICATE USER SIGN-UP IN FIREBASE
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userFormData.email,
        userFormData.password
      );
      console.log(userCredential.user);
      window.location.assign("/");
    } catch (error) {
      console.log(error);
    }
      window.location.assign("/dashboard");
      setShowAlert(false);
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
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

        <Button
          // disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          variant="dark"
        >
          Submit
        </Button>
      </Form>
      <br></br>
      <h4>Not a member?</h4>
      <Button onClick={handleSignupBtn} variant="dark">
        Sign up
      </Button>
    </>
  );
};

export default LoginForm;