import React, { useState } from 'react';

export default function Home() {
  const [ticketMessage, setTicketMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: ticketMessage }),
    });

    if (response.ok) {
      alert('Ticket Submitted!');
      setTicketMessage('');
    } else {
      alert('Failed to submit ticket.');
    }
  };

  return (
    <div className="container">
      <h1>Create a Support Ticket</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Describe your issue"
          value={ticketMessage}
          onChange={(e) => setTicketMessage(e.target.value)}
        />
        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
}
