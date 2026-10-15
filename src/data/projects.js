export const projects = [
  {
    id: 1,
    title: "University Management Portal",
    tagline: "Enterprise academic portal with multi-role dashboards and 25+ REST APIs",
    category: "Full Stack",
    featured: true,
    accent: "#6366f1",
    github: "https://github.com/abdu2256/University-Portal",
    live: null,
    metrics: "25+ REST endpoints · 3 Role Dashboards",
    summary: "A CUOnline-inspired university management portal engineered to streamline academic administration, course registration, grading, and attendance for students, faculty, and administrators.",
    problem: "University departments suffered from fragmented legacy tools for course allocations, grade submissions, and attendance tracking, creating communication lags and administrative errors.",
    audience: "University students, academic faculty instructors, department heads, and campus registrars.",
    contribution: "Designed the complete MongoDB schema, built 25+ authenticated RESTful endpoints using Express.js and JWT, implemented role-based access control (RBAC), and designed responsive dashboard views with real-time grade calculations.",
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "Mongoose", "Tailwind CSS"],
    features: [
      "Role-Based Access Control (RBAC) strictly separating Student, Faculty, and Admin privileges",
      "Dynamic course enrollment system with prerequisite validation and capacity limits",
      "Faculty grading portal with automated GPA and CGPA recalculation",
      "Real-time attendance tracking with semester eligibility thresholds",
      "Secure JWT authentication with httpOnly cookie storage and session validation"
    ],
    uiType: "dashboard",
    stats: [
      { label: "REST Endpoints", value: "25+" },
      { label: "User Roles", value: "3" },
      { label: "Data Architecture", value: "Normalized" }
    ]
  },
  {
    id: 2,
    title: "AI Interview Coach",
    tagline: "Voice-enabled interview practice platform powered by local Ollama LLMs",
    category: "AI & LLM",
    featured: true,
    accent: "#8b5cf6",
    github: "https://github.com/abdu2256/ai-interview-coach-backend",
    live: null,
    metrics: "Zero API cost · Voice In/Out",
    summary: "Full-stack AI-powered interview practice platform. Candidates upload their CV and target Job Description; the system parses credentials, generates customized technical questions, and conducts realistic voice interviews.",
    problem: "Job seekers lack realistic, low-pressure mock interview environments tailored to their exact resumes and targeted job requirements without expensive human coaches.",
    audience: "Software engineering students, bootcamp graduates, and developers preparing for technical screenings.",
    contribution: "Architected the backend engine in Node.js and PostgreSQL, integrated local Ollama model pipelines for privacy and zero cloud cost, hooked up browser Web Speech API for bi-directional audio, and formulated scoring rubrics.",
    tech: ["Node.js", "PostgreSQL", "React.js", "Ollama", "JWT", "Web Speech API", "Tailwind CSS"],
    features: [
      "Automated resume and job description text parsing with semantic extraction",
      "Context-aware dynamic technical and behavioral question generation",
      "Bi-directional voice interface with real-time speech recognition and text-to-speech feedback",
      "Multi-metric scoring rubric analyzing clarity, technical depth, and keyword relevance",
      "Session history and progression analytics stored in PostgreSQL"
    ],
    uiType: "ai-coach",
    stats: [
      { label: "Inference Engine", value: "Ollama Local" },
      { label: "Audio Latency", value: "<400ms" },
      { label: "Database", value: "PostgreSQL" }
    ]
  },
  {
    id: 3,
    title: "RAG PDF Chatbot",
    tagline: "Document Q&A engine with semantic chunking and ChromaDB vector search",
    category: "AI & LLM",
    featured: true,
    accent: "#06b6d4",
    github: "https://github.com/abdu2256/rag-pdf-chatbot",
    live: null,
    metrics: "100% Private · ChromaDB Embeddings",
    summary: "Full-stack Retrieval-Augmented Generation (RAG) system that allows users to upload documents and interrogate them in natural language with precise source page citations.",
    problem: "Reading and extracting accurate insights from dense technical manuals, academic papers, and legal PDFs is tedious, while standard LLMs suffer from hallucinations without grounded source retrieval.",
    audience: "Researchers, university students, and legal/technical analysts analyzing large reference documents.",
    contribution: "Implemented the Python FastAPI microservice, LangChain RAG pipeline with recursive character text chunking, local Ollama embeddings, and ChromaDB vector index; built clean React query interface.",
    tech: ["Python", "FastAPI", "LangChain", "ChromaDB", "Ollama", "React.js", "Tailwind CSS"],
    features: [
      "Smart document ingestion with recursive semantic text splitting and overlap",
      "Local vector embeddings generated and indexed in ChromaDB vector database",
      "Context-grounded prompt engineering returning exact page references and cited quotes",
      "Zero API token costs by utilizing locally hosted Ollama embedding and generation models",
      "FastAPI asynchronous streaming endpoints hooked into a reactive React frontend"
    ],
    uiType: "chat-rag",
    stats: [
      { label: "Vector Store", value: "ChromaDB" },
      { label: "Framework", value: "LangChain" },
      { label: "Backend API", value: "FastAPI" }
    ]
  },
  {
    id: 4,
    title: "AI Omnichannel Auto-Reply SaaS",
    tagline: "Confidence-based autonomous reply routing across Email, WhatsApp & Slack",
    category: "AI & LLM",
    featured: true,
    accent: "#10b981",
    github: "https://github.com/abdu2256/autoreply-ai-saas",
    live: null,
    metrics: "Multi-Model Arbitration · Twilio & Webhooks",
    summary: "Production-grade SaaS backend orchestrating AI customer inquiries across Email, WhatsApp, and Slack using dual LLM fallback arbitration between Claude and GPT-4o.",
    problem: "Support teams struggle with fragmented inboxes and delayed responses, while single-model AI agents often fail unpredictably on edge cases without safety confidence tiers.",
    audience: "SaaS founders, customer operations teams, and e-commerce support managers.",
    contribution: "Constructed the event-driven webhook pipeline, implemented Twilio WhatsApp & Slack integrations, engineered the two-tier LLM evaluation loop with confidence scoring, and built the analytics dashboard.",
    tech: ["Node.js", "Express.js", "MongoDB", "Claude API", "GPT-4o", "Twilio", "Slack Webhooks"],
    features: [
      "Unified webhook gateway receiving messages from Email, WhatsApp, and Slack channels",
      "Dual-model routing engine: uses fast models for triage and complex reasoning models for synthesis",
      "Human-in-the-loop escalation trigger when model confidence falls below 85%",
      "Auditable log history with reply latency and sentiment tracking in MongoDB",
      "Secure credential vault for client API and webhook secrets"
    ],
    uiType: "saas",
    stats: [
      { label: "Channels", value: "WhatsApp, Slack, Email" },
      { label: "LLM Providers", value: "Claude + OpenAI" },
      { label: "Escalation", value: "Automated" }
    ]
  },
  {
    id: 5,
    title: "Hostel & Clinic Management Suite",
    tagline: "Offline-first desktop & management software for resident and patient operations",
    category: "Systems & Desktop",
    featured: false,
    accent: "#f59e0b",
    github: "https://github.com/abdu2256",
    live: null,
    metrics: "Offline-first · SQLite Local Store",
    summary: "Specialized desktop management application designed for campus hostels and medical clinics, ensuring 100% availability even during local internet disruptions.",
    problem: "Campus facilities and regional clinics frequently experience network outages, making cloud-only ERP systems unreliable for critical patient records and room allocations.",
    audience: "Campus hostel wardens, facility administrators, clinic receptionists, and general practitioners.",
    contribution: "Engineered the desktop packaging in Electron.js, designed local SQLite relational schema with automated data migrations, built inventory and appointment scheduling modules, and printable invoice generation.",
    tech: ["Electron.js", "Node.js", "React.js", "SQLite", "JWT", "Tailwind CSS"],
    features: [
      "Offline-first architecture with localized SQLite database requiring zero internet connectivity",
      "Room inventory, bed allocation matrix, and resident check-in/out records",
      "Patient medical history tracking with encrypted diagnosis and prescription logs",
      "Automated billing generator with exportable receipt generation and daily reconciliations",
      "Role-based local operator permissions and password hashing"
    ],
    uiType: "desktop",
    stats: [
      { label: "Platform", value: "Cross-Platform Electron" },
      { label: "Persistence", value: "SQLite Relational" },
      { label: "Availability", value: "100% Offline" }
    ]
  },
  {
    id: 6,
    title: "TalkPool Telecom LTE KPI Dashboard",
    tagline: "Interactive 4G/LTE cellular network quality analytics and coverage visualizer",
    category: "Full Stack",
    featured: false,
    accent: "#3b82f6",
    github: "https://github.com/abdu2256/Talkpool-KPI-Dashboard-",
    live: null,
    metrics: "LTE Metrics · Interactive Visualizations",
    summary: "Analytics visualization suite built to process and inspect telecommunication drive-test metrics (RSRP, RSRQ, SINR) for cellular optimization engineers.",
    problem: "Field engineers had to navigate bulky spreadsheets to pinpoint degraded cell towers, causing delays in RF optimization reports.",
    audience: "RF optimization engineers, telecommunications managers, and field technicians.",
    contribution: "Synthesized domain insights gained during TalkPool internship to design intuitive Recharts metric charts, CSV data ingest pipelines, and threshold-based alarm indicators.",
    tech: ["React.js", "Recharts", "Node.js", "MongoDB", "REST API", "Tailwind CSS"],
    features: [
      "Dynamic filtering by frequency band, cell tower ID, and signal quality brackets",
      "Interactive time-series charts visualizing RSRP, RSRQ, and SINR fluctuations",
      "Automated degradation alerts highlighting dropped call pockets and coverage gaps",
      "Exportable summary reports tailored for field optimization technicians"
    ],
    uiType: "telecom",
    stats: [
      { label: "Key Metrics", value: "RSRP, RSRQ, SINR" },
      { label: "Visualization", value: "Recharts Engine" },
      { label: "Domain", value: "4G/LTE Telecom" }
    ]
  },
  {
    id: 7,
    title: "Skin Disease Detection FYP",
    tagline: "Deep Convolutional Neural Network classifier for dermatological medical imaging",
    category: "AI & ML",
    featured: false,
    accent: "#ef4444",
    github: "https://github.com/abdu2256",
    live: null,
    metrics: "Deep CNN · Computer Vision",
    summary: "COMSATS Final Year Project (FYP) implementing deep learning computer vision to assist in early-stage dermatological condition diagnosis from clinical photos.",
    problem: "Dermatologist shortages cause critical delays in diagnosing skin conditions in underserved rural healthcare clinics.",
    audience: "Healthcare clinicians, medical students, and telemedicine triage providers.",
    contribution: "Preprocessed multi-class medical image datasets with OpenCV (histogram equalization, data augmentation), fine-tuned convolutional neural network architectures in TensorFlow/Keras, and validated test performance.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Deep Learning"],
    features: [
      "Automated image normalization, hair removal filters, and contrast enhancement using OpenCV",
      "Multi-class skin lesion classification with transfer learning CNN backbones",
      "Confusion matrix and ROC curve evaluation metrics against test clinical datasets",
      "Modular Python inference pipeline ready for microservice deployment"
    ],
    uiType: "vision",
    stats: [
      { label: "ML Framework", value: "TensorFlow & Keras" },
      { label: "Vision Processing", value: "OpenCV" },
      { label: "Classification", value: "Multi-Class CNN" }
    ]
  }
];

