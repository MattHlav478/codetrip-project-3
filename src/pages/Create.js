import React, { useState } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Select from "react-select";
import TableRow from "../components/TableRow";
import { db } from "../services/firebaseConnection";
import { addDoc, doc, setDoc, collection, FieldValue, arrayUnion, updateDoc } from "firebase/firestore";

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

    const categories = [
        { label: "Appetizer", value: 1 },
        { label: "Main", value: 2 },
        { label: "Dessert", value: 3 },
        { label: "Salad", value: 4 },
        { label: "Drinks", value: 5 },
        { label: "A la Carte", value: 6 },
    ];

    const [formPage, setFormPage] = useState("basic");
    const [time, setTime] = useState("");

    const [menuItem, setMenuItem] = useState({});
    const [allMenuItems, setAllMenuItems] = useState([]);

    const nextPage = (nextFormPage) => {
        // check to see if there are any errors--if not, then go to the next page: basic, menu, additional
    };

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

    // // RESTAURANT DATA-STRUCTURE WITH HARDCODED DATA
    // MUST GO INSIDE AN ASYNC FUNCTION
    // // doc(firestore database, collection, document)
    // const user = doc(db, 'users', 'user@yahoo.com');
    // await updateDoc(user, {
    //   // arrayUnion updates the array value for 'restaurant'
    //   restaurant: arrayUnion({
    //     name: "Tacos4Dayz",
    //     address: "123 NW Taco Lane",
    //     phoneNumber: "132-456-5218",
    //     hours: [
    //       { day: "Monday", isOpen: true, open: "12PM", close: "9PM" },
    //       { day: "Tuesday", isOpen: true, open: "12PM", close: "9PM" },
    //       { day: "Wednesday", isOpen: true, open: "12PM", close: "9PM" },
    //       { day: "Thursday", isOpen: true, open: "12PM", close: "9PM" },
    //       { day: "Friday", isOpen: true, open: "12PM", close: "9PM" },
    //       { day: "Saturday", isOpen: false},
    //       { day: "Sunday", isOpen: false},
    //     ],
    //     menu: [
    //       {
    //         name: "tacos",
    //         price: 5,
    //         description: "about the food",
    //         type: "Main",
    //         imageURL: "storage bucket image URL reference",
    //       },
    //       {
    //         name: "nachos",
    //         price: 15,
    //         description: "about the food",
    //         type: "Main",
    //         imageURL: "",
    //       },
    //       {
    //         name: "burrito",
    //         price: 10,
    //         description: "about the food",
    //         type: "Main",
    //         imageURL: "",
    //       },
    //     ],
    //   }),
    // });

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
                            <TableRow day={day}/>
                        ))}
                    </tbody>
                </Table>

                <Button
                    variant="dark"
                    type="submit"
                    // onClick={nextPage("menu") see if there are any errors, if not, then continue on to "menu" page}
                >
                    Next
                </Button>
            </Form>
                                        <br></br>
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
                {/* optional image uploading, waiting for firebase to happen before any coding */}
                <Button
                variant="dark"
                >Upload image</Button>

                {/* add to a category */}

                <div className="container">
                    <br></br>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <Select options={categories} />
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Button 
                variant="dark"
                type="submit
                ">Add Next Item
                </Button>
            </Form>
            {allMenuItems.map((el) => (
                <p>{el.name}</p>
            ))}
        </div>
    );
}
