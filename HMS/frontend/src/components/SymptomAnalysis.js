import React, { useState } from "react";

function SymptomAnalysis() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState("");

  const analyze = async () => {
    const res = await fetch("http://localhost:8000/symptom-analysis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms }),
    });
    const data = await res.json();
    setResult(data.analysis);
  };

  return (
    <div>
      <h2>Symptom Analysis</h2>
      <textarea rows={3} value={symptoms} onChange={e => setSymptoms(e.target.value)} placeholder="Describe your symptoms..." />
      <button onClick={analyze}>Analyze</button>
      {result && <div><b>Result:</b> {result}</div>}
    </div>
  );
}

export default SymptomAnalysis;