import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert"
import { auth } from "../services/firebaseConnection";
import { connectAuthEmulator, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const alertDiv = document.getElementById('alert');
  
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
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
        console.log(userCredential);
        if (!userCredential) {
          window.location.assign("/");
        } else if (userCredential) {
          window.location.assign("/dashboard");
        }
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          setShow(true)
        }
          
      }
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Alert onClose={() => setShow(false)} show={show}  dismissible>
          Something went wrong with your credentials!
        </Alert>
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
      <br></br>
        <Button
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
