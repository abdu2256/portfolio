import React, { useState } from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiCopy,
  FiCheck,
  FiSend,
  FiMessageSquare
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const emailAddress = 'khanakabdullah188@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build mailto fallback
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold mb-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
          Direct Channels
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let's Build Something Exceptional
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3">
          Actively considering Full-Stack, Software Engineering, and AI Engineering roles. Fast response time within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Quick Copy Box */}
          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <FiMail size={18} />
              </div>
              <div>
                <div className="text-xs text-zinc-500 font-mono">PRIMARY INBOX</div>
                <div className="text-sm sm:text-base font-bold text-white select-all">
                  {emailAddress}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={copyEmail}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
              >
                {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
                <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
              </button>
              <a
                href={`mailto:${emailAddress}`}
                className="py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold transition-colors"
              >
                Open Mailer
              </a>
            </div>
          </div>

          {/* WhatsApp Direct Chat Card */}
          <a
            href="https://wa.me/923315552232?text=Hi%20Abdullah%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity!"
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366]/60 hover:bg-[#25D366]/15 transition-all group flex items-center justify-between shadow-lg"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-[#25D366] text-white shadow-md shadow-[#25D366]/30">
                <FaWhatsapp size={22} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-[#25D366] font-bold">INSTANT MESSAGING</div>
                <div className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                  Chat on WhatsApp
                </div>
                <div className="text-xs text-zinc-400 font-mono mt-0.5">+92 331 555 2232</div>
              </div>
            </div>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold group-hover:scale-105 transition-transform flex items-center gap-1 shadow-sm">
              Message ↗
            </span>
          </a>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://linkedin.com/in/abdullah-khan-ak-4275292a6"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-zinc-400 group-hover:text-white">
                <FiLinkedin size={20} className="text-indigo-400" />
                <span className="text-xs font-mono">↗</span>
              </div>
              <div className="mt-4">
                <div className="text-xs font-bold text-white">LinkedIn</div>
                <div className="text-[11px] text-zinc-500 truncate mt-0.5">abdullah-khan-ak</div>
              </div>
            </a>

            <a
              href="https://github.com/abdu2256"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-zinc-400 group-hover:text-white">
                <FiGithub size={20} className="text-zinc-200" />
                <span className="text-xs font-mono">↗</span>
              </div>
              <div className="mt-4">
                <div className="text-xs font-bold text-white">GitHub</div>
                <div className="text-[11px] text-zinc-500 truncate mt-0.5">github.com/abdu2256</div>
              </div>
            </a>
          </div>

          {/* Location & Phone Card */}
          <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <FiPhone className="text-indigo-400" size={14} />
              <span>+92 331 555 2232</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="text-indigo-400" size={14} />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-lg space-y-4"
          >
            <div className="flex items-center gap-2 mb-2 text-white font-bold text-base">
              <FiMessageSquare className="text-indigo-400" />
              <span>Send Direct Inquiry</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white text-xs outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. sarah@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white text-xs outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                SUBJECT / PROJECT TYPE
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Software Engineering Opportunity / AI Pipeline"
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white text-xs outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                MESSAGE *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your role or project scope..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white text-xs outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold tracking-wide uppercase shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <FiSend size={14} />
              <span>Send Message</span>
            </button>

            {formSubmitted && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center">
                ✓ Opening your email client to send your message directly to Abdullah.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}