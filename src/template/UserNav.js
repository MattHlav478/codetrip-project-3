import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { db } from "../services/firebaseConnection";
import { getDoc, doc } from "firebase/firestore";

export default function Home() {
    const { userId, name } = useParams();
    // userParam is restaurant ID in DB, and name is the restaurant's name
    const [restaurant, setRestaurant] = useState({});

    async function getData() {
        //     // FIRESTORE call
        const docRef = doc(db, "restaurants", userId);
        const docSnap = await getDoc(docRef);
        setRestaurant(docSnap.data());
    }

    // getData();

    useEffect(() => {
        getData();
    }, []);

    return (
        <header>
            <img className="banner" src={restaurant.banner} />

            <div
                className="p-5 text-center bg-light"
                //bg photo for this div can be their chosen photo
            >
                <h1 className="mb-3 font-link text-background">
                    {restaurant.name}
                </h1>
                <h4 className="mb-3 font-link text-background">
                    {restaurant.phoneNumber}
                </h4>
                <Button variant="primary" tag="a" outline size="lg">
                    Our Menu
                </Button>
            </div>

            <Nav
                className="font-link nav-text"
                variant="tabs"
                defaultActiveKey="/home"
            >
                <Nav.Item>
                    <Nav.Link
                        className="no-decor"
                        style={{ color: "black" }}
                        href={`/restaurant/${userId}/${name}`}
                    >
                        About Us
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        className="no-decor"
                        style={{ color: "black" }}
                        href={`/restaurant/${userId}/${name}/menu`}
                        eventKey="link-1"
                    >
                        Menu
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        className="no-decor"
                        style={{ color: "black" }}
                        href={`/restaurant/${userId}/${name}/visit`}
                    >
                        Visit Us
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <br></br>
        </header>
    );
}
