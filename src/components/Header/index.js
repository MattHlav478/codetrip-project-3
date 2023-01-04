import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { auth } from "../../services/firebaseConnection";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const logout = async () => {
    await signOut(auth);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  onAuthStateChanged(auth, (user) => {
    setIsLoggedIn(!!user);
  });

  return (
    <>
      <Navbar id="navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Genu</Navbar.Brand>
          <Nav className="me-auto">
            {isLoggedIn ? (
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            ) : null}
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            {isLoggedIn ? (
              <>
                <a href="/" className="nav-link" onClick={logout}>
                  Logout
                </a>
                <p className="nav-link">You are logged in as {auth.currentUser.email}</p>
              </>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
