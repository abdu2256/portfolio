const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: "https://abdullahbasit.vercel.app" }));
app.use(express.json());

// Can be overridden from Railway Variables (GROQ_MODEL) without a code push
const GROQ_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

console.log('--- Startup check ---');
console.log('GROQ_KEY at startup:', process.env.GROQ_KEY ? 'Found' : 'NOT FOUND');
console.log('Model:', GROQ_MODEL);
console.log('---------------------');

app.post('/api/chat', async (req, res) => {
  console.log('Request received!');

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_KEY}`
      },
      // Model is forced here so the frontend can never send an outdated name
      body: JSON.stringify({ ...req.body, model: GROQ_MODEL })
    });

    console.log('Groq status:', response.status);
    const data = await response.json();
    if (!response.ok) {
      console.log('Groq error:', JSON.stringify(data).slice(0, 300));
    }
    res.status(response.status).json(data);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));