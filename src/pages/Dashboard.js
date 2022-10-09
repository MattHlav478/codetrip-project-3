import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";

// another level of security, make it so this is only viewed when a user is logged in--if user isn't logged in, then link to homepage, or custom page, whatever we want

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  // const user = auth.currentUser;

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("user: ", user);
    } else {
      console.log("no user");
    }
  });

  const getUserProjects = async () => {
    const docRef = doc(db, "users", "user@yahoo.com");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProjects(docSnap.data());
      console.log(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getUserProjects();
  }, []);

  return (
    <div>
      <br></br>
      <Button type="submit" variant="dark">
        <Link className="no-decor" to="/create">
          Create New Project
        </Link>
      </Button>

      {/* insert name of user here */}

      <h1>
        {" "}
        <br></br> Welcome Name!
      </h1>

      <h2>My Projects</h2>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="card-title">Restaurant Title</Card.Title>
            <Card.Text className="card-text">
              Date Created: //code here
            </Card.Text>
            <Card.Text className="card-text">
              Last Updated: //code here
            </Card.Text>
            <Button variant="dark" className="card-button">
              View
            </Button>{" "}
            <Button variant="dark" className="card-button">
              Edit
            </Button>{" "}
            <Button variant="dark" className="card-button">
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
