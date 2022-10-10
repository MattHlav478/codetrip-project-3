import React from "react";
import Figure from "react-bootstrap/Figure";
export default function Developers() {
    const bios = [
        {
            name: "Kayla Fischer",
            image: "to be continued",
            linkedIn: "https://www.linkedin.com/in/kayla-fischer-679200109/",
            about: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
        {
            name: "Lillie Lovatt",
            image: "tbc",
            linkedIn: "https://www.linkedin.com/in/lillie-lovatt-7b2475181/",
            about: "I'm a recent graduate from the University of Oregon bootcamp. I like making errors go away, solving problems, learning new things, soccer, and working with my codeTrip() buddies.",
        },
        {
            name: "Marlowe Crosland",
            image: "tbc",
            linkedIn: "https://www.linkedin.com/in/marlowe-crosland-338b5a235/",
            about: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu..",
        },
        {
            name: "Matt Hlavaty",
            image: "tbc",
            linkedIn: "https://www.linkedin.com/in/matthew-hlavaty-abbb082b/",
            about: "I like chocolate chip cookies a whole lot.",
        },
    ];

    return (
        <>
            <h1>Meet the codeTrip() Team</h1>
            <div className="developer-container">
                {bios.map((person) => (
                    <Figure className="developer-container">
                        <h4>{person.name}</h4>
                        <Figure.Image
                        className="sizing"
                            width={200}
                            height={200}
                            alt="171x180"
                            src="holder.js/171x180"
                        />
                        <Figure.Caption className="sizing">
                            {person.about}
                        </Figure.Caption>
                    </Figure>
                ))}
            </div>
        </>
    );
}
