import React, { useEffect } from 'react';
import {
  FiX,
  FiPrinter,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub
} from 'react-icons/fi';
import { experienceData, educationData, skillCategories } from '../data/projects';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-10 text-zinc-100 print:max-h-none print:m-0 print:p-0 print:border-none print:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Verified Curriculum Vitae
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold cursor-pointer transition-colors"
            >
              <FiPrinter size={14} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <FiX size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-8 font-sans text-zinc-200">
          {/* Header Info */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Abdullah Basit
            </h1>
            <p className="text-indigo-400 font-semibold text-base sm:text-lg mt-1">
              Full Stack Developer & AI Engineer
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-xs sm:text-sm text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <FiMail className="text-indigo-400" /> khanakabdullah188@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <FiPhone className="text-indigo-400" /> +92 331 555 2232
              </span>
              <span className="flex items-center gap-1.5">
                <FiMapPin className="text-indigo-400" /> Islamabad, Pakistan
              </span>
              <span className="flex items-center gap-1.5">
                <FiLinkedin className="text-indigo-400" /> linkedin.com/in/abdullah-khan-ak-4275292a6
              </span>
              <span className="flex items-center gap-1.5">
                <FiGithub className="text-indigo-400" /> github.com/abdu2256
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest border-b border-zinc-800 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              BS Electrical Engineering (Computer Engineering) graduate from COMSATS University Islamabad.
              Specialized in developing production-ready full-stack web applications, scalable backend microservices,
              and intelligent AI/RAG systems. Proven track record independently building and architecting 7+ full-stack
              projects spanning Node.js, React, Python, PostgreSQL, and LLM integrations.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3">
              Education
            </h2>
            {educationData.map((edu, i) => (
              <div key={i} className="mb-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">{edu.period}</span>
                </div>
                <div className="text-xs sm:text-sm text-indigo-300 font-medium">
                  {edu.institution} · {edu.location}
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-zinc-400">
                  {edu.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3">
              Work Experience
            </h2>
            {experienceData.map((exp, i) => (
              <div key={i} className="mb-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                </div>
                <div className="text-xs sm:text-sm text-indigo-300 font-medium">
                  {exp.company} · {exp.location}
                </div>
                <p className="text-xs text-zinc-300 mt-1 italic">{exp.description}</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-zinc-400">
                  {exp.achievements.map((ach, j) => (
                    <li key={j}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                  <span className="font-bold text-white">{cat.title}: </span>
                  <span className="text-zinc-400 font-mono">
                    {cat.skills.map(s => s.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
