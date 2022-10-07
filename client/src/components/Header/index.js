import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <Link to="/">
                    <h1>GENU</h1>
                </Link>

                <nav className="text-center">
                    {/* {Auth.loggedIn() ? (
                        <>
                            <Link to="/login">Me</Link>
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </>
                    ) : ( */}
                    <>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/login">Login/Signup</Link>
                        {/* <Link to="/signup"></Link> */}
                    </>
                </nav>
            </div>
        </header>
    );
}
