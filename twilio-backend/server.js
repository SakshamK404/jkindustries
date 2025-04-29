const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

app.post('/send-sms', async (req, res) => {
    const { name, mobile } = req.body;
    try {
        const message = await client.messages.create({
            body: `Hello ${name}, thank you for contacting us!`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: `+91${mobile}`   // Assuming Indian numbers
        });
        res.json({ success: true, sid: message.sid });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));
