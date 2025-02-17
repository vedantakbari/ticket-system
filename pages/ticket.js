// pages/ticket.js
export default function Ticket() {
  return (
    <div className="ticket-container">
      <h1>Create a New Ticket</h1>
      <form className="ticket-form">
        <label className="ticket-label">
          Issue Title:
          <input className="ticket-input" type="text" placeholder="Enter your issue title" />
        </label>
        <label className="ticket-label">
          Description:
          <textarea className="ticket-textarea" placeholder="Describe your issue" rows="4"></textarea>
        </label>
        <button className="ticket-button" type="submit">Submit Ticket</button>
      </form>
    </div>
  );
}
