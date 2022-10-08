import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebaseConnection";

// another level of security, make it so this is only viewed when a user is logged in--if user isn't logged in, then link to homepage, or custom page, whatever we want

export default function Dashboard() {
  //   async function getUserDoc() {
  //     const docRef = collection(db, "users", "user@yahoo.com", "restaurant");
  //     const docSnap = await getDocs(docRef);

  //     if (docSnap) {
  //         console.log("Document data:", docSnap);
  //       } else {
  //         // doc.data() will be undefined in this case
  //         console.log("No such document!");
  //       }

  //   };

  //   getUserDoc();

  // getDoc(doc(db, "users", "user@yahoo.com")).then((docSnap) => {
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     console.log("No such document!");
  //   }
  // });

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
      <div></div>
    </div>
  );
}
