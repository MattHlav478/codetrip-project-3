import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { db } from "../services/firebaseConnection";
import { collection, query, where, getDoc, doc } from "firebase/firestore";
import { UserAbout, UserFooter, UserHours, UserMenuItems } from "./index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home() {
  const { userId, name } = useParams();
  console.log(userId, name);
  // userParam is restaurant ID

  async function getData() {
    //     // FIRESTORE call
    const docRef = doc(db, "restaurants", userId);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    const x = docSnap.data();
    console.log(x.name);
  }

  getData();

  // console.log(docSnap.data())

  // useEffect(() => {
  //     console.log("projects: ", projects)
  // },[])

  // make a call to firebase to extract specific restaurant project data
  // based on URL parameter bar
  // genu/project/:user-id/:restaurant-id/:restaurant-name

  return (
    <header>
      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">Restaurant Name</h1>
        <h4 className="mb-3">323-499-5070</h4>
      </div>

      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={`/restaurant/${userId}/${name}/menu`} eventKey="link-1">
            Menu
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link >Visit Us</Nav.Link>
        </Nav.Item>
      </Nav>

      <br></br>
    </header>
  );
}
