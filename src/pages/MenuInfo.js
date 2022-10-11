import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Select from "react-select";
import Table from "react-bootstrap/Table";
import storageAPI from "../services/storageAPI";

export default function MenuInfo({
    categories,
    menuItem,
    setMenuItem,
    allMenuItems,
    setAllMenuItems,
    setFile,
    setFormPage,
}) {
    // WE ARE CREATING A NEW MENU ITEM
    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setMenuItem({ ...menuItem, [key]: value });
    }

    // WE ARE UPLOADING AN IMAGE FOR THAT MENU ITEM
    const handleUploadImage = (event) => {
        const key = event.target.name;
        setFile(event.target.files[0]);
        storageAPI
            .upload(event.target.files[0])
            .then((imageUrl) => setMenuItem({ ...menuItem, [key]: imageUrl }));
    };

    // WE ARE ADDING THAT NEW MENU ITEM TO THE FULL MENU
    const handleNewMenuItem = (event) => {
        event.preventDefault();
        // validation happens here?
        setAllMenuItems([...allMenuItems, menuItem]);
    };

    //STATES FOR SHOWING OR HIDING ALERT. DEFAULT IS FALSE.
    const [show, setShow] = useState(false);

    const handleMenuInfoFormSubmit = (event) => {
        setFormPage("additional");
        //if there are no menu items at the time of submit, show alert
        //something like this...
    // allMenuItems.length === 0 ? setShow(true) : setShow(false)
    };

    return (
        <div>
            <h1>What's on the menu?</h1>
            <Form onSubmit={handleNewMenuItem}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Item Name*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter item name"
                        name="name"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter item price"
                        name="price"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter description (optional)"
                        name="description"
                        onChange={handleChange}
                    />
                </Form.Group>

                {/* add to a category */}
                <div className="container">
                    <br></br>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <Select
                                name="type"
                                options={categories}
                                onChange={(choice) =>
                                    setMenuItem({
                                        ...menuItem,
                                        [`type`]: choice.label,
                                    })
                                }
                            />
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <br></br>
                </div>

                {/* optional image uploading, waiting for firebase to happen before any coding */}
                <input
                    type="file"
                    accept="image/*"
                    name="imageURL"
                    onChange={handleUploadImage}
                />
                <Button variant="dark">Upload image</Button>

                <br></br>
                <br></br>
                <div className="d-grid gap-2">
                    {" "}
                    <Button variant="dark" type="submit" size="lg">
                        Confirm Item
                    </Button>
                    <br></br>
                </div>
            </Form>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {allMenuItems.map((el, i) => (
                        <tr key={i}>
                            <td>{el.name}</td>
                            <td>{el.price}</td>
                            <td>{el.description}</td>
                            <td>{el.type}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <br></br>
            <br></br>

            <div className="d-grid gap-2">
                {" "}
                <Button
                    variant="dark"
                    type="submit"
                    size="lg"
                    onClick={handleMenuInfoFormSubmit}
                >
                    Next
                </Button>
                <br></br>
                <Alert onClose={() => setShow(false)} show={show} dismissible>
                    Please make sure to fill in each field!
                </Alert>
            </div>
        </div>
    );
}
