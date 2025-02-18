import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    // Your Discord Webhook URL
    const webhookURL = 'https://discord.com/api/webhooks/1341198386329686068/t2k5YFuTJewjljUYxaOh1YOvGpai5z6Ghibqf0voIaFy8oZ8Aneuyv5pqRWGhkyu4LZ5';

    const payload = {
      content: `New Ticket: ${message}`,
    };

    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        return res.status(200).json({ message: 'Ticket submitted successfully.' });
      } else {
        return res.status(500).json({ message: 'Failed to send ticket to Discord.' });
      }
    } catch (error) {
      console.error('Error sending webhook:', error);
      return res.status(500).json({ message: 'Error occurred.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
