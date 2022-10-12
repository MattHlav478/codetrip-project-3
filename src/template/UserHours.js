import UserNav from "./UserNav";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { db } from "../services/firebaseConnection";
import { getDoc, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { isCompositeType } from "graphql";

function UserHours() {
    const { userId, name } = useParams();
    const [hours, setHours] = useState();
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    function formatTimeShow(h_24) {
        let amPm = "AM";
        if (Number(h_24.substring(0, 2)) % 12 >= 0) {
            amPm = "PM";
        }
        var h = Number(h_24.substring(0, 2)) % 12;
        if (h === 0) h = 12;
        return (h < 10 ? "0" : "") + h + ":00" + amPm;
    }

    async function getData() {
        //     // FIRESTORE call
        const docRef = doc(db, "restaurants", userId);
        const docSnap = await getDoc(docRef);
        const allHours = docSnap.data().hours;
        const correctHours = days.map((day) => {
            if (allHours[day].open || allHours[day].close) {
                allHours[day].open = formatTimeShow(allHours[day].open);
                allHours[day].close = formatTimeShow(allHours[day].close);
            }
            allHours[day].day = day; // adds the day as a property, alongside isClosed and open, close
            return allHours[day];
        });
        setHours(correctHours);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <UserNav />
            <ListGroup variant="flush">
                {hours &&
                    hours.map((everyDay) =>
                        everyDay.isClosed ? (
                            <ListGroup.Item variant="danger">
                                {everyDay.day} Closed
                            </ListGroup.Item>
                        ) : (
                            <ListGroup.Item variant="success">
                                {everyDay.day} {everyDay.open} -{" "}
                                {everyDay.close}
                            </ListGroup.Item>
                        )
                    )}
            </ListGroup>

            <br></br>

            <Card className="font-link2 text-center">
                <Card.Text>123 Address St Roseburg OR, 97476</Card.Text>
            </Card>
            <br></br>
        </>
    );
}

export default UserHours;
