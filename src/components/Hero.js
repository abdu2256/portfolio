import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const roles = [
    'Full Stack Developer',
    'AI Engineer',
    'MERN Stack Developer',
    'LLM Integration Expert',
  ];

  useEffect(() => {
    let charIndex = 0;
    let roleIndex = 0;
    let deleting = false;
    let timeout;

    const type = () => {
      const current = roles[roleIndex];
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(type, 1500);
          return;
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      timeout = setTimeout(type, deleting ? 50 : 80);
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '0 40px'
    }}>
      {/* Background orbs */}
      {[
        { w: 600, h: 600, top: '-200px', left: '-200px', color: 'rgba(99,102,241,0.08)' },
        { w: 400, h: 400, bottom: '-100px', right: '-100px', color: 'rgba(168,85,247,0.08)' },
        { w: 300, h: 300, top: '40%', right: '20%', color: 'rgba(236,72,153,0.06)' },
      ].map((orb, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: orb.w, height: orb.h,
          borderRadius: '50%',
          background: orb.color,
          filter: 'blur(80px)',
          top: orb.top, left: orb.left,
          bottom: orb.bottom, right: orb.right,
          pointerEvents: 'none'
        }} />
      ))}

      <div style={{ textAlign: 'center', zIndex: 10, maxWidth: '800px' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-block',
          padding: '6px 16px',
          background: 'rgba(99,102,241,0.1)',
          border: '1px solid rgba(99,102,241,0.3)',
          borderRadius: '20px',
          color: '#818cf8',
          fontSize: '13px', fontWeight: '600',
          marginBottom: '24px'
        }}>
          👋 Available for hire — Islamabad, Pakistan
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: '72px', fontWeight: '900',
          margin: '0 0 16px', lineHeight: '1.1',
          color: 'white'
        }}>
          Abdullah{' '}
          <span style={{
            background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>Basit</span>
        </h1>

        {/* Typing role */}
        <div style={{
          fontSize: '28px', fontWeight: '600',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '24px', height: '40px'
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>{text}</span>
          <span style={{ color: '#6366f1', animation: 'blink 1s infinite' }}>|</span>
        </div>

        {/* Description */}
        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '17px', lineHeight: '1.7',
          maxWidth: '600px', margin: '0 auto 40px'
        }}>
          EE (Computer Engineering) graduate from COMSATS University Islamabad.
          I build <strong style={{ color: 'rgba(255,255,255,0.8)' }}>AI-powered products</strong> and{' '}
          <strong style={{ color: 'rgba(255,255,255,0.8)' }}>full-stack web applications</strong> that solve real problems.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            borderRadius: '12px', color: 'white',
            textDecoration: 'none', fontSize: '15px', fontWeight: '700',
            boxShadow: '0 8px 25px rgba(99,102,241,0.4)'
          }}>View My Projects →</a>

          <a href="#contact" style={{
            padding: '14px 32px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px', color: 'white',
            textDecoration: 'none', fontSize: '15px', fontWeight: '600'
          }}>Get In Touch</a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '40px', justifyContent: 'center',
          marginTop: '60px', flexWrap: 'wrap'
        }}>
          {[
            { num: '9+', label: 'Projects Built' },
            { num: '2+', label: 'AI Systems' },
            { num: '100%', label: 'Self-taught' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '32px', fontWeight: '800',
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>{stat.num}</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}