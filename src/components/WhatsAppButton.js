import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const whatsappUrl =
    'https://wa.me/923315552232?text=Hi%20Abdullah%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity!';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Direct Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 group flex items-center gap-2.5 px-3.5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-[#25D366]/30 border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer no-underline"
      title="Chat with Abdullah on WhatsApp (+92 331 555 2232)"
    >
      <FaWhatsapp size={22} className="shrink-0 text-white" />
      <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
        WhatsApp
      </span>
      {/* Subtle indicator dot */}
      <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-white/90 animate-pulse" />
    </a>
  );
}
