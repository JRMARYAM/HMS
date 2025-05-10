import React, { useState } from "react";

function HospitalSuggestion() {
  const [location, setLocation] = useState("");
  const [disease, setDisease] = useState("");
  const [results, setResults] = useState([]);

  const getSuggestions = async () => {
    const res = await fetch("http://localhost:8000/hospital-suggestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ location, disease }),
    });
    const data = await res.json();
    setResults(data);
  };

  return (
    <div>
      <h2>Hospital & Doctor Suggestions</h2>
      <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
      <input placeholder="Disease" value={disease} onChange={e => setDisease(e.target.value)} />
      <button onClick={getSuggestions}>Get Suggestions</button>
      <ul>
        {results.map((r, i) => (
          <li key={i}>{r.name} (Doctor: {r.doctor})</li>
        ))}
      </ul>
    </div>
  );
}

export default HospitalSuggestion;