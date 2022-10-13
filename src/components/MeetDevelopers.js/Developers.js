import React from "react";
import Figure from "react-bootstrap/Figure";

export default function Developers() {
    const bios = [
        {
            name: "Kayla Fischer",
            image: "./Kayla.jpg",
            linkedIn: "https://www.linkedin.com/in/kayla-fischer-679200109/",
            about: "Hike, boulder, code, tacos.",
        },
        {
            name: "Lillie Lovatt",
            image: "./Lillie.jpg",
            linkedIn: "https://www.linkedin.com/in/lillie-lovatt-7b2475181/",
            about: "I'm a recent graduate from the University of Oregon bootcamp. I like making errors go away, solving problems, learning new things, soccer, and working with my codeTrip() buddies.",
        },
        {
            name: "Marlowe Crosland",
            image: "./Marlowe.jpg",
            linkedIn: "https://www.linkedin.com/in/marlowe-crosland-338b5a235/",
            about: "My strengths include front end development, attention to detail, and picking up skills quickly. My weaknesses include writing bios.",
        },
        {
            name: "Matt Hlavaty",
            image: "./Matt.jpg",
            linkedIn: "https://www.linkedin.com/in/matthew-hlavaty-abbb082b/",
            about: "I like chocolate chip cookies a whole lot.",
        },
    ];

    return (
        <>
            <br></br>
            <h1>Meet the codeTrip() Team</h1>
            <div className="developer-container">
                {bios.map((person) => (
                    <Figure key={person.name} className="developer-container">
                        <h4>{person.name}</h4>
                        <Figure.Image
                            className="sizing"
                            width={200}
                            height={200}
                            alt={person.name}
                            src={require(`${person.image}`)}
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
