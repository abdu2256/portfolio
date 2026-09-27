const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: "https://portfolio-tawny-eight-66.vercel.app" }));
app.use(express.json());

console.log('--- Startup check ---');
console.log('GROQ_KEY at startup:', process.env.GROQ_KEY ? 'Found' : 'NOT FOUND');
console.log('---------------------');

app.post('/api/chat', async (req, res) => {
  console.log('Request received!');
  console.log('GROQ KEY:', process.env.GROQ_KEY ? 'Found' : 'NOT FOUND');

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_KEY}`
      },
      body: JSON.stringify(req.body)
    });

    console.log('Groq status:', response.status);
    const data = await response.json();
    console.log('Groq response:', JSON.stringify(data).slice(0, 300));
    res.json(data);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));