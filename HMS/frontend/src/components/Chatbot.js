import React, { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([{ from: "bot", text: "How can I assist you today?" }]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    setMessages([...messages, { from: "user", text: input }]);
    const res = await fetch("http://localhost:8000/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setMessages(msgs => [...msgs, { from: "bot", text: data.response }]);
    setInput("");
  };

  return (
    <div>
      <h2>Medical Chatbot</h2>
      <div style={{ minHeight: 100, border: "1px solid #000", padding: 10 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.from === "bot" ? "left" : "right" }}>
            <b>{m.from === "bot" ? "Bot" : "You"}:</b> {m.text}
          </div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;