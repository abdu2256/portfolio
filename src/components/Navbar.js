import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '16px 40px',
      background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <div style={{
        fontSize: '20px', fontWeight: '800',
        background: 'linear-gradient(135deg, #6366f1, #a855f7)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
      }}>
        Abdullah Basit
      </div>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '32px' }}>
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
            fontSize: '14px', fontWeight: '500', transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.target.style.color = 'white'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
          >{link}</a>
        ))}
        <a href="/Abdullah_Basit_CV.pdf" download style={{
          padding: '8px 20px',
          background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          borderRadius: '8px', color: 'white',
          textDecoration: 'none', fontSize: '14px', fontWeight: '600',
          boxShadow: '0 4px 15px rgba(99,102,241,0.3)'
        }}>Download CV</a>
      </div>
    </nav>
  );
}