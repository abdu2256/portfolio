import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard3D from './ProjectCard3D';
import CaseStudyModal from './CaseStudyModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const categories = ['All', 'AI & LLM', 'Full Stack', 'Systems & Desktop'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold mb-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
          Selected Case Studies
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured Engineering Projects
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3">
          Interactive 3D project cards demonstrating full-stack architecture, offline-first systems, and generative AI pipelines. Click any card to explore the full case study.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects 3D Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard3D
            key={project.id}
            project={project}
            onSelectCaseStudy={setSelectedCaseStudy}
          />
        ))}
      </div>

      {/* Detailed Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
}