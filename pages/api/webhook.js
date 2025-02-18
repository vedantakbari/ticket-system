import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const { message } = req.body;
  const webhookURL = 'https://discord.com/api/webhooks/1341198386329686068/t2k5YFuTJewjljUYxaOh1YOvGpai5z6Ghibqf0voIaFy8oZ8Aneuyv5pqRWGhkyu4LZ5'; // Replace this!

  if (!message) {
    return res.status(400).json({ message: 'Message cannot be empty.' });
  }

  const payload = { content: `🎟️ New Ticket: ${message}` };

  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.statusText}`);
    }

    return res.status(200).json({ message: '✅ Ticket submitted successfully!' });
  } catch (error) {
    console.error('Error sending to Discord:', error);
    return res.status(500).json({ message: '❌ Failed to send ticket to Discord.' });
  }
}
