import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import SymptomAnalysis from "./components/SymptomAnalysis";
import HospitalSuggestion from "./components/HospitalSuggestion";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/symptom" element={<SymptomAnalysis />} />
          <Route path="/hospital" element={<HospitalSuggestion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;