import React from "react";
import TableRow from "../components/TableRow";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function BasicInfo({ days, setFormPage }) {
    const handleBasicInfoFormSubmit = (event) => {
        // validate that everything is correct inside the form. Every day needs an opening and closing time, OR else it isClosed is true
        // once that is true, then
        setFormPage("menu");
    };

    const [basicInfoData, setBasicInfoData] = useState({
        name: "",
        address: "",
        phoneNumber: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBasicInfoData({ ...basicInfoData, [name]: value });
    };

    return (
        <div>
            <h1>Let's start with some basic info.</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Restaurant Name*</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter name"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        onChange={handleInputChange}
                        type="phone"
                        placeholder="Enter phone number"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
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
                        {days.map((day) => (
                            <TableRow day={day} />
                        ))}
                    </tbody>
                </Table>

                <Button
                    variant="dark"
                    type="submit"
                    // onClick={nextPage("menu") see if there are any errors, if not, then continue on to "menu" page}
                    onClick={handleBasicInfoFormSubmit}
                >
                    Next
                </Button>
            </Form>
            <br></br>
        </div>
    );
}
