import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="home-container">
      {!showForm ? (
        <button className="start-ticket-button" onClick={() => setShowForm(true)}>
          Start a Ticket
        </button>
      ) : (
        <div className="ticket-form">
          <h1>Create a Support Ticket</h1>
          <input type="text" placeholder="Enter issue title" className="ticket-input" />
          <textarea placeholder="Describe your issue" className="ticket-textarea"></textarea>
          <button className="submit-button">Submit Ticket</button>
        </div>
      )}
    </div>
  );
}
