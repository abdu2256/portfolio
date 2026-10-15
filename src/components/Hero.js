import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiFileText, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import ThreeHeroCanvas from './ThreeHeroCanvas';

export default function Hero({ onOpenResume }) {
  const [typedRole, setTypedRole] = useState('');

  useEffect(() => {
    const roles = [
      'Full Stack Software Engineer',
      'AI & RAG Systems Developer',
      'MERN & Python Microservices',
      'COMSATS University Engineering Graduate'
    ];

    let charIdx = 0;
    let roleIdx = 0;
    let isDeleting = false;
    let timer;

    const tick = () => {
      const currentRole = roles[roleIdx];
      if (!isDeleting) {
        setTypedRole(currentRole.slice(0, charIdx + 1));
        charIdx++;
        if (charIdx === currentRole.length) {
          isDeleting = true;
          timer = setTimeout(tick, 2000);
          return;
        }
      } else {
        setTypedRole(currentRole.slice(0, charIdx - 1));
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
        }
      }
      timer = setTimeout(tick, isDeleting ? 40 : 75);
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-zinc-950"
    >
      {/* 3D Three.js Interactive Background Scene */}
      <ThreeHeroCanvas />

      {/* Subtle radial ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 mb-6 backdrop-blur-md shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium">Available for Full-Time Roles & Freelance AI Systems</span>
          <span className="text-zinc-600">|</span>
          <span className="flex items-center gap-1 text-zinc-400 font-mono text-[11px]">
            <FiMapPin size={11} className="text-indigo-400" /> Islamabad, Pakistan
          </span>
        </div>

        {/* Main Positioning Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
          Engineering scalable web products &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-indigo-200">
            intelligent AI systems.
          </span>
        </h1>

        {/* Dynamic Typewriter Specialty */}
        <div className="h-9 mb-6 flex items-center justify-center font-mono text-base sm:text-xl text-indigo-300 font-semibold">
          <span>{typedRole}</span>
          <span className="ml-1 w-0.5 h-5 bg-indigo-400 animate-pulse" />
        </div>

        {/* Clear Positioning Description */}
        <p className="max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
          I'm <strong className="text-white font-semibold">Abdullah Basit</strong>, a BS Electrical Engineering (Computer Engineering) graduate from COMSATS University Islamabad. I design robust backend architectures, clean React frontends, and production-ready Generative AI & RAG pipelines with verifiable engineering discipline.
        </p>

        {/* Primary Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Case Studies</span>
            <FiArrowRight size={15} />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <FiFileText size={15} className="text-indigo-400" />
            <span>Curriculum Vitae</span>
          </button>

          <a
            href="https://github.com/abdu2256"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            title="GitHub Profile"
          >
            <FiGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/abdullah-khan-ak-4275292a6"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            title="LinkedIn Profile"
          >
            <FiLinkedin size={18} />
          </a>
        </div>

        {/* Verified Engineering Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl pt-8 border-t border-zinc-800/80">
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-center">
            <div className="text-2xl font-extrabold text-white font-mono">7+</div>
            <div className="text-xs text-zinc-400 mt-0.5 font-medium">Production Systems</div>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-center">
            <div className="text-2xl font-extrabold text-indigo-400 font-mono">25+</div>
            <div className="text-xs text-zinc-400 mt-0.5 font-medium">REST Endpoints Built</div>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-center">
            <div className="text-2xl font-extrabold text-purple-400 font-mono">0$</div>
            <div className="text-xs text-zinc-400 mt-0.5 font-medium">Local Ollama RAG Cost</div>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-center">
            <div className="text-2xl font-extrabold text-emerald-400 font-mono">2026</div>
            <div className="text-xs text-zinc-400 mt-0.5 font-medium">COMSATS Graduate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
