import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";

import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBBtn,
    MDBCollapse,
} from "mdb-react-ui-kit";

export default function Home() {
    const [showBasic, setShowBasic] = useState(false);

    // make a call to firebase to extract specific restaurant project data
    // based on URL parameter bar
    // genu/project/:user-id/:restaurant-id/:restaurant-name

    return (
        <header>
            <MDBNavbar expand="lg" light bgColor="white" fixed>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        aria-controls="navbarExample01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <MDBIcon fas icon="bars" />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showBasic}>
                        <MDBNavbarNav right className="mb-2 mb-lg-0">
                            <MDBNavbarItem active>
                                <MDBNavbarLink aria-current="page" href="#">
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">Features</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">About</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

            <div className="p-5 text-center bg-light">
                <h1 className="mb-3">Restaurant Name</h1>
                <h4 className="mb-3">323-499-5070</h4>
                <MDBBtn tag="a" outline size="lg">
                    Our Menu
                </MDBBtn>
            </div>

            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Menu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Visit Us</Nav.Link>
                </Nav.Item>
            </Nav>

            <br></br>
        </header>
    );
}
