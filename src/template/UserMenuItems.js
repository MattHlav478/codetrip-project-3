import UserNav from "./UserNav";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebaseConnection";
import { getDoc, doc } from "firebase/firestore";

function UserMenuItems() {
  const { userId, name } = useParams();

  const [menu, setMenu] = useState();

  // if menu state exist, change css to not display nav bar
  if (menu) {
    console.log('testing...')
    const navbar = document.getElementById("navbar")
    // navbar.remove()
  }


  async function getData() {
    //     // FIRESTORE call
    const docRef = doc(db, "restaurants", userId);
    const docSnap = await getDoc(docRef);
    const restData = docSnap.data();
    const menuData = [];
    restData.menu.map((menuItem) => {
      menuData.push(menuItem);
    });
    setMenu(menuData);
  }

  useEffect(() => {
    getData();
  }, []);

  // trying to remove navbar, but doesn't work...
  useEffect(() => {
      if (menu) {
        console.log("testing...");
        const navbar = document.getElementById("navbar");
        navbar.remove()
      }
  }, [])

  return (
    <>
      <UserNav />
      <Card>
        <Card.Header>Appetizers</Card.Header>
        {menu &&
          menu.map((menuItem, i) =>
            menuItem.type == "Appetizer" ? (
              // <div key={i}>{menuItem.name}</div>
              <Card.Body>
                <div className="card-body-menu">
                  <div className="menu-item-info">
                    <Card.Title>{menuItem.name}</Card.Title>
                    <Card.Text>{menuItem.price}</Card.Text>
                    <Card.Text>{menuItem.description}</Card.Text>
                  </div>
                  <div className="menu-image-container">
                    {menuItem.imageUrl != "" ? (
                      <Image
                        src={menuItem.imageURL}
                        thumbnail
                        rounded
                        className="menu-item-image"
                      />
                    ) : null}
                  </div>
                </div>
              </Card.Body>
            ) : null
          )}
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      <br></br>

      <Card>
        <Card.Header>Salads</Card.Header>
        {menu &&
          menu.map((menuItem, i) =>
            menuItem.type == "Salad" ? (
              // <div key={i}>{menuItem.name}</div>
              <Card.Body>
                <div className="card-body-menu">
                  <div className="menu-item-info">
                    <Card.Title>{menuItem.name}</Card.Title>
                    <Card.Text>{menuItem.price}</Card.Text>
                    <Card.Text>{menuItem.description}</Card.Text>
                  </div>
                  <div className="menu-image-container">
                    {menuItem.imageUrl != "" ? (
                      <Image
                        src={menuItem.imageURL}
                        thumbnail
                        rounded
                        className="menu-item-image"
                      />
                    ) : null}
                  </div>
                </div>
              </Card.Body>
            ) : null
          )}
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      <br></br>

      <Card>
        <Card.Header>Main Dishes</Card.Header>
        {menu &&
          menu.map((menuItem, i) =>
            menuItem.type == "Main" ? (
              <Card.Body>
                <div className="card-body-menu">
                  <div className="menu-item-info">
                    <Card.Title>{menuItem.name}</Card.Title>
                    <Card.Text>{menuItem.price}</Card.Text>
                    <Card.Text>{menuItem.description}</Card.Text>
                  </div>
                  <div className="menu-image-container">
                    {menuItem.imageUrl != "" ? (
                      <Image
                        src={menuItem.imageURL}
                        thumbnail
                        rounded
                        className="menu-item-image"
                      />
                    ) : null}
                  </div>
                </div>
              </Card.Body>
            ) : null
          )}
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      <br></br>

      <Card>
        <Card.Header>A la Carte</Card.Header>
        {menu &&
          menu.map((menuItem, i) =>
            menuItem.type == "A la Carte" ? (
              // <div key={i}>{menuItem.name}</div>
              <Card.Body>
                <div className="card-body-menu">
                  <div className="menu-item-info">
                    <Card.Title>{menuItem.name}</Card.Title>
                    <Card.Text>{menuItem.price}</Card.Text>
                    <Card.Text>{menuItem.description}</Card.Text>
                  </div>
                  <div className="menu-image-container">
                    {menuItem.imageUrl != "" ? (
                      <Image
                        src={menuItem.imageURL}
                        thumbnail
                        rounded
                        className="menu-item-image"
                      />
                    ) : null}
                  </div>
                </div>
              </Card.Body>
            ) : null
          )}
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      <br></br>

      <Card>
        <Card.Header>Desserts</Card.Header>
        {menu &&
          menu.map((menuItem, i) =>
            menuItem.type == "Dessert" ? (
              // <div key={i}>{menuItem.name}</div>
              <Card.Body>
                <div className="card-body-menu">
                  <div className="menu-item-info">
                    <Card.Title>{menuItem.name}</Card.Title>
                    <Card.Text>{menuItem.price}</Card.Text>
                    <Card.Text>{menuItem.description}</Card.Text>
                  </div>
                  <div className="menu-image-container">
                    {menuItem.imageUrl != "" ? (
                      <Image
                        src={menuItem.imageURL}
                        thumbnail
                        rounded
                        className="menu-item-image"
                      />
                    ) : null}
                  </div>
                </div>
              </Card.Body>
            ) : null
          )}
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      <br></br>

      <Card>
        <Card.Header>Drinks</Card.Header>
        {menu &&
          menu.map((menuItem, i) =>
            menuItem.type == "Drinks" ? (
              // <div key={i}>{menuItem.name}</div>
              <Card.Body>
                <div className="card-body-menu">
                  <div className="menu-item-info">
                    <Card.Title>{menuItem.name}</Card.Title>
                    <Card.Text>{menuItem.price}</Card.Text>
                    <Card.Text>{menuItem.description}</Card.Text>
                  </div>
                  <div className="menu-image-container">
                    {menuItem.imageUrl != "" ? (
                      <Image
                        src={menuItem.imageURL}
                        thumbnail
                        rounded
                        className="menu-item-image"
                      />
                    ) : null}
                  </div>
                </div>
              </Card.Body>
            ) : null
          )}
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      <br></br>
    </>
  );
}

export default UserMenuItems;
