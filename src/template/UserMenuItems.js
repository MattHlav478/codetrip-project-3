import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HeaderAndFooterExample() {
    return (
        <>
            <Card>
                <Card.Header>Appetizers</Card.Header>
                <Card.Body>
                    <Card.Title>Mozzarella Sticks</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text>
                    <Card.Text className="blockquote-footer">$8.00</Card.Text>
                    <Button variant="info">See Photo</Button>
                </Card.Body>

                <Card.Body>
                    <Card.Title>Chips and salsa</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text>
                    <Card.Text className="blockquote-footer">$8.00</Card.Text>
                    <Button variant="info">See Photo</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
            <br></br>
            <Card>
                <Card.Header>Drinks</Card.Header>
                <Card.Body>
                    <Card.Title>Horchata</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text>
                    <Card.Text className="blockquote-footer">$8.00</Card.Text>
                    <Button variant="info">See Photo</Button>
                </Card.Body>

                <Card.Body>
                    <Card.Title>Jarritos</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text>
                    <Card.Text className="blockquote-footer">$8.00</Card.Text>
                    <Button variant="info">See Photo</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
            <br></br>
            <Card>
                <Card.Header>Main Dishes</Card.Header>
                <Card.Body>
                    <Card.Title>Tacos</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text>
                    <Card.Text className="blockquote-footer">$8.00</Card.Text>
                    <Button variant="info">See Photo</Button>
                </Card.Body>

                <Card.Body>
                    <Card.Title>Enchiladas</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text>
                    <Button variant="info">See Photo</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>

            <br></br>
            <Card>
                <Card.Header>Desserts</Card.Header>
                <Card.Body>
                    <Card.Title>Churros</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text>
                    <Card.Text className="blockquote-footer">$8.00</Card.Text>
                    <Button variant="info">See Photo</Button>
                </Card.Body>

                <Card.Body>
                    <Card.Title>Flan</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text>
                    <Card.Text className="blockquote-footer">$8.00</Card.Text>
                    <Button variant="info">See Photo</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </>
    );
}

export default HeaderAndFooterExample;
