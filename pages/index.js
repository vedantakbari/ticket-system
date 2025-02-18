import { useState } from "react";

export default function Home() {
  const [ticket, setTicket] = useState({
    name: "",
    email: "",
    issue: "",
  });

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    console.log("Ticket Submitted:", ticket);
    alert("🎟️ Ticket Submitted! We will get back to you soon.");
    // You can later send this data to an API
  };

  return (
    <div className="home-container">
      <div className="ticket-form">
        <h2>Submit a Ticket</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="ticket-input"
            value={ticket.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="ticket-input"
            value={ticket.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="issue"
            placeholder="Describe your issue..."
            className="ticket-textarea"
            value={ticket.issue}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">Submit Ticket</button>
        </form>
      </div>
    </div>
  );
}
