import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FiMessageSquare, FiX, FiSend, FiCpu } from 'react-icons/fi';

const SYSTEM_CONTEXT = `You are Abdullah Basit's portfolio AI assistant. Answer questions about Abdullah professionally and concisely.

About Abdullah:
- BS Electrical Engineering (Computer Engineering) graduate from COMSATS University Islamabad (2026)
- Full Stack Developer and AI Systems Engineer based in Islamabad, Pakistan
- Contact: khanakabdullah188@gmail.com | +92 331 555 2232
- LinkedIn: linkedin.com/in/abdullah-khan-ak-4275292a6
- GitHub: github.com/abdu2256
- Open to Software Engineering, Full-Stack, and AI Engineering roles

Key Projects:
1. University Management Portal - Node.js, Express, MongoDB, React, 25+ REST endpoints, RBAC
2. AI Interview Coach - Node.js, PostgreSQL, React, Ollama local inference, Web Speech API
3. RAG PDF Chatbot - Python, FastAPI, LangChain, ChromaDB vector store, Ollama
4. AI Omnichannel Auto-Reply System - Node.js, MongoDB, Claude + GPT-4o arbitration, Twilio, Slack
5. Hostel & Clinic Management Suite - Electron.js, Node.js, React, SQLite, offline-first
6. TalkPool LTE KPI Dashboard - React, Recharts, Node.js, MongoDB, LTE drive-test analytics
7. Skin Disease Detection (FYP) - Python, TensorFlow, Keras, OpenCV deep learning CNN

Skills: React, Node.js, Python, Express, FastAPI, PostgreSQL, MongoDB, SQLite, LangChain, Ollama, ChromaDB, TensorFlow, JWT, REST APIs, Electron.js, Tailwind CSS
Experience: RF & Drive Test Intern at TalkPool LCC (Huawei Projects) - April to June 2026

Always be concise, professional, and highlight his verified architectural contributions.`;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I am Abdullah's AI portfolio assistant. Feel free to ask about his engineering projects, technical stack, or availability!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const sendMessage = async (textToSend) => {
    const userText = (textToSend || input).trim();
    if (!userText || loading) return;

    const userMsg = { role: 'user', content: userText };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          max_tokens: 350,
          messages: [
            { role: 'system', content: SYSTEM_CONTEXT },
            ...newMessages.map((m) => ({ role: m.role, content: m.content }))
          ]
        })
      });

      const data = await response.json();
      const reply =
        data.choices?.[0]?.message?.content ||
        "I'm here to help! Abdullah is a Full Stack Developer & AI Engineer based in Islamabad. Please reach him at khanakabdullah188@gmail.com.";
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error('Fetch error:', err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I'm operating in offline preview mode right now. Abdullah is a COMSATS graduate (BS EE 2026) specializing in Full-Stack and AI Engineering. Feel free to contact him at khanakabdullah188@gmail.com!"
        }
      ]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating Launcher Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/40 border border-indigo-400/30 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center"
        aria-label="Toggle AI Assistant"
      >
        {open ? <FiX size={22} /> : <FiMessageSquare size={22} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] h-[520px] max-h-[80vh] rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl flex flex-col overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="p-3.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                <FiCpu size={16} />
              </div>
              <div>
                <div className="text-xs font-bold text-white">
                  Abdullah's AI Assistant
                </div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Assistant
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <FiX size={16} />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs leading-relaxed">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 items-start ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-md bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <FiCpu size={12} />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[82%] ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-sm'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-tl-sm'
                  }`}
                >
                  {msg.role === 'assistant' ? (
                    <div className="prose prose-invert prose-xs max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2 items-center text-zinc-400 text-xs">
                <div className="w-6 h-6 rounded-md bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                  <FiCpu size={12} />
                </div>
                <div className="flex gap-1 items-center bg-zinc-900 p-2 rounded-xl border border-zinc-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          {messages.length <= 2 && (
            <div className="px-3 pb-2 flex flex-wrap gap-1.5">
              {[
                'Key Projects & Architecture?',
                'Are you open for hire?',
                'Tech stack summary?'
              ].map((query) => (
                <button
                  key={query}
                  onClick={() => sendMessage(query)}
                  className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[11px] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  {query}
                </button>
              ))}
            </div>
          )}

          {/* Input Row */}
          <div className="p-3 bg-zinc-900 border-t border-zinc-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about Abdullah's skills..."
              className="flex-1 px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-indigo-500 text-xs text-white outline-none"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <FiSend size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}