import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
    return (
        <div className ="page-height">
            Oops, we couldn't find that page.
            <Link to="/">
                <h1>Let's head back home, shall we?</h1>
            </Link>
        </div>
    );
}
