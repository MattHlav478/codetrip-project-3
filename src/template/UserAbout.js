import UserNav from "./UserNav";
import Card from "react-bootstrap/Card";

function About() {
    return (
        <>
            <UserNav />
            <div className="centertext">
            <Card style={{ width: "90%" }}>
                <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Card.Body>
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
