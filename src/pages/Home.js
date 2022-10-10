import React from "react";
import AboutCarousel from "../components/Carousel.js/AboutCarousel";
import Developers from "../components/MeetDevelopers.js/Developers";

export default function Home() {
    return (
        <section className="page-height">
            <AboutCarousel></AboutCarousel>
            <Developers></Developers>
            <div className="divider">
                <br></br>
                <h1>About Genu</h1>
                <p>
                    You're not alone. You're a small business, with just a few
                    locations--or maybe even one. You might be thinking that
                    there's no need to have a website--after all, Google can
                    display your hours, Grubhub can display your menu, and you
                    just keep doing the hard work of making delicious food! But
                    having your own website can be helpful for a demographic of
                    potential customers, and can be a way for you to eventually
                    implement online ordering! In our modern age, having your
                    own website helps you make the best first impression on all
                    your future customers.
                </p>
                <p>
                    While there are plenty of people out there that make
                    websites, we at Genu are all about making it easy for
                    restaurants, as hands-on or hands-off as you'd like. After
                    all, we're a small business too.
                </p>
                <p>Sound good? Sign up today and see what we can do for you!</p>
            </div>
        </section>
    );
}
