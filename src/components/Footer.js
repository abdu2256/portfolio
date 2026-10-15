import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Attribution */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="w-7 h-7 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-bold text-indigo-400 text-xs">
            AB
          </span>
          <div>
            <div className="text-white font-semibold">
              Abdullah Basit &copy; {new Date().getFullYear()}
            </div>
            <div className="text-zinc-500 text-[11px] font-mono mt-0.5">
              COMSATS Graduate 2026 · Built with React 19, Three.js & Tailwind
            </div>
          </div>
        </div>

        {/* Links & Quick Back to Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenResume}
            className="hover:text-indigo-400 transition-colors font-medium cursor-pointer"
          >
            Resume
          </button>
          <a
            href="https://github.com/abdu2256"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            title="GitHub"
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/abdullah-khan-ak-4275292a6"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            title="LinkedIn"
          >
            <FiLinkedin size={16} />
          </a>
          <a
            href="mailto:khanakabdullah188@gmail.com"
            className="hover:text-white transition-colors"
            title="Email"
          >
            <FiMail size={16} />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer ml-2"
            title="Back to Top"
            aria-label="Back to top"
          >
            <FiArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}