import React from 'react';
import {
  FiFileText,
  FiCpu,
  FiActivity,
  FiShield
} from 'react-icons/fi';

export default function ProjectMockup({ type, accent = "#6366f1" }) {
  if (type === 'dashboard') {
    return (
      <div className="w-full h-44 rounded-xl bg-zinc-950/80 border border-zinc-800/80 p-3 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none">
        {/* Browser Mockup Top Bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
          <div className="flex gap-1.5 items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-zinc-500 text-[10px]">portal.university.edu/admin</span>
          <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">RBAC Active</span>
        </div>

        {/* Mock UI Dashboard Grid */}
        <div className="grid grid-cols-3 gap-2 my-1">
          <div className="bg-zinc-900/90 rounded border border-zinc-800 p-1.5">
            <div className="text-zinc-500 text-[9px]">Student Enrollments</div>
            <div className="text-white font-bold text-sm mt-0.5">2,480</div>
            <div className="text-emerald-400 text-[9px] mt-0.5">↑ 12% this term</div>
          </div>
          <div className="bg-zinc-900/90 rounded border border-zinc-800 p-1.5">
            <div className="text-zinc-500 text-[9px]">Faculty Gradebooks</div>
            <div className="text-white font-bold text-sm mt-0.5">142</div>
            <div className="text-indigo-400 text-[9px] mt-0.5">25 REST APIs</div>
          </div>
          <div className="bg-zinc-900/90 rounded border border-zinc-800 p-1.5">
            <div className="text-zinc-500 text-[9px]">Attendance Sync</div>
            <div className="text-white font-bold text-sm mt-0.5">99.4%</div>
            <div className="text-amber-400 text-[9px] mt-0.5">Threshold 75%</div>
          </div>
        </div>

        {/* Micro Table Rows */}
        <div className="flex items-center justify-between bg-zinc-900/50 rounded px-2 py-1 text-[10px] text-zinc-400 border border-zinc-800/60">
          <span className="flex items-center gap-1"><FiShield className="text-indigo-400" size={11} /> Role: SuperAdmin</span>
          <span className="text-zinc-500">Bearer JWT: Valid</span>
          <span className="text-emerald-400 font-medium">HTTP 200 OK</span>
        </div>
      </div>
    );
  }

  if (type === 'ai-coach') {
    return (
      <div className="w-full h-44 rounded-xl bg-zinc-950/80 border border-zinc-800/80 p-3 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-zinc-300 font-semibold text-[11px]">Ollama Local Audio Engine</span>
          </div>
          <span className="text-[10px] text-zinc-500">Latency: 280ms</span>
        </div>

        {/* Audio Visualizer Waves */}
        <div className="flex items-center justify-center gap-1 my-2 h-10 bg-indigo-950/20 rounded border border-indigo-500/20 px-3">
          {[40, 75, 55, 90, 100, 60, 85, 30, 95, 70, 45, 80, 65, 90, 50, 30].map((h, i) => (
            <div
              key={i}
              className="w-1 bg-gradient-to-t from-indigo-500 to-purple-400 rounded-full"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        {/* Evaluation Prompt Metric */}
        <div className="bg-zinc-900/90 rounded border border-zinc-800 p-1.5 flex items-center justify-between text-[10px]">
          <span className="text-zinc-400">Speech-to-Text Rubric:</span>
          <span className="text-indigo-300 font-bold">Tech Depth 9.2/10</span>
          <span className="text-emerald-400">Score: 94%</span>
        </div>
      </div>
    );
  }

  if (type === 'chat-rag') {
    return (
      <div className="w-full h-44 rounded-xl bg-zinc-950/80 border border-zinc-800/80 p-3 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
          <div className="flex items-center gap-1.5 text-cyan-400">
            <FiFileText size={12} />
            <span className="text-zinc-300 font-semibold text-[11px]">ChromaDB Vector Store</span>
          </div>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">Cosine Sim 0.94</span>
        </div>

        {/* Document Ingestion & Query */}
        <div className="space-y-1.5 my-1 text-[10px]">
          <div className="bg-zinc-900/80 rounded p-1.5 border border-zinc-800 text-zinc-300">
            <span className="text-cyan-400 font-bold">Query:</span> "Explain model quantization pipeline"
          </div>
          <div className="bg-cyan-950/30 rounded p-1.5 border border-cyan-500/20 text-zinc-300">
            <span className="text-emerald-400 font-bold">Cited:</span> Section 4.2 (Page 18) · Local Ollama Zero API Cost
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] text-zinc-500 pt-1 border-t border-zinc-900">
          <span>FastAPI Streaming</span>
          <span className="text-cyan-400">Chunk Size: 512 tokens</span>
        </div>
      </div>
    );
  }

  if (type === 'saas') {
    return (
      <div className="w-full h-44 rounded-xl bg-zinc-950/80 border border-zinc-800/80 p-3 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
          <span className="text-zinc-300 font-semibold text-[11px]">Omnichannel Event Gateway</span>
          <span className="text-[10px] text-emerald-400">Active Pipeline</span>
        </div>

        {/* Channels */}
        <div className="grid grid-cols-3 gap-1.5 my-1">
          <div className="bg-zinc-900/90 rounded border border-zinc-800 p-1.5 text-center">
            <div className="text-emerald-400 text-[10px] font-bold">WhatsApp</div>
            <div className="text-zinc-400 text-[9px] mt-0.5">Twilio API</div>
          </div>
          <div className="bg-zinc-900/90 rounded border border-zinc-800 p-1.5 text-center">
            <div className="text-amber-400 text-[10px] font-bold">Slack Bot</div>
            <div className="text-zinc-400 text-[9px] mt-0.5">Event Hooks</div>
          </div>
          <div className="bg-zinc-900/90 rounded border border-zinc-800 p-1.5 text-center">
            <div className="text-sky-400 text-[10px] font-bold">Email</div>
            <div className="text-zinc-400 text-[9px] mt-0.5">Inbound Parser</div>
          </div>
        </div>

        <div className="bg-zinc-900/80 rounded p-1.5 border border-zinc-800 flex items-center justify-between text-[10px]">
          <span className="text-zinc-400">Arbitration Engine:</span>
          <span className="text-purple-300">Claude 3.5 ⇄ GPT-4o</span>
          <span className="text-emerald-400">Conf &gt; 88%</span>
        </div>
      </div>
    );
  }

  if (type === 'desktop') {
    return (
      <div className="w-full h-44 rounded-xl bg-zinc-950/80 border border-zinc-800/80 p-3 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
          <div className="flex gap-1.5 items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-zinc-400 text-[10px]">Hostel & Clinic Suite (Electron)</span>
          <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-500/10 text-amber-400 border border-amber-500/20">Offline SQLite</span>
        </div>

        <div className="grid grid-cols-2 gap-2 my-1">
          <div className="bg-zinc-900/80 rounded p-1.5 border border-zinc-800">
            <div className="text-zinc-500 text-[9px]">Hostel Bed Allocations</div>
            <div className="text-amber-400 font-bold text-sm">312 / 320</div>
            <div className="text-zinc-400 text-[9px]">Wing A, B, C Matched</div>
          </div>
          <div className="bg-zinc-900/80 rounded p-1.5 border border-zinc-800">
            <div className="text-zinc-500 text-[9px]">Clinic Patient Records</div>
            <div className="text-white font-bold text-sm">1,840</div>
            <div className="text-emerald-400 text-[9px]">Encrypted SQLite</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-zinc-900">
          <span>Local Billing Invoicing</span>
          <span className="text-emerald-400">100% Offline Resilience</span>
        </div>
      </div>
    );
  }

  if (type === 'telecom') {
    return (
      <div className="w-full h-44 rounded-xl bg-zinc-950/80 border border-zinc-800/80 p-3 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
          <div className="flex items-center gap-1.5 text-blue-400">
            <FiActivity size={12} />
            <span className="text-zinc-300 font-semibold text-[11px]">TalkPool LTE KPI Monitor</span>
          </div>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">Band 3 (1800MHz)</span>
        </div>

        <div className="grid grid-cols-3 gap-1.5 my-1 text-center">
          <div className="bg-zinc-900/80 rounded p-1.5 border border-zinc-800">
            <div className="text-zinc-500 text-[9px]">RSRP</div>
            <div className="text-blue-400 font-bold text-xs">-84 dBm</div>
            <div className="text-emerald-400 text-[9px]">Excellent</div>
          </div>
          <div className="bg-zinc-900/80 rounded p-1.5 border border-zinc-800">
            <div className="text-zinc-500 text-[9px]">RSRQ</div>
            <div className="text-blue-400 font-bold text-xs">-9.5 dB</div>
            <div className="text-emerald-400 text-[9px]">Stable</div>
          </div>
          <div className="bg-zinc-900/80 rounded p-1.5 border border-zinc-800">
            <div className="text-zinc-500 text-[9px]">SINR</div>
            <div className="text-blue-400 font-bold text-xs">18.2 dB</div>
            <div className="text-indigo-400 text-[9px]">Low Interf.</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-zinc-900">
          <span>Drive Test Processing: Genex & TEMS</span>
          <span className="text-blue-400 font-semibold">Recharts Active</span>
        </div>
      </div>
    );
  }

  // Fallback: Deep Learning / Vision
  return (
    <div className="w-full h-44 rounded-xl bg-zinc-950/80 border border-zinc-800/80 p-3 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
        <div className="flex items-center gap-1.5 text-rose-400">
          <FiCpu size={12} />
          <span className="text-zinc-300 font-semibold text-[11px]">TensorFlow CNN Classifier</span>
        </div>
        <span className="text-[10px] text-rose-300 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">FYP Medical AI</span>
      </div>

      <div className="flex items-center gap-3 my-1">
        <div className="w-14 h-14 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600 text-[10px]">
          [CV Grid]
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex justify-between text-[10px]">
            <span className="text-zinc-400">Dermatology Lesion:</span>
            <span className="text-rose-400 font-bold">96.4% Conf</span>
          </div>
          <div className="w-full h-2 rounded bg-zinc-800 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-rose-500 to-amber-500 w-[96%]" />
          </div>
          <div className="text-[9px] text-zinc-500">OpenCV Histogram Equalization Preprocessed</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-zinc-900">
        <span>COMSATS University Islamabad</span>
        <span className="text-rose-400 font-medium">Keras / Python</span>
      </div>
    </div>
  );
}
