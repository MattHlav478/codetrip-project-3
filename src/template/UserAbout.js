import UserNav from "./UserNav";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { db } from "../services/firebaseConnection";
import { getDoc, doc } from "firebase/firestore";

function About() {
    const { userId, name } = useParams();
    const [about, setAbout] = useState([]);

    async function getData() {
        //     // FIRESTORE call
        const docRef = doc(db, "restaurants", userId);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        setAbout(data.about);
        // const menuData = [];
        // restData.menu.map((menuItem) => {
        //     menuData.push(menuItem);
        // });
        // setMenu(menuData);
    }

    useEffect(() => {
        getData();
    }, []);

    // remove navbar from view
    useEffect(() => {
        if (about) {
            const navbar = document.getElementById("navbar");
            navbar.remove();
        }
    }, []);

    return (
        <>
            <UserNav />
            <div className="centertext">
                <Card style={{ width: "90%" }}>
                    <Card.Body>{about}</Card.Body>
                </Card>
                <br></br>
                <div style={{ width: "90% " }}>
                    <Card.Title>Connect with us on Social Media!</Card.Title>
                    <div>
                        {" "}
                        <a href="#">Card Link</a> <br></br>
                        <a href="#">Card Link</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
