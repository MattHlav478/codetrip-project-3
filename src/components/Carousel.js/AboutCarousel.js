import Carousel from "react-bootstrap/Carousel";

function AboutCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require(`./restaurant.jpeg`)}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Want more business at your restaurant?</h3>
                    <p>
                        We are here to help you advertise your hard work to
                        potential customers!
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require(`./success.jpeg`)}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>
                        We've taken the work out of building your personalized
                        website.
                    </h3>
                    <p>
                        Sign up and get your menu, contact info, and more online
                        today.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default AboutCarousel;
