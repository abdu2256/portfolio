import React from 'react';
import { experienceData, educationData } from '../data/projects';
import { FiBriefcase, FiAward, FiCheckCircle } from 'react-icons/fi';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold mb-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
          Career & Education
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Experience & Academic Foundation
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3">
          Only verified professional history and accredited university achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column: Work Experience */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <FiBriefcase size={18} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Work History
            </h3>
          </div>

          <div className="space-y-6">
            {experienceData.map((exp, i) => (
              <div
                key={i}
                className="relative pl-6 pb-6 border-l-2 border-indigo-500/30 last:border-none"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-indigo-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
                      {exp.period}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      {exp.location}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white">
                    {exp.role}
                  </h4>
                  <div className="text-xs sm:text-sm font-semibold text-indigo-400 mt-0.5 mb-3">
                    {exp.company}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {exp.achievements.map((ach, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
                        <FiCheckCircle size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <FiAward size={18} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Accredited Education
            </h3>
          </div>

          <div className="space-y-6">
            {educationData.map((edu, i) => (
              <div
                key={i}
                className="relative pl-6 pb-6 border-l-2 border-purple-500/30 last:border-none"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-purple-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 font-mono">
                      {edu.period}
                    </span>
                    <span className="text-xs text-emerald-400 font-mono font-medium">
                      {edu.status}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white">
                    {edu.degree}
                  </h4>
                  <div className="text-xs sm:text-sm font-semibold text-purple-400 mt-0.5 mb-3">
                    {edu.institution} · {edu.location}
                  </div>

                  <div className="space-y-2">
                    {edu.highlights.map((h, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
                        <FiCheckCircle size={13} className="text-purple-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}