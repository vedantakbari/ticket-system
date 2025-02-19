// pages/api/webhook.js

import fetch from 'node-fetch';

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1341198386329686068/t2k5YFuTJewjljUYxaOh1YOvGpai5z6Ghibqf0voIaFy8oZ8Aneuyv5pqRWGhkyu4LZ5";
let ticketCounter = 1;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const { username, reason } = req.body;
  if (!username || !reason) {
    return res.status(400).json({ message: "Missing username or reason." });
  }

  const ticketID = `ticket-${String(ticketCounter).padStart(4, '0')}`;
  ticketCounter++;

  const embed = {
    title: "New Support Ticket",
    color: 5814783,
    fields: [
      { name: "Ticket ID", value: ticketID, inline: true },
      { name: "Opened By", value: username, inline: true },
      { name: "Reason", value: reason, inline: false }
    ],
    timestamp: new Date().toISOString(),
  };

  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] })
    });

    res.status(200).json({ message: "Ticket created successfully.", ticketID });
  } catch (error) {
    res.status(500).json({ message: "Failed to send webhook.", error: error.message });
  }
}