export const skillCategories = [
  {
    title: "Frontend Engineering",
    description: "Responsive, accessible, and high-performance user interfaces",
    skills: [
      { name: "React.js", icon: "SiReact", color: "#61DAFB", level: "Advanced" },
      { name: "JavaScript (ES6+)", icon: "SiJavascript", color: "#F7DF1E", level: "Advanced" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4", level: "Advanced" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178C6", level: "Intermediate" },
      { name: "Electron.js", icon: "SiElectron", color: "#47848F", level: "Intermediate" },
      { name: "HTML5 & CSS3", icon: "SiHtml5", color: "#E34F26", level: "Advanced" }
    ]
  },
  {
    title: "Backend & Systems",
    description: "Scalable server architectures, secure APIs, and streaming backends",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", color: "#339933", level: "Advanced" },
      { name: "Express.js", icon: "SiExpress", color: "#FFFFFF", level: "Advanced" },
      { name: "FastAPI", icon: "SiFastapi", color: "#009688", level: "Intermediate" },
      { name: "RESTful APIs", icon: "TbApi", color: "#6366F1", level: "Advanced" },
      { name: "JWT & Security", icon: "SiJsonwebtokens", color: "#D63AFF", level: "Advanced" },
      { name: "WebSockets", icon: "TbNetwork", color: "#A855F7", level: "Intermediate" }
    ]
  },
  {
    title: "Python & Data Science",
    description: "Numerical computing, data pipelines, and computer vision models",
    skills: [
      { name: "Python", icon: "SiPython", color: "#3776AB", level: "Advanced" },
      { name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00", level: "Intermediate" },
      { name: "Keras", icon: "SiKeras", color: "#D00000", level: "Intermediate" },
      { name: "OpenCV", icon: "SiOpencv", color: "#5C3EE8", level: "Intermediate" },
      { name: "NumPy", icon: "SiNumpy", color: "#013243", level: "Intermediate" },
      { name: "Pandas", icon: "SiPandas", color: "#150458", level: "Intermediate" }
    ]
  },
  {
    title: "AI, LLMs & RAG",
    description: "Generative AI engineering, local models, and agent orchestration",
    skills: [
      { name: "LangChain", icon: "TbRobot", color: "#10B981", level: "Advanced" },
      { name: "Ollama (Local LLM)", icon: "TbBrain", color: "#EC4899", level: "Advanced" },
      { name: "ChromaDB (Vectors)", icon: "TbDatabase", color: "#F59E0B", level: "Advanced" },
      { name: "Claude API", icon: "SiAnthropic", color: "#D97706", level: "Advanced" },
      { name: "OpenAI GPT-4o", icon: "SiOpenai", color: "#10A37F", level: "Advanced" },
      { name: "RAG Systems", icon: "TbCpu", color: "#6366F1", level: "Advanced" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational, document, and vector database persistence",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1", level: "Intermediate" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248", level: "Advanced" },
      { name: "SQLite", icon: "SiSqlite", color: "#003B57", level: "Intermediate" },
      { name: "Mongoose ODM", icon: "SiMongodb", color: "#880000", level: "Advanced" }
    ]
  },
  {
    title: "DevOps & Engineering Tools",
    description: "Version control, containerization, and cloud deployment",
    skills: [
      { name: "Git", icon: "SiGit", color: "#F05032", level: "Advanced" },
      { name: "GitHub", icon: "SiGithub", color: "#FFFFFF", level: "Advanced" },
      { name: "Linux / Bash", icon: "SiLinux", color: "#FCC624", level: "Intermediate" },
      { name: "Vercel", icon: "SiVercel", color: "#FFFFFF", level: "Advanced" },
      { name: "Postman", icon: "SiPostman", color: "#FF6C37", level: "Advanced" }
    ]
  }
];

export const experienceData = [
  {
    role: "RF & Drive Test Intern",
    company: "TalkPool LCC (Huawei Projects)",
    location: "Islamabad, Pakistan",
    period: "April 2026 – June 2026",
    type: "Internship",
    description: "Conducted RF drive testing and cellular network optimization across Huawei LTE infrastructure.",
    achievements: [
      "Executed live RF drive testing with TEMS Investigation to record signal quality metrics (RSRP, RSRQ, SINR).",
      "Analyzed field test datasets using Genex Assistant; identified cellular coverage holes and recommended azimuth adjustments.",
      "Researched multi-operator network sharing architectures (MORAN, MOCN) across GSM, WCDMA, and LTE deployments.",
      "Collaborated with telecom optimization engineers to prepare field diagnostic and KPI coverage reports."
    ],
    tools: ["TEMS Investigation", "Genex Assistant", "LTE / 4G", "RF Optimization", "Drive Testing"]
  }
];

export const educationData = [
  {
    degree: "BS Electrical Engineering (Computer Engineering)",
    institution: "COMSATS University Islamabad",
    location: "Islamabad, Pakistan",
    period: "2022 – 2026",
    status: "Graduate (2026)",
    highlights: [
      "Final Year Project: Deep Learning CNN-based Multi-Class Skin Lesion Classification with TensorFlow & OpenCV.",
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Computer Architecture, Database Systems, Operating Systems, Machine Learning.",
      "Extensive independent software development: built 7+ production-grade web, AI, and desktop systems throughout degree."
    ]
  }
];