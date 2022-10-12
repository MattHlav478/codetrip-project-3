import React from "react";
import Figure from "react-bootstrap/Figure";

export default function ThankYou() {
    return (
        <div>
            <h1>From CodeTrip to you, we say...THANK YOU!</h1>
            <p>
                Your support has been keeping us going for 6 long (valuable,
                unforgettable, life-changing) months, and your skills as
                developers provide us a shining example of the kind of coders we
                hope to be someday.
            </p>
            <p>Wish us luck!</p>
            <Figure.Image
                className="sizing"
                alt="new developers at only the beginning of a glorious journey"
                src={require("../components/MeetDevelopers.js/codeTrip.jpg")}
            />
        </div>
    );
}
