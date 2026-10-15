import React from 'react';
import { skillCategories } from '../data/projects';
import TechIcon from './TechIcon';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold mb-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
          Technical Arsenal
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Skills, Frameworks & Tooling
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3">
          Categorized stack with real framework icons, battle-tested across production web portals, desktop apps, and generative AI systems.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={category.title}
            className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 flex flex-col justify-between transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/90 shadow-lg"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-white tracking-tight">
                  {category.title}
                </h3>
                <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded border border-zinc-700/60">
                  {category.skills.length} skills
                </span>
              </div>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Skills List with Real Tech Icons */}
              <div className="grid grid-cols-2 gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2.5 p-2 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-950 transition-all duration-200 cursor-default"
                  >
                    <TechIcon
                      name={skill.name}
                      iconKey={skill.icon}
                      color={skill.color}
                      size={18}
                      className="shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold text-zinc-200 group-hover:text-white truncate">
                        {skill.name}
                      </div>
                      <div className="text-[10px] text-zinc-400 font-mono">
                        {skill.level}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}