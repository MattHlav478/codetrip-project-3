import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import MenuItems from "./template/MenuItems";

function App() {
    // idea for conditionally rendering the header/footer out when you go to restaurant's website.
    // if (!thoughts.length) {
    //     return <h3>No Thoughts Yet</h3>;
    // }

    return (
        <Router>
            <div className="flex-column justify-flex-start min-100-vh">
                <Header />
                <div className="page-height container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/signup" element={<SignupForm />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/signup" element={<SignupForm />} />
                        {/* 
                        <Route path="/profile">
                                check for /:username parameter first
                                <Route path=":username" element={<Profile />} />
                                if none is provided in URL path, then render Profile component w/o
                                <Route path="" element={<Profile />} />
                            </Route>

                            <Route
                                path="/thought/:id"
                                element={<SingleThought />}
                            /> */}

                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
