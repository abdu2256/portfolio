import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('khanakabdullah188@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: '100px 40px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ color: '#818cf8', fontSize: '13px', fontWeight: '700', letterSpacing: '2px', marginBottom: '12px' }}>
          GET IN TOUCH
        </div>
        <h2 style={{ fontSize: '42px', fontWeight: '800', color: 'white', margin: '0 0 16px' }}>
          Let's{' '}
          <span style={{
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>Work Together</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: '1.7', marginBottom: '48px' }}>
          I'm currently open to Software Engineering, Full-Stack, and AI Engineering roles.
          Feel free to reach out!
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          <button onClick={copyEmail} style={{
            padding: '14px 28px',
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            border: 'none', borderRadius: '12px',
            color: 'white', fontSize: '15px', fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(99,102,241,0.4)'
          }}>
            {copied ? '✅ Copied!' : '📧 Copy Email'}
          </button>

          <a href="https://linkedin.com/in/abdullah-khan-ak-4275292a6" target="_blank" rel="noreferrer" style={{
            padding: '14px 28px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px', color: 'white',
            textDecoration: 'none', fontSize: '15px', fontWeight: '600'
          }}>💼 LinkedIn</a>

          <a href="https://github.com/abdu2256" target="_blank" rel="noreferrer" style={{
            padding: '14px 28px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px', color: 'white',
            textDecoration: 'none', fontSize: '15px', fontWeight: '600'
          }}>⬡ GitHub</a>
        </div>

        <div style={{
          padding: '20px',
          background: 'rgba(99,102,241,0.05)',
          border: '1px solid rgba(99,102,241,0.15)',
          borderRadius: '12px',
          color: 'rgba(255,255,255,0.5)', fontSize: '14px'
        }}>
          📧 khanakabdullah188@gmail.com &nbsp;|&nbsp; 📞 +92 331 555 2232 &nbsp;|&nbsp; 📍 Islamabad, Pakistan
        </div>
      </div>
    </section>
  );
}