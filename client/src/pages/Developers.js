import React from "react";

export default function Developers() {
    const bios = [
        {
            name: "Kayla Fischer",
            image: "to be continued",
            linkedIn: "https://www.linkedin.com/in/kayla-fischer-679200109/",
            about: "",
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
            about: "",
        },
        {
            name: "Matt Hvalty",
            image: "tbc",
            linkedIn: "",
            about: "",
        },
    ];

    return (
        <div>
            <h1>Meet the codeTrip() Team</h1>
            {bios.map((person) => (
                <div key={person.linkedIn}>
                    <h2>{person.name}</h2>
                    <p>{person.about}</p>
                    <a target="_blank" href={`${person.linkedIn}`}>
                        LinkedIn
                    </a>
                    {/* image somewhere....sometime...somehow */}
                </div>
            ))}
        </div>
    );
}
