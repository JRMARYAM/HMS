import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to the Healthcare Monitoring System</h1>
      <button onClick={() => navigate("/chatbot")}>Chatbot for Medical Assistance</button>
      <button onClick={() => navigate("/symptom")}>Symptom Analysis</button>
      <button onClick={() => navigate("/hospital")}>Hospital & Doctor Suggestions</button>
    </div>
  );
}

export default Home;