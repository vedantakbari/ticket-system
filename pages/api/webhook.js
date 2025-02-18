let ticketNumber = 1;  // Start ticket number from 1 (you can persist this in a database if needed)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    // Your Discord Webhook URL
    const webhookURL = 'https://discord.com/api/webhooks/1341198386329686068/t2k5YFuTJewjljUYxaOh1YOvGpai5z6Ghibqf0voIaFy8oZ8Aneuyv5pqRWGhkyu4LZ5';
    
    // Create the ticket number (padded to 4 digits, like 0001, 0002, ...)
    const formattedTicketNumber = String(ticketNumber).padStart(4, '0');
    
    // Prepare the ticket details
    const payload = {
      content: `New Ticket [#${formattedTicketNumber}]: ${message}`,
    };

    try {
      // Send the ticket to the Discord webhook
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Increment the ticket number for the next ticket
        ticketNumber += 1;

        // Send a success response
        return res.status(200).json({ message: `Ticket [#${formattedTicketNumber}] submitted successfully.` });
      } else {
        // Return error if webhook request fails
        return res.status(500).json({ message: 'Failed to send ticket to Discord.' });
      }
    } catch (error) {
      // Catch any error and return a generic error message
      return res.status(500).json({ message: 'Error occurred while submitting ticket.' });
    }
  } else {
    // Handle unsupported request methods
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
