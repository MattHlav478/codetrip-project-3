import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";

// another level of security, make it so this is only viewed when a user is logged in--if user isn't logged in, then link to homepage, or custom page, whatever we want

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  function getUserProjects() {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const user = auth.currentUser.email;
        const docRef = doc(db, "users", user);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists) {
          setProjects(docSnap.data());
          console.log(projects);
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("no user");
      }
    });
  }

  useEffect(() => {
    getUserProjects();
  }, []);

  const { restaurant } = projects

  return (
    <div>
      <br></br>
      <Button type="submit" variant="dark">
        <Link className="no-decor" to="/create">
          Create New Project
        </Link>
      </Button>
      <h1>
        {" "}
        <br></br> Welcome {projects.name}!
      </h1>

      <h2>My Projects</h2>
      <div>
        {restaurant &&
          restaurant.map(rest => (
            <Card key={rest.name} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="card-title">{rest.name}</Card.Title>
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
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}
