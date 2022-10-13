import UserNav from "./UserNav";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { db } from "../services/firebaseConnection";
import { getDoc, doc } from "firebase/firestore";

function About() {
    const { userId, name } = useParams();
    const [about, setAbout] = useState();
    // const [data, setData] = useState();

    async function getData() {
        //     // FIRESTORE call
        const docRef = doc(db, "restaurants", userId);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        // setData(data);
        setAbout(data.about);
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
            </div>
        </>
    );
}

export default About;
