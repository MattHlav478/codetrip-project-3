import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { auth } from "../services/firebaseConnection";
import { connectAuthEmulator, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    console.log("submit clicked");
    event.preventDefault();
    // clear form values
    setUserFormData({
      email: "",
      password: "",
    });

    // AUTHENTICATE USER SIGN-UP IN FIREBASE
    try {
      const userCredential = await signInWithEmailAndPassword(
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

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
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
          disabled={!(userFormData.email && userFormData.Password)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
