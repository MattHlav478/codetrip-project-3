import React, { useState } from "react";
import TableRow from "../components/TableRow";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import storageAPI from "../services/storageAPI";
import { validatePhone, validateExists } from "../utils/helpers";

export default function BasicInfo({
    days,
    setFormPage,
    basicInfoData,
    setBasicInfoData,
    setFile,
    hours,
    setHours,
}) {
    //STATES FOR SHOWING OR HIDING ALERT. DEFAULT IS FALSE.
    const [show, setShow] = useState(false);
    const [validHours, setValidHours] = useState(true);

    const handleBasicInfoFormSubmit = (event) => {
        event.preventDefault();
        setFormPage("menu");
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBasicInfoData({ ...basicInfoData, [name]: value });
        // console.log(basicInfoData);
    };

    const handleUploadImage = (event) => {
        const key = event.target.name;
        console.log(key);
        setFile(event.target.files[0]);
        storageAPI
            .upload(event.target.files[0])
            .then((imageUrl) =>
                setBasicInfoData({ ...basicInfoData, [key]: imageUrl })
            );
    };

    const handleHours = (event) => {
        // console.log(hours);
        return Object.keys(hours).map((weekday) => {
            const { isOpen, close, open } = hours[weekday];
            return { day: weekday, isOpen, close, open };
        });
    };

    return (
        <div>
            <h1>Let's start with some basic info.</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Restaurant Name*</Form.Label>
                    <Form.Control
                        name="name"
                        type="name"
                        placeholder="Enter name"
                        onChange={handleInputChange}
                        value={basicInfoData.name}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        name="phoneNumber"
                        onChange={handleInputChange}
                        type="phone"
                        placeholder="Enter phone number"
                        value={basicInfoData.phoneNumber}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        name="address"
                        type="address"
                        placeholder="Enter address"
                        onChange={handleInputChange}
                        value={basicInfoData.address}
                    />
                </Form.Group>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Opening</th>
                            <th>Closing</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {days.map((day, i) => (
                            <TableRow
                                day={day}
                                i={i}
                                key={i}
                                hours={hours}
                                setHours={setHours}
                            />
                        ))}
                    </tbody>
                </Table>
                <h3>Include a photo!</h3>
                <p>
                    Choose a photo that will appear on your homepage. If you
                    have a logo, now's the time to show it off! Consider using
                    the following dimensions:{" "}
                </p>
                <input
                    type="file"
                    id="imageUrl"
                    accept="image/*"
                    name="imageUrl"
                    onChange={handleUploadImage}
                />
                <Button variant="dark">Upload image</Button>

                <br></br>
                <br></br>
                <br></br>

                <div className="d-grid gap-2">
                    {" "}
                    <Button
                        variant="dark"
                        type="submit"
                        size="lg"
                        onClick={(e) => {
                            handleHours(e);
                            handleBasicInfoFormSubmit(e);
                        }}
                    >
                        Next
                    </Button>
                    <Alert
                        onClose={() => setShow(false)}
                        show={show}
                        dismissible
                    >
                        Please make sure to fill in each field!
                    </Alert>
                </div>
            </Form>
            <br></br>
        </div>
    );
}
