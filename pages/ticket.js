// pages/ticket.js

import { useState } from "react";

export default function Ticket() {
  const [ticketInfo, setTicketInfo] = useState({
    title: "",
    description: "",
  });

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketInfo({
      ...ticketInfo,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ticket submitted:\nTitle: ${ticketInfo.title}\nDescription: ${ticketInfo.description}`);
    setTicketInfo({ title: "", description: "" }); // Reset after submission
  };

  return (
    <div className="ticket-container">
      <h1 className="ticket-title">Start a New Ticket</h1>
      <form className="ticket-form" onSubmit={handleSubmit}>
        <label className="ticket-label">
          Issue Title:
          <input
            type="text"
            name="title"
            className="ticket-input"
            placeholder="Enter your issue title"
            value={ticketInfo.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="ticket-label">
          Description:
          <textarea
            name="description"
            className="ticket-textarea"
            placeholder="Describe your issue"
            rows="5"
            value={ticketInfo.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" className="ticket-submit-button">
          Submit Ticket
        </button>
      </form>
    </div>
  );
}
