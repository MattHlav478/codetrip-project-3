import UserNav from "./UserNav";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebaseConnection";
import { getDoc, doc } from "firebase/firestore";

function UserMenuItems() {
  const { userId, name } = useParams();

  const [menu, setMenu] = useState([]);

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

// remove navbar from view
  useEffect(() => {
    if (menu) {
      const navbar = document.getElementById("navbar");
      navbar.remove();
    }
  }, []);

  return (
    <>
      <UserNav />
      {menu.filter((itemType) => itemType.type == "Appetizer").length > 0 ? (
        <Card>
          <Card.Header>Appetizers</Card.Header>
          {menu &&
            menu.map((menuItem, i) =>
              menuItem.type == "Appetizer" ? (
                <Card.Body>
                  <div className="card-body-menu">
                    <div className="menu-item-info">
                      <Card.Title key={i}>{menuItem.name}</Card.Title>
                      <Card.Text key={i + 1}>{menuItem.price}</Card.Text>
                      <Card.Text key={i + 2}>{menuItem.description}</Card.Text>
                    </div>
                    <div key={i} className="menu-image-container">
                      {menuItem.imageUrl != "" ? (
                        <Image
                          key={i}
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
      ) : null}

      <br></br>

      {menu.filter((itemType) => itemType.type == "Salad").length > 0 ? (
        <Card>
          <Card.Header>Salads</Card.Header>
          {menu &&
            menu.map((menuItem, i) =>
              menuItem.type == "Salad" ? (
                <Card.Body>
                  <div className="card-body-menu">
                    <div className="menu-item-info">
                      <Card.Title key={i}>{menuItem.name}</Card.Title>
                      <Card.Text key={i + 1}>{menuItem.price}</Card.Text>
                      <Card.Text key={i + 2}>{menuItem.description}</Card.Text>
                    </div>
                    <div key={i} className="menu-image-container">
                      {menuItem.imageUrl != "" ? (
                        <Image
                          key={i}
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
      ) : null}
      <br></br>

      {menu.filter((itemType) => itemType.type == "Main").length > 0 ? (
        <Card>
          <Card.Header>Main Dishes</Card.Header>
          {menu &&
            menu.map((menuItem, i) =>
              menuItem.type == "Main" ? (
                <Card.Body>
                  <div className="card-body-menu">
                    <div className="menu-item-info">
                      <Card.Title key={i}>{menuItem.name}</Card.Title>
                      <Card.Text key={i + 1}>{menuItem.price}</Card.Text>
                      <Card.Text key={i + 2}>{menuItem.description}</Card.Text>
                    </div>
                    <div key={i} className="menu-image-container">
                      {menuItem.imageUrl != "" ? (
                        <Image
                          key={i}
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
      ) : null}
      <br></br>

      {menu.filter((itemType) => itemType.type == "A La Carte").length > 0 ? (
        <Card>
          <Card.Header>A La Carte</Card.Header>
          {menu &&
            menu.map((menuItem, i) =>
              menuItem.type == "A La Carte" ? (
                <Card.Body>
                  <div className="card-body-menu">
                    <div className="menu-item-info">
                      <Card.Title key={i}>{menuItem.name}</Card.Title>
                      <Card.Text key={i + 1}>{menuItem.price}</Card.Text>
                      <Card.Text key={i + 2}>{menuItem.description}</Card.Text>
                    </div>
                    <div key={i} className="menu-image-container">
                      {menuItem.imageUrl != "" ? (
                        <Image
                          key={i}
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
      ) : null}
      <br></br>

      {menu.filter((itemType) => itemType.type == "Dessert").length > 0 ? (
        <Card>
          <Card.Header>Desserts</Card.Header>
          {menu &&
            menu.map((menuItem, i) =>
              menuItem.type == "Dessert" ? (
                <Card.Body>
                  <div className="card-body-menu">
                    <div className="menu-item-info">
                      <Card.Title key={i}>{menuItem.name}</Card.Title>
                      <Card.Text key={i + 1}>{menuItem.price}</Card.Text>
                      <Card.Text key={i + 2}>{menuItem.description}</Card.Text>
                    </div>
                    <div key={i} className="menu-image-container">
                      {menuItem.imageUrl != "" ? (
                        <Image
                          key={i}
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
      ) : null}
      <br></br>

      {menu.filter((itemType) => itemType.type == "Drinks").length > 0 ? (
        <Card>
          <Card.Header>Drinks</Card.Header>
          {menu &&
            menu.map((menuItem, i) =>
              menuItem.type == "Drinks" ? (
                <Card.Body>
                  <div className="card-body-menu">
                    <div className="menu-item-info">
                      <Card.Title key={i}>{menuItem.name}</Card.Title>
                      <Card.Text key={i + 1}>{menuItem.price}</Card.Text>
                      <Card.Text key={i + 2}>{menuItem.description}</Card.Text>
                    </div>
                    <div key={i} className="menu-image-container">
                      {menuItem.imageUrl != "" ? (
                        <Image
                          key={i}
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
      ) : null}
      <br></br>
    </>
  );
}

export default UserMenuItems;
