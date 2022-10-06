import React, { useState } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

export default function Create() {
    // implement onBlur functionality here, so if someone skips the * required bits, we let them know it's BAD
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const [formPage, setFormPage] = useState("basic");
    const [time, setTime] = useState("");

    const nextPage = (nextFormPage) => {
        // check to see if there are any errors--if not, then go to the next page: basic, menu, additional
    };

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

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Opening</th>
                            <th>Closing</th>
                            <th>what to say here</th>
                        </tr>
                    </thead>
                    <tbody>
                        {days.map((day) => (
                            <tr>
                                <td>{day}</td>
                                <td>
                                    <TimePicker
                                        placeholder="Select Time"
                                        use12Hours
                                        minuteStep={15}
                                        showSecond={false}
                                        focusOnOpen={true}
                                        format="hh:mm A"
                                        onChange={(e) =>
                                            setTime(e.format("LT"))
                                        }
                                    />
                                </td>
                                <td>
                                    <TimePicker
                                        placeholder="Select Time"
                                        use12Hours
                                        minuteStep={15}
                                        showSecond={false}
                                        focusOnOpen={true}
                                        format="hh:mm A"
                                        onChange={(e) =>
                                            setTime(e.format("LT"))
                                        }
                                    />
                                </td>
                                <td>
                                    <Form>
                                        <div
                                            key={`default-checkbox`}
                                            className="mb-3"
                                        >
                                            <Form.Check
                                                type="checkbox"
                                                id={`default-checkbox`}
                                                label={"Closed all day"}
                                            />
                                        </div>
                                    </Form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Button
                    variant="primary"
                    type="submit"
                    // onClick={nextPage("menu") see if there are any errors, if not, then continue on to "menu" page}
                >
                    Next
                </Button>
            </Form>

                        <h1>What's on the menu?</h1>
            <Form>
                {/* plus button adds another form. */}
            </Form>
        </div>
    );
}
