const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Simple in-memory rate limiter (per number)
const rateLimitWindowMs = 60 * 1000; // 1 minute
const maxPerWindow = 3;
const requestCounts = new Map();

function isRateLimited(key) {
  const now = Date.now();
  const entry = requestCounts.get(key) || [];
  const recent = entry.filter(ts => now - ts < rateLimitWindowMs);
  recent.push(now);
  requestCounts.set(key, recent);
  return recent.length > maxPerWindow;
}

function normalizeMobile(mobile) {
  if (!mobile) return null;
  // Remove non-digits
  const digits = mobile.replace(/\D/g, '');
  if (digits.length === 10) return `+91${digits}`; // assume India if 10 digits provided
  if (digits.startsWith('91') && digits.length === 12) return `+${digits}`;
  if (digits.startsWith('+' )) return mobile; // already formatted
  if (digits.length >= 11 && digits.startsWith('1')) return `+${digits}`; // e.g. US
  return `+${digits}`; // best-effort
}

if (!process.env.TWILIO_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_PHONE_NUMBER) {
  console.warn('TWILIO_SID, TWILIO_AUTH_TOKEN or TWILIO_PHONE_NUMBER not set in environment. SMS will fail until configured.');
}

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} Body:`, req.body);
  next();
});

app.get('/health', (req, res) => res.json({ ok: true }));

app.post('/send-sms', async (req, res) => {
    const { name, mobile } = req.body || {};
    console.log('Received /send-sms:', { name, mobile });

    if (!name || !mobile) {
        return res.status(400).json({ success: false, error: 'Missing required fields: name and mobile' });
    }

    const to = normalizeMobile(mobile);
    if (!to) return res.status(400).json({ success: false, error: 'Invalid mobile number' });

    // rate limit per target number
    if (isRateLimited(to)) {
      return res.status(429).json({ success: false, error: 'Too many requests for this number. Please try again later.' });
    }

    try {
        const message = await client.messages.create({
            body: `Hello ${name}, thank you for contacting JK Industries!We will get back to you shortly.`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to
        });
        console.log('Twilio message sent:', message);
        res.json({ success: true, sid: message.sid });
    } catch (error) {
        console.error('Twilio error:', error);
        res.status(500).json({ success: false, error: error && error.message ? error.message : 'Failed to send SMS', details: error });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
