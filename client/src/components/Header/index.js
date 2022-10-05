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
                    {/* LOGGED IN: GENU (home), dashboard, meet the team, pricing, logout */}
                    {/* LOGGED OUT: GENU (home), meet the team, pricing, login */}
                    {/* so need login/logout to conditionally render, and dashboard to show up ONLY when logged in */}
                    
                    {/* {Auth.loggedIn() ? (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/" onClick={logout}>Logout</Link>
                        functionality to logout
                        </>
                    ) : ( */}
                    <>
                        <Link to="/thedevelopers">The Developers</Link>
                        {/* about us? ^^ */}
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/login">Login/Signup</Link>
                        {/* <Link to="/signup"></Link> */}
                    </>
                </nav>
            </div>
        </header>
    );
}
