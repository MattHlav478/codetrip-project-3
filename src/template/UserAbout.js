import UserNav from "./UserNav";
import Card from "react-bootstrap/Card";
import { db } from "../services/firebaseConnection";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom'

function About() {

  const { userId, name } = useParams();

  async function getBanner() {
    const docRef = doc(db, "restaurants", userId);
    const docSnap = await getDoc(docRef);
    const restData = docSnap.data();
    console.log(restData)

  }

  getBanner();

  return (
    <>
      <UserNav />
      <Card style={{ width: "15rem" }}>
        <Card.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Card.Body>
      </Card>
    </>
  );
}

export default About;
