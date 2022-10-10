import React, { useState } from "react";
import TableRow from "../components/TableRow";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import storageAPI from "../services/storageAPI";

export default function BasicInfo({
    days,
    setFormPage,
    basicInfoData,
    setBasicInfoData,
    file,
    setFile,
}) {
    const [infoSubmit, setInfoSubmit] = useState("false");
    const handleBasicInfoFormSubmit = (event) => {
        // validate that everything is correct inside the form. Every day needs an opening and closing time, OR else it isClosed is true
        // once that is true, then
        setInfoSubmit("true");
        // now all hour -> hours
        // validate hours

        console.log("full hours", hours);
        // state here indicating infoSubmitted=true, pass as a prop into TableRow,
        // TableRow then has an if statement (if infoSubmitted) => sends all values hour, into hours
        // then here, we can do validation for those hours - that they all exist
        // and if that's all true, we can set the menu page.
        // ELSE if, we will have to display errors on the page indicating they forgot to submit certain hours.

        setFormPage("menu");
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBasicInfoData({ ...basicInfoData, [name]: value });
        console.log(basicInfoData);
    };

    const handleUploadImage = (event) => {
        console.log(event.target);
        setFile(event.target.files[0]);
        storageAPI.upload(event.target.files[0]);
    };

    const [openTime, setOpenTime] = useState("");
    const [closeTime, setCloseTime] = useState("");
    // const [isClosed, setIsClosed] = useState(false);
    const [hours, setHours] = useState([]);
    const arrayHours = [{}, {}, {}, {}, {}, {}, {}];

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
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        name="phoneNumber"
                        onChange={handleInputChange}
                        type="phone"
                        placeholder="Enter phone number"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        name="address"
                        type="address"
                        placeholder="Enter address"
                        onChange={handleInputChange}
                    />
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
                        {days.map((day, i) => (
                            <TableRow
                                day={day}
                                i={i}
                                setOpenTime={setOpenTime}
                                setCloseTime={setCloseTime}
                                // isClosed={isClosed}
                                // setIsClosed={setIsClosed}
                                hours={hours}
                                setHours={setHours}
                                openTime={openTime}
                                closeTime={closeTime}
                                infoSubmit={infoSubmit}
                                arrayHours={arrayHours}
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
                        onClick={handleBasicInfoFormSubmit}
                    >
                        Next
                    </Button>
                </div>
            </Form>
            <br></br>
        </div>
    );
}
