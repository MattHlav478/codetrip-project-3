import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./services/firebaseConnection";

import { Create, Dashboard, Home, NoMatch, ThankYou } from "./pages/index";
import { Footer, LoginForm, SignupForm, Header } from "./components/index";
import { UserAbout, UserNav, UserHours, UserMenuItems } from "./template";
import { ScrollToTop } from "./utils/helpers";

function App() {
  return (
    <>
      <Router>
        <div className="page-content">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create" element={<Create />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="restaurant/:userId/:name">
                <Route path="" element={<UserAbout />}></Route>
                <Route path="visit" element={<UserHours />}></Route>
                <Route path="menu" element={<UserMenuItems />}></Route>
              </Route>
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
