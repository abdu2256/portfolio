import React from 'react';
import {
  FiBookOpen,
  FiMapPin,
  FiBriefcase,
  FiCode,
  FiCpu
} from 'react-icons/fi';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold mb-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
          Professional Background
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineered from fundamentals to application.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3">
          Combining rigorous computer engineering foundations with hands-on full-stack product development and modern AI pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl p-2 bg-gradient-to-tr from-indigo-500/30 via-zinc-800 to-purple-500/30 border border-zinc-700/60 shadow-2xl">
            <div className="w-full h-full rounded-xl overflow-hidden bg-zinc-900 relative">
              <img
                src="/profile.jpg"
                alt="Abdullah Basit"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] p-3 rounded-xl bg-zinc-900/95 border border-zinc-700/80 backdrop-blur-md shadow-xl flex items-center justify-between text-xs">
              <div>
                <div className="text-[10px] uppercase font-mono text-indigo-400 font-bold">Degree Status</div>
                <div className="text-white font-semibold">COMSATS Graduate 2026</div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Verified
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Core Philosophy */}
        <div className="lg:col-span-7 space-y-6 text-zinc-300">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Building pragmatic software that solves real bottlenecks.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
              I completed my BS in Electrical Engineering with Computer Engineering specialization at <strong className="text-zinc-200">COMSATS University Islamabad</strong>. My education provided deep insight into systems architecture, algorithms, operating systems, and computer hardware — which I directly translate into writing clean, efficient, and maintainable software.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-400 mt-3">
              Rather than building trivial clone apps, my portfolio features production-scoped systems: an enterprise University Portal with 25+ endpoints, an offline-first Clinic & Hostel ERP in Electron/SQLite, an autonomous multi-model customer reply router, and private RAG assistants running locally on Ollama without API recurring costs.
            </p>
          </div>

          {/* Core Architectural Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mt-0.5">
                <FiCode size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Architecture First</h4>
                <p className="text-xs text-zinc-400 mt-1">Normalized schemas, explicit error boundaries, and RESTful separation of concerns.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 mt-0.5">
                <FiCpu size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Applied AI & RAG</h4>
                <p className="text-xs text-zinc-400 mt-1">Pragmatic model integration: local Ollama quantization, ChromaDB embeddings, and prompt safety arbitration.</p>
              </div>
            </div>
          </div>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono">
              <FiBookOpen className="text-indigo-400" size={13} /> COMSATS Islamabad
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono">
              <FiBriefcase className="text-indigo-400" size={13} /> Ex-TalkPool LCC / Huawei Intern
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono">
              <FiMapPin className="text-indigo-400" size={13} /> Islamabad, Pakistan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
