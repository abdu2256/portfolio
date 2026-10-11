// Vercel Serverless Function — replaces the Railway backend
// Lives at: /api/chat.js (project root, NOT inside src/)
// Vercel auto-detects anything in /api as a serverless endpoint.

const GROQ_MODEL = process.env.GROQ_MODEL || 'openai/gpt-oss-20b';

module.exports = async (req, res) => {
  // Allow only POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_KEY}`
      },
      body: JSON.stringify({ ...req.body, model: GROQ_MODEL })
    });

    const data = await response.json();
    if (!response.ok) {
      console.log('Groq error:', JSON.stringify(data).slice(0, 300));
    }
    res.status(response.status).json(data);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: err.message });
  }
};
