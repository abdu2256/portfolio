import React, { useEffect } from 'react';
import {
  FiX,
  FiGithub,
  FiExternalLink,
  FiCheckCircle,
  FiLayers,
  FiCpu,
  FiUsers,
  FiAlertCircle
} from 'react-icons/fi';
import ProjectMockup from './ProjectMockup';

export default function CaseStudyModal({ project, onClose }) {
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

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl p-6 sm:p-8 text-zinc-100"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: `0 25px 50px -12px ${project.accent}25`
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <FiX size={18} />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-md border"
              style={{
                backgroundColor: `${project.accent}15`,
                borderColor: `${project.accent}30`,
                color: project.accent
              }}
            >
              {project.category}
            </span>
            <span className="text-xs text-zinc-400 font-mono">
              {project.metrics}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* UI Mockup Showcase */}
        <div className="mb-8 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 p-2 sm:p-4">
          <ProjectMockup type={project.uiType} accent={project.accent} />
        </div>

        {/* Stats Grid */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-3 mb-8">
            {project.stats.map((stat, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-center"
              >
                <div className="text-xs text-zinc-400">{stat.label}</div>
                <div className="text-sm sm:text-base font-bold text-white mt-1" style={{ color: project.accent }}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Problem & Target Users */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-800/60">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <FiAlertCircle size={14} /> Problem Solved
            </div>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-800/60">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <FiUsers size={14} /> Intended Users
            </div>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              {project.audience}
            </p>
          </div>
        </div>

        {/* Abdullah's Engineering Contribution */}
        <div className="mb-8 p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20">
          <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs tracking-wider uppercase mb-2">
            <FiCpu size={14} /> Abdullah's Architectural Contribution
          </div>
          <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed">
            {project.contribution}
          </p>
        </div>

        {/* Key Implemented Features */}
        <div className="mb-8">
          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <FiLayers size={14} className="text-indigo-400" /> Key Features Implemented
          </h4>
          <div className="space-y-2">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 bg-zinc-950/40 p-2.5 rounded-lg border border-zinc-800/40"
              >
                <FiCheckCircle
                  className="mt-0.5 shrink-0 text-emerald-400"
                  size={15}
                />
                <span className="leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links Footer */}
        <div className="flex items-center justify-between pt-5 border-t border-zinc-800">
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold border border-zinc-700 transition-colors"
              >
                <FiGithub size={15} />
                <span>Source Code on GitHub</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
              >
                <FiExternalLink size={15} />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs text-zinc-400 hover:text-white px-3 py-2 cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
