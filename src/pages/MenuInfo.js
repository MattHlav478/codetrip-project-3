import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import Table from "react-bootstrap/Table";

export default function MenuInfo({
    categories,
    menuItem,
    setMenuItem,
    allMenuItems,
    setAllMenuItems,
}) {
    // WE ARE CREATING A NEW MENU ITEM
    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setMenuItem({ ...menuItem, [key]: value });
        console.log(menuItem);
    }

    // WE ARE ADDING THAT NEW MENU ITEM TO THE FULL MENU
    const handleNewMenuItem = (event) => {
        event.preventDefault();
        // create an object with name, price, description (optional), image (optional), and category
        // validation happens here?
        setAllMenuItems([...allMenuItems, menuItem]);
        console.log(allMenuItems);
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
                                options={categories}
                                // (choice) => setUserChoice(choice)
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>

                {/* optional image uploading, waiting for firebase to happen before any coding */}
                <Button variant="dark">Upload image</Button>

                <br></br>
                <br></br>
                <div className="d-grid gap-2">
                    {" "}
                    <Button variant="dark" type="submit" size="lg">
                        Add Next Item
                    </Button>
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
                    {allMenuItems.map((el) => (
                        <tr>
                            <td>{el.name}</td>
                            <td>{el.price}</td>
                            <td>{el.description}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <br></br>
            <br></br>
        </div>
    );
}
