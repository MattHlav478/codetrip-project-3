import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  
            return (
              <>
        {/* LOGGED IN: GENU (home), dashboard, meet the team, pricing, logout */}
        {/* LOGGED OUT: GENU (home), meet the team, pricing, login */}
        {/* so need login/logout to conditionally render, and dashboard to show up ONLY when logged in */}
                <Navbar bg="dark" variant="dark">
                  <Container>
                    <Navbar.Brand href="#home">Genu</Navbar.Brand>
                    <Nav className="me-auto">
                      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                      <Nav.Link href="/thedevelopers">The Developers</Nav.Link>
                      <Nav.Link href="/pricing">Pricing</Nav.Link>
                      <Nav.Link href="/login">Login</Nav.Link>
                      <Nav.Link href="/signup">SignUp</Nav.Link>
                    </Nav>
                  </Container>
                </Navbar>
                </>
                )}


