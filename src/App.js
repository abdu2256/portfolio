import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 antialiased overflow-x-hidden">
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer onOpenResume={() => setIsResumeOpen(true)} />
      <ChatBot />

      {/* Accessible In-App Curriculum Vitae Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}

export default App;