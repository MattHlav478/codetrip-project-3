import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function FlushExample() {
    return (
        <>
            <ListGroup variant="flush">
                <ListGroup.Item variant="danger">Mondays Closed</ListGroup.Item>
                <ListGroup.Item>Tuesdays 10am-6pm</ListGroup.Item>
                <ListGroup.Item variant="danger">
                    Wednesdays Closed
                </ListGroup.Item>
                <ListGroup.Item>Thursdays 10am-6pm</ListGroup.Item>
                <ListGroup.Item>Fridays 10am-6pm</ListGroup.Item>
                <ListGroup.Item>Saturdays 10am-6pm</ListGroup.Item>
                <ListGroup.Item variant="danger">Sundays Closed</ListGroup.Item>
            </ListGroup>

            <br></br>

            <Card className="text-center">
                <Card.Text>123 Address St Roseburg OR, 97476</Card.Text>
            </Card>
        </>
    );
}

export default FlushExample;
