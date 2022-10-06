import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Create() {
    // implement onBlur functionality here, so if someone skips the * required bits, we let them know it's BAD
    return (
        <div>
            <h1>Let's start with some basic info.</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Restaurant Name*</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="phone"
                        placeholder="Enter phone number"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="address" placeholder="Enter address" />
                </Form.Group>

                <DropdownButton
                    id="dropdown-basic-button"
                    title="Dropdown button"
                >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                        Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                        Something else
                    </Dropdown.Item>
                </DropdownButton>

                <Button variant="primary" type="submit">
                    Next
                </Button>
            </Form>
        </div>
    );
}
