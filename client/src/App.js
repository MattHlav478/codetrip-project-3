import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    ApolloProvider, //special type of React component that we'll use to providate data to ALL of the other components
    ApolloClient, //constructor function that will help initialize the connection to the GraphQL API server
    // InMemoryCache, //enables AC instance to cache API response data so we can perform requests more efficiently
    // createHttpLink, //allows us to control how the AC makes a request (like middleware for outbound network requests)
} from "@apollo/client";

import Header from "./components/Header";
import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Developers from "./pages/Developers";

function App() {
    return (
        <Router>
            <div className="flex-column justify-flex-start min-100-vh">
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/thedevelopers" element={<Developers />} />
                        <Route path="/signup" element={<SignupForm />} />
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
