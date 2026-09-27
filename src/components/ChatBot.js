import { useState, useRef, useEffect } from 'react';

const SYSTEM_CONTEXT = `You are Abdullah Basit's portfolio assistant. Answer questions about Abdullah professionally and concisely.

About Abdullah:
- BS Electrical Engineering (Computer Engineering) graduate from COMSATS University Islamabad (2026)
- Full Stack Developer and AI Engineer based in Islamabad, Pakistan
- Contact: khanakabdullah188@gmail.com | +92 331 555 2232
- LinkedIn: linkedin.com/in/abdullah-khan-ak-4275292a6
- GitHub: github.com/abdu2256
- Open to Software Engineering, Full-Stack, and AI Engineering roles

Projects:
1. AI Interview Coach - Node.js, PostgreSQL, React, Ollama, JWT, Web Speech API, Text-to-Speech
2. AI Omnichannel Auto-Reply System - Node.js, React, MongoDB, Claude API, GPT-4o, Twilio
3. RAG PDF Chatbot - Python, LangChain, ChromaDB, Ollama, FastAPI, React
4. Clinic Management System - Electron.js, Node.js, React, SQLite, JWT
5. University Management Portal - Node.js, Express, MongoDB, React, JWT (25+ REST endpoints)
6. TalkPool KPI Dashboard - React, Recharts, Node.js, MongoDB
7. AI Assistant Chatbot - React, Node.js, MongoDB, Claude API, GPT-4o, WebSocket
8. Skin Disease Detection (FYP) - Python, TensorFlow, Keras, OpenCV, Deep Learning

Skills: MERN Stack, React, Node.js, Python, PostgreSQL, MongoDB, SQLite, LangChain, Ollama, ChromaDB, TensorFlow, JWT, REST APIs, WebSocket, Electron.js

Experience: RF & Drive Test Intern at TalkPool LCC (Huawei Projects) - April to June 2026

Always be helpful, professional and encourage visitors to hire or contact Abdullah.`;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! 👋 I'm Abdullah's AI assistant. Ask me anything about his skills, projects, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    console.log('Sending request to server...');
    if (!input.trim() || loading) return;

    const userMsg = { role: 'user', content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
    const response = await fetch('https://portfolio-production-7aad.up.railway.app/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
   model: "llama-3.1-8b-instant",
    max_tokens: 300,
    messages: [
      { role: 'system', content: SYSTEM_CONTEXT },
      ...newMessages.map(m => ({ role: m.role, content: m.content }))
    ]
  })
});

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't respond right now!";
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      
    } catch (err) { console.error('Fetch error:', err);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting. Please email Abdullah directly at khanakabdullah188@gmail.com!" }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed', bottom: '30px', right: '30px',
          width: '60px', height: '60px',
          background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          border: 'none', borderRadius: '50%',
          cursor: 'pointer', zIndex: 2000,
          boxShadow: '0 8px 25px rgba(99,102,241,0.5)',
          fontSize: '24px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {open ? '✕' : '💬'}
      </button>

      {/* Pulse ring */}
      {!open && (
        <div style={{
          position: 'fixed', bottom: '25px', right: '25px',
          width: '70px', height: '70px',
          borderRadius: '50%',
          border: '2px solid rgba(99,102,241,0.4)',
          zIndex: 1999,
          animation: 'pulse-ring 2s infinite'
        }} />
      )}

      {/* Chat Window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: '100px', right: '30px',
          width: '360px', height: '500px',
          background: '#0f0f1a',
          border: '1px solid rgba(99,102,241,0.3)',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          zIndex: 2000,
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          animation: 'slideUp 0.3s ease'
        }}>
          {/* Header */}
          <div style={{
            padding: '16px 20px',
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            display: 'flex', alignItems: 'center', gap: '10px'
          }}>
            <div style={{
              width: '38px', height: '38px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '18px'
            }}>🤖</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: 'white', fontWeight: '700', fontSize: '14px' }}>
                Abdullah's AI Assistant
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px' }}>
                🟢 Online — Powered by Groq AI
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none', borderRadius: '50%',
              width: '28px', height: '28px',
              color: 'white', cursor: 'pointer',
              fontSize: '14px', display: 'flex',
              alignItems: 'center', justifyContent: 'center'
            }}>✕</button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: 'auto',
            padding: '16px', display: 'flex',
            flexDirection: 'column', gap: '10px'
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                alignItems: 'flex-end', gap: '8px'
              }}>
                {msg.role === 'assistant' && (
                  <div style={{
                    width: '24px', height: '24px',
                    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                    borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '12px'
                  }}>🤖</div>
                )}
                <div style={{
                  maxWidth: '78%',
                  padding: '10px 14px',
                  borderRadius: msg.role === 'user'
                    ? '16px 16px 4px 16px'
                    : '16px 16px 16px 4px',
                  background: msg.role === 'user'
                    ? 'linear-gradient(135deg, #6366f1, #a855f7)'
                    : 'rgba(255,255,255,0.06)',
                  border: msg.role === 'assistant'
                    ? '1px solid rgba(255,255,255,0.08)'
                    : 'none',
                  color: 'white', fontSize: '13px', lineHeight: '1.5'
                }}>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                <div style={{
                  width: '24px', height: '24px',
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '12px'
                }}>🤖</div>
                <div style={{
                  padding: '10px 16px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px 16px 16px 4px',
                  display: 'flex', gap: '4px', alignItems: 'center'
                }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      width: '6px', height: '6px',
                      background: '#818cf8', borderRadius: '50%',
                      animation: `bounce 1.2s ${i * 0.2}s infinite`
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div style={{
              padding: '0 12px 8px',
              display: 'flex', gap: '6px', flexWrap: 'wrap'
            }}>
              {[
                '🚀 His projects?',
                '💼 Available for hire?',
                '🛠️ Tech skills?',
                '📧 Contact info?'
              ].map(q => (
                <button key={q} onClick={() => {
                  setInput(q.split(' ').slice(1).join(' '));
                }} style={{
                  padding: '5px 10px',
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.3)',
                  borderRadius: '20px', color: '#818cf8',
                  fontSize: '11px', cursor: 'pointer',
                  fontFamily: 'inherit'
                }}>{q}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: '12px 16px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', gap: '8px'
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about Abdullah..."
              style={{
                flex: 1, padding: '10px 14px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px', color: 'white',
                fontSize: '13px', outline: 'none',
                fontFamily: 'inherit'
              }}
            />
            <button onClick={sendMessage} disabled={loading} style={{
              padding: '10px 16px',
              background: loading
                ? 'rgba(99,102,241,0.3)'
                : 'linear-gradient(135deg, #6366f1, #a855f7)',
              border: 'none', borderRadius: '10px',
              color: 'white', cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '16px', transition: 'all 0.2s'
            }}>→</button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}