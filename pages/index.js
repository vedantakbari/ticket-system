import { useState } from 'react';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div>
      <div className="home-container">
        <button className="start-ticket-button" onClick={() => setShowForm(true)}>
          Start a Ticket
        </button>

        {showForm && (
          <form onSubmit={handleFormSubmit} className="ticket-form">
            <h2>Ticket Submission</h2>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="ticket-textarea"
              placeholder="Enter your ticket message here"
              required
            />
            <button type="submit" className="submit-button">
              Submit Ticket
            </button>
          </form>
        )}
      </div>

      <div id="cube-container">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
    </div>
  );
}
