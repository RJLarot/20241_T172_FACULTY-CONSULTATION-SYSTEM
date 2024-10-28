// server.js (or wherever your server logic is)
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

const RECAPTCHA_SECRET_KEY = 'YOUR_RECAPTCHA_SECRET_KEY';

app.post('/api/student/login', async (req, res) => {
  const { email, password, captchaToken } = req.body;

  // Verify reCAPTCHA token with Google
  const captchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `secret=${RECAPTCHA_SECRET_KEY}&response=${captchaToken}`
  });

  const captchaResult = await captchaResponse.json();

  if (!captchaResult.success) {
    return res.status(400).json({ error: "Invalid CAPTCHA" });
  }

  // Your login logic here
  // Check email and password, return success/failure response

  res.json({ message: "Login successful" });
});

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
