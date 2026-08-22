export const projects = [
  {
    id: 1,
    title: "AI Interview Coach",
    description: "Full-stack AI-powered interview practice platform. Upload CV + Job Description → AI generates personalized questions → Voice answers → Detailed feedback with scores.",
    tech: ["Node.js", "PostgreSQL", "React.js", "Ollama", "JWT", "Web Speech API"],
    color: "#6366f1",
    emoji: "🎯",
    github: "https://github.com/abdu2256/ai-interview-coach-backend",
    live: null,
    featured: true
  },
  {
    id: 2,
    title: "AI Omnichannel Auto-Reply System",
    description: "Production-grade SaaS platform that routes AI-generated replies across Email, WhatsApp, and Slack using dual LLM providers (Claude + GPT-4o) with confidence-based routing.",
    tech: ["Node.js", "React.js", "MongoDB", "Claude API", "GPT-4o", "Twilio", "JWT"],
    color: "#a855f7",
    emoji: "🤖",
    github: "https://github.com/abdu2256",
    live: null,
    featured: true
  },
  {
    id: 3,
    title: "RAG PDF Chatbot",
    description: "Full-stack RAG chatbot that answers questions from any uploaded PDF using a local LLM. Zero API cost — runs completely on Ollama.",
    tech: ["Python", "LangChain", "ChromaDB", "Ollama", "FastAPI", "React.js"],
    color: "#ec4899",
    emoji: "📄",
    github: "https://github.com/abdu2256/rag-pdf-chatbot",
    live: null,
    featured: true
  },
  {
    id: 4,
    title: "Clinic Management System",
    description: "Cross-platform offline-first desktop app for clinic operations — appointments, billing, patient management, and medical history.",
    tech: ["Electron.js", "Node.js", "React.js", "SQLite", "JWT"],
    color: "#10b981",
    emoji: "🏥",
    github: "https://github.com/abdu2256",
    live: null,
    featured: false
  },
  {
    id: 5,
    title: "University Management Portal",
    description: "Full-stack university portal (CUOnline style) with role-based dashboards for Student, Faculty, and Admin. 25+ REST endpoints.",
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "Mongoose"],
    color: "#f59e0b",
    emoji: "🎓",
    github: "https://github.com/abdu2256",
    live: null,
    featured: false
  },
  {
    id: 6,
    title: "TalkPool KPI Dashboard",
    description: "Interactive telecom KPI analytics dashboard visualizing LTE network metrics with real-time charts, filtering, and exportable reports.",
    tech: ["React.js", "Recharts", "Node.js", "MongoDB", "REST API"],
    color: "#06b6d4",
    emoji: "📊",
    github: "https://github.com/abdu2256",
    live: null,
    featured: false
  },
  {
    id: 7,
    title: "AI Assistant Chatbot",
    description: "Full-stack AI chatbot with real-time streaming, dynamic switching between Claude and GPT-4o, persistent history, and analytics dashboard.",
    tech: ["React.js", "Node.js", "MongoDB", "Claude API", "GPT-4o", "WebSocket"],
    color: "#8b5cf6",
    emoji: "💬",
    github: "https://github.com/abdu2256",
    live: null,
    featured: false
  },
  {
    id: 8,
    title: "Skin Disease Detection (FYP)",
    description: "CNN-based multi-class classifier for skin disease detection from medical images using TensorFlow and Keras with image preprocessing pipeline.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Deep Learning"],
    color: "#ef4444",
    emoji: "🧠",
    github: "https://github.com/abdu2256",
    live: null,
    featured: false
  },
];

export const skills = [
  { category: "Frontend", items: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Electron.js"] },
  { category: "Backend", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT", "WebSocket"] },
  { category: "AI / ML", items: ["LangChain", "Ollama", "Claude API", "GPT-4o API", "TensorFlow", "ChromaDB"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "SQLite", "Mongoose"] },
  { category: "DevOps", items: ["Git", "GitHub", "Vercel", "Render", "CI/CD", "Linux"] },
  { category: "Other", items: ["Python", "Prompt Engineering", "RAG Systems", "LLM Integration"] },
];