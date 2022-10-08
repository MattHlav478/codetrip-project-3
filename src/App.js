import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Create, Dashboard, Developers, NoMatch } from "./pages";
import { Header, Footer, LoginForm, SignupForm } from "./components";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
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
