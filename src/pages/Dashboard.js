import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../services/firebaseConnection";

// another level of security, make it so this is only viewed when a user is logged in--if user isn't logged in, then link to homepage, or custom page, whatever we want

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  function getUserProjects() {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const user = auth.currentUser.email;
        // if (user) {
        //   console.log('here')
        // }
        // const docRef = doc(db, "restaurants", /*unique restaurant ID*/);
        // const docSnap = await getDoc(docRef);
        const restRef = collection(db, "restaurants");
        const userRest = query(restRef, where("user", "==", user));
        const querySnapshot = await getDocs(userRest);
        // console.log(querySnapshot)

        const projectsUpdate = [];

        querySnapshot.forEach((doc) => {
          const obj = doc.data();
          obj.id = doc.id;
          projectsUpdate.push(obj);
        });

        setProjects(projectsUpdate);
        // if (projects) {
        //   // setProjects(docSnap.data());
        //   // console.log("projects: ", projects);
        //   console.log(userRest)
        //   c
        // } else {
        //   console.log("No such document!");
        // }
      } else {
        window.location.assign("/login");
      }
    });
  }

  useEffect(() => {
    getUserProjects();
  }, []);

  const restaurant = projects;

  async function handleDeleteBtn(event) {
    const restId = event.target.getAttribute('data-key')
    await deleteDoc(doc(db, "restaurants", restId))
    window.location.assign("/dashboard")
  }

  return (
    <div className="page-height">
      <br></br>
      <Link className="no-decor" to="/create">
        <Button type="submit" variant="dark">
          Create New Project
        </Button>{" "}
      </Link>

      <h1>
        {" "}
        <br></br> Welcome!
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
                <Link
                  className="no-decor"
                  to={`/restaurant/${rest.id}/${rest.name}`}
                  target="_blank"
                >
                  <Button variant="dark" className="card-button">
                    View
                  </Button>{" "}
                </Link>
                <Button
                  data-key={rest.id}
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
