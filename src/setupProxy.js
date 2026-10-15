const express = require('express');
const { GoogleGenAI } = require('@google/genai');

module.exports = function(app) {
  app.use(express.json());

  app.post('/api/chat', async (req, res) => {
    try {
      require('fs').writeFileSync('/tmp/debug_key.txt', String(process.env.GEMINI_API_KEY));
    } catch (_) {}
    const groqKey = (process.env.GROQ_KEY || '').trim();
    const GROQ_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

    // 1. If user supplied GROQ_KEY, use Groq
    if (groqKey && groqKey.startsWith('gsk_')) {
      try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${groqKey}`
          },
          body: JSON.stringify({ ...req.body, model: GROQ_MODEL })
        });
        if (response.ok) {
          const data = await response.json();
          if (data.choices?.[0]?.message?.content) {
            return res.status(200).json(data);
          }
        }
      } catch (_) {
        // Fall through to Gemini
      }
    }

    // 2. Real-time Gemini LLM (Answers ANY question dynamically!)
    try {
      const ai = new GoogleGenAI();
      const rawMessages = req.body?.messages || [];
      const systemMsg = rawMessages.find(m => m.role === 'system')?.content || '';
      const conversation = rawMessages
        .filter(m => m.role !== 'system')
        .map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content || '' }]
        }));

      if (conversation.length > 0) {
        let geminiRes;
        try {
          geminiRes = await ai.models.generateContent({
            model: 'gemini-3.1-flash-lite',
            contents: conversation,
            config: {
              systemInstruction: systemMsg || undefined,
              maxOutputTokens: 600
            }
          });
        } catch (liteErr) {
          geminiRes = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents: conversation,
            config: {
              systemInstruction: systemMsg || undefined,
              maxOutputTokens: 600
            }
          });
        }

        if (geminiRes && geminiRes.text) {
          return res.json({
            choices: [{
              message: {
                role: 'assistant',
                content: geminiRes.text
              }
            }]
          });
        }
      }
    } catch (geminiOuterErr) {
      try {
        require('fs').writeFileSync('/tmp/debug_chat_err.txt', String(geminiOuterErr && (geminiOuterErr.stack || geminiOuterErr.message || geminiOuterErr)));
      } catch (_) {}
    }

    // 3. Fallback: Resilient In-Memory Knowledge Engine for Abdullah Basit
    const userMsgs = (req.body?.messages || []).filter(m => m.role === 'user');
    const latestQuestion = (userMsgs[userMsgs.length - 1]?.content || '').toLowerCase();

    let reply = "Hello! I am Abdullah's portfolio assistant. He is a Full Stack Developer & AI Engineer based in Islamabad, Pakistan. How can I help you learn more about his work?";

    if (latestQuestion.includes('project') || latestQuestion.includes('work') || latestQuestion.includes('portfolio') || latestQuestion.includes('built')) {
      reply = "Abdullah has built several production-grade systems:\n\n1. **University Management Portal**: CUOnline-style portal with 25+ REST endpoints, MongoDB, Express, and role-based access for Students, Faculty, and Admins.\n2. **AI Interview Coach**: AI-powered mock interview system with speech-to-text, audio analysis, and local Ollama inference.\n3. **RAG PDF Chatbot**: Local document Q&A engine using Python, FastAPI, LangChain, and ChromaDB vector store.\n4. **AI Omnichannel Auto-Reply SaaS**: Dual-model confidence routing between Claude 3.5 and GPT-4o for WhatsApp, Slack, and Email support.\n5. **Hostel & Clinic Management Suite**: Offline-first cross-platform desktop ERP built with Electron.js, React, and encrypted SQLite.\n6. **TalkPool LTE KPI Dashboard**: Telecommunications drive-test analytics visualizer built with React and Recharts.\n7. **Skin Disease Detection (FYP)**: Medical image classification using deep Convolutional Neural Networks (CNN) with TensorFlow/Keras and OpenCV.";
    } else if (latestQuestion.includes('tech') || latestQuestion.includes('stack') || latestQuestion.includes('skill') || latestQuestion.includes('language') || latestQuestion.includes('framework')) {
      reply = "Here is a summary of Abdullah's technical stack:\n\n- **Frontend**: React.js, Tailwind CSS, JavaScript (ES6+), TypeScript, Electron.js, HTML5/CSS3\n- **Backend**: Node.js, Express.js, FastAPI, RESTful APIs, JWT, WebSockets\n- **Python & Data**: Python, TensorFlow, Keras, OpenCV, NumPy, Pandas\n- **AI & LLMs**: LangChain, Ollama (Local Models), ChromaDB (Vector Store), Claude API, OpenAI GPT-4o, RAG Architectures\n- **Databases**: PostgreSQL, MongoDB (Mongoose), SQLite\n- **DevOps**: Git, GitHub, Linux / Bash, Vercel, Postman";
    } else if (latestQuestion.includes('hire') || latestQuestion.includes('available') || latestQuestion.includes('job') || latestQuestion.includes('opportunity') || latestQuestion.includes('interview')) {
      reply = "Yes! Abdullah is actively available for:\n- **Full-time Software Engineering & Full Stack Developer roles**\n- **AI & RAG Systems Engineering positions**\n- **Freelance & Contract AI automation projects**\n\nYou can reach him directly at **khanakabdullah188@gmail.com** or **+92 331 555 2232**.";
    } else if (latestQuestion.includes('contact') || latestQuestion.includes('email') || latestQuestion.includes('phone') || latestQuestion.includes('reach') || latestQuestion.includes('social') || latestQuestion.includes('github') || latestQuestion.includes('linkedin')) {
      reply = "You can contact Abdullah via:\n\n- **Email**: [khanakabdullah188@gmail.com](mailto:khanakabdullah188@gmail.com)\n- **Phone**: +92 331 555 2232\n- **LinkedIn**: [linkedin.com/in/abdullah-khan-ak-4275292a6](https://linkedin.com/in/abdullah-khan-ak-4275292a6)\n- **GitHub**: [github.com/abdu2256](https://github.com/abdu2256)\n- **Location**: Islamabad, Pakistan";
    } else if (latestQuestion.includes('education') || latestQuestion.includes('degree') || latestQuestion.includes('university') || latestQuestion.includes('college') || latestQuestion.includes('gpa') || latestQuestion.includes('comsats')) {
      reply = "Abdullah is a **BS Electrical Engineering (Computer Engineering)** graduate from **COMSATS University Islamabad** (Class of 2026). His academic coursework covers Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, Operating Systems, Machine Learning, and Database Management Systems.";
    } else if (latestQuestion.includes('experience') || latestQuestion.includes('talkpool') || latestQuestion.includes('huawei') || latestQuestion.includes('intern')) {
      reply = "Abdullah completed an engineering internship as an **RF & Drive Test Intern at TalkPool LCC (Huawei Projects)** (April – June 2026). He performed live 4G/LTE drive tests using TEMS Investigation, analyzed signal quality metrics (RSRP, RSRQ, SINR) with Genex Assistant, and studied GSM, WCDMA, and LTE network architectures.";
    }

    return res.json({
      choices: [{
        message: {
          role: 'assistant',
          content: reply
        }
      }]
    });
  });
};
