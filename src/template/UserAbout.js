import UserNav from './UserNav'
import Card from 'react-bootstrap/Card';


function About() {
  return (
    <>
      <UserNav />
      <Card style={{ width: "90vw" }}>
        <Card.Body className= "font-link2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Card.Body>

        <Card.Title className="link-style">
          <a href="">link goes here</a>
        </Card.Title>
      </Card>
    </>
  );
}

export default About;