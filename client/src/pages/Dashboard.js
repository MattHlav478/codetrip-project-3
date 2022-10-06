import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// another level of security, make it so this is only viewed when a user is logged in--if user isn't logged in, then link to homepage, or custom page, whatever we want

export default function Dashboard() {
    return (
        <div>
            <Button type="submit" variant="success">
                <Link to="/create">Create New Project</Link>
            </Button>
            {/* insert name of user here */}
            <h1>Welcome!</h1>

            <h2>My Projects</h2>
        </div>
    );
}
