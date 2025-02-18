import { useState } from 'react';

function TicketForm() {
  const [ticketMessage, setTicketMessage] = useState(''); // Save message typed by user

  // This function sends the message to the server
  const submitTicket = async (message) => {
    // Send message to your backend server (the webhook)
    const res = await fetch('/api/webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // We are sending JSON data
      },
      body: JSON.stringify({ message }), // Send the message as JSON
    });

    const data = await res.json(); // Get the response from the server

    if (res.ok) {
      alert('Ticket submitted successfully!'); // Success message
    } else {
      alert('Failed to submit ticket.'); // Error message if it fails
    }
  };

  return (
    <div className="ticket-form">
      <h2>Submit Your Ticket</h2>
      {/* The text area where user types their message */}
      <textarea
        value={ticketMessage}
        onChange={(e) => setTicketMessage(e.target.value)} // Update message as user types
        placeholder="Enter your message here"
        className="ticket-input"
      />
      
      {/* Button to submit the ticket */}
      <button onClick={() => submitTicket(ticketMessage)} className="submit-button">Submit Ticket</button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home-container">
      <TicketForm />  {/* Display the form to submit tickets */}
    </div>
  );
}
