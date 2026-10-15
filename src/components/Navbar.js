import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiFileText, FiSend } from 'react-icons/fi';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects & Case Studies', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-zinc-100 no-underline"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20 text-sm">
            AB
          </span>
          <div>
            <div className="font-bold text-sm tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              Abdullah Basit
            </div>
            <div className="text-[10px] text-zinc-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Software & AI Engineer
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1 rounded-full border border-zinc-800/80 text-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 font-medium ${
                  isActive
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/80 text-xs font-semibold transition-all duration-200 cursor-pointer"
          >
            <FiFileText size={13} className="text-indigo-400" />
            <span>Resume / CV</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all duration-200 cursor-pointer"
          >
            <FiSend size={12} />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-zinc-900 text-indigo-400 border border-zinc-800 text-xs"
            title="View Resume"
          >
            <FiFileText size={16} />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="sm:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-zinc-900 text-zinc-200 border border-zinc-700 text-xs font-semibold"
            >
              <FiFileText size={14} className="text-indigo-400" />
              <span>View & Print Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold"
            >
              <FiSend size={13} />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
