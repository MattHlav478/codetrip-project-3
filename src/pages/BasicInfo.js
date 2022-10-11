import React, { useState } from "react";
import TableRow from "../components/TableRow";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import storageAPI from "../services/storageAPI";
import { validatePhone } from "../utils/helpers";

export default function BasicInfo({
    days,
    setFormPage,
    basicInfoData,
    setBasicInfoData,
    setFile,
}) {
    const handleBasicInfoFormSubmit = (event) => {
        // validate that everything is correct inside the form. Every day needs an opening and closing time, OR else it isClosed is true
        // const [basicInfoData, setBasicInfoData] = useState({
        //     name: "",
        //     address: "",
        //     phoneNumber: "",
        //     imageURL: "",
        // });
        // if (
        //     basicInfoData.name &&
        //     basicInfoData.address &&
        //     basicInfoData.phoneNumber
        // ) {
        // }

        setFormPage("menu");
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "phoneNumber") {
            const isValid = validatePhone(value);
            if (!isValid) {
                setErrorMessage([
                    {
                        ...errorMessage,
                        [name]: "You need to enter a proper phone number.",
                    },
                ]);
            } else {
                setErrorMessage([{ ...errorMessage, [name]: "" }]);
                
            }
        }
        setBasicInfoData({ ...basicInfoData, [name]: value });
        console.log(basicInfoData);
    };

    const handleUploadImage = (event) => {
        console.log(event.target);
        setFile(event.target.files[0]);
        storageAPI.upload(event.target.files[0]);
    };

    const [hours, setHours] = useState({});
    const [errorMessage, setErrorMessage] = useState([
        {
            phone: "",
            address: "",
            name: "",
        },
    ]);

    const handleHours = () => {
        return Object.keys(hours).map((weekday) => {
            const { isOpen, close, open } = hours[weekday];
            return { day: weekday, isOpen, close, open };
        });

        // consider adding validation for hours here? do so by const flatHours = Object.keys..., then return flat at some point.
        // if it's NOT valid, then don't run the handleFormSubmit. But if it is, then do.
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
                    />
                </Form.Group>
                {errorMessage.name && (
                    <div>
                        <p className="error-text">{errorMessage.name}</p>
                    </div>
                )}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        name="phoneNumber"
                        onChange={handleInputChange}
                        type="phone"
                        placeholder="Enter phone number"
                    />
                </Form.Group>
                {errorMessage.phone && (
                    <div>
                        <p className="error-text">{errorMessage.phone}</p>
                    </div>
                )}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        name="address"
                        type="address"
                        placeholder="Enter address"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                {errorMessage.address && (
                    <div>
                        <p className="error-text">{errorMessage.address}</p>
                    </div>
                )}

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
                    accept="image/*"
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
                            handleBasicInfoFormSubmit();
                        }}
                    >
                        Next
                    </Button>
                </div>
            </Form>
            <br></br>
        </div>
    );
}
