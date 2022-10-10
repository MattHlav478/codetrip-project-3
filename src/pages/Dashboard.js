import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";
import { db, auth } from "../services/firebaseConnection";

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
          console.log("projects: ", projects);
        } else {
          console.log("No such document!");
        }
      } else {
        window.location.assign("/login");
      }
    });
  }

  useEffect(() => {
    getUserProjects();
  }, []);

  const { restaurant } = projects;

  async function handleDeleteBtn(event) {
    const user = auth.currentUser.email;
    const docRef = doc(db, `users`, user);
    const restaurantKey = event.target.getAttribute("data-key");

    await updateDoc(docRef, {
      restaurant: arrayRemove(restaurant[restaurantKey]),
    });
    window.location.assign("/dashboard");
  }

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
      <div className="project-container">
        {restaurant && restaurant.length >= 1 && Array.isArray(restaurant) ? (
          restaurant.map((rest, i) => (
            <Card key={i} style={({ width: "18rem" }, { margin: "1rem" })}>
              <Card.Body className="project-card">
                <Card.Title className="card-title">{rest.name}</Card.Title>
                <Card.Text className="card-text">
                  Date Created: {rest.createdAt}
                </Card.Text>
                <Button variant="dark" className="card-button">
                  View
                </Button>{" "}
                <Button
                  data-key={i}
                  variant="dark"
                  className="card-button"
                  onClick={handleDeleteBtn}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div>It's pretty empty here... Start by creating a Genu project!</div>
        )}
      </div>
    </div>
  );
}
