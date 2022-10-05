import React, { useState} from "react";
import { Form, Button, Alert } from "react-bootstrap";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    console.log("submit clicked");
    event.preventDefault();
   // clear form values
   setUserFormData({
    email: '',
    password: '',
  });
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
