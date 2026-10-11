import { useState, useEffect } from 'react';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <section id="about" style={{
      padding: isMobile ? '70px 20px' : '100px 40px',
      maxWidth: '1100px', margin: '0 auto'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '40px' : '60px',
        alignItems: 'center'
      }}>

        {/* Left — Photo */}
        <div style={{
          position: 'relative',
          width: isMobile ? '240px' : '320px',
          margin: isMobile ? '0 auto 36px' : '0 auto'
        }}>
          <div style={{
            width: isMobile ? '240px' : '320px',
            height: isMobile ? '240px' : '320px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 60px rgba(99,102,241,0.3)',
            overflow: 'hidden'
          }}>
            <img
              src="/profile.jpg"
              alt="Abdullah Basit"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          {/* Floating badge */}
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: isMobile ? '50%' : 'auto',
            right: isMobile ? 'auto' : '30px',
            transform: isMobile ? 'translateX(-50%)' : 'none',
            background: 'rgba(10,10,15,0.9)',
            border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: '12px', padding: '12px 20px',
            backdropFilter: 'blur(20px)',
            whiteSpace: 'nowrap'
          }}>
            <div style={{ color: '#818cf8', fontSize: '11px', fontWeight: '700' }}>CURRENTLY</div>
            <div style={{ color: 'white', fontSize: '13px', fontWeight: '600', marginTop: '2px' }}>
              🟢 Open to Work
            </div>
          </div>
        </div>

        {/* Right — Text */}
        <div style={{ marginTop: isMobile ? '24px' : '0' }}>
          <div style={{
            color: '#818cf8', fontSize: '13px', fontWeight: '700',
            letterSpacing: '2px', marginBottom: '12px',
            textAlign: isMobile ? 'center' : 'left'
          }}>ABOUT ME</div>

          <h2 style={{
            fontSize: isMobile ? '28px' : '38px', fontWeight: '800',
            color: 'white', margin: '0 0 20px', lineHeight: '1.2',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            I build software that{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>actually works</span>
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.6)', lineHeight: '1.8',
            fontSize: '15px', marginBottom: '16px',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            I'm a fresh BS Electrical Engineering (Computer Engineering) graduate from
            COMSATS University Islamabad with a strong passion for building AI-powered
            software solutions.
          </p>

          <p style={{
            color: 'rgba(255,255,255,0.6)', lineHeight: '1.8',
            fontSize: '15px', marginBottom: '32px',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            I've independently built 9 production-ready projects — from AI automation
            platforms and RAG chatbots to desktop apps and deep learning systems.
            Everything I know, I learned by building real things.
          </p>

          <div style={{
            display: 'flex', gap: '12px', flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            {[
              { icon: '🎓', text: 'COMSATS University Islamabad' },
              { icon: '📍', text: 'Islamabad, Pakistan' },
              { icon: '💼', text: 'Open to Full-time & Freelance' },
            ].map(item => (
              <div key={item.text} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.2)',
                borderRadius: '8px', padding: '8px 14px',
                fontSize: '13px', color: 'rgba(255,255,255,0.7)'
              }}>
                <span>{item.icon}</span> {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
