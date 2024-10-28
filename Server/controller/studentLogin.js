// client/src/components/StudentLogin.js

import React, { useState } from 'react';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/student/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, captchaToken }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in.");
    }
  };

  // Function to handle reCAPTCHA verification
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <div>
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* reCAPTCHA widget */}
        <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key" data-callback="handleCaptchaChange"></div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default StudentLogin;
