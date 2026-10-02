import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: isMobile ? '14px 20px' : '16px 40px',
      background: scrolled || menuOpen ? 'rgba(10,10,15,0.97)' : 'transparent',
      backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
      borderBottom: scrolled || menuOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      boxSizing: 'border-box'
    }}>
      <div style={{
        fontSize: isMobile ? '17px' : '20px', fontWeight: '800',
        background: 'linear-gradient(135deg, #6366f1, #a855f7)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        whiteSpace: 'nowrap'
      }}>
        Abdullah Basit
      </div>

      {isMobile ? (
        <>
          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'transparent', border: 'none',
              color: 'white', fontSize: '26px', cursor: 'pointer',
              padding: '4px 8px', lineHeight: 1
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div style={{
              position: 'fixed',
              top: '56px', left: 0, right: 0,
              background: 'rgba(10,10,15,0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', flexDirection: 'column',
              padding: '12px 20px 20px',
              gap: '4px'
            }}>
              {links.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                    fontSize: '15px', fontWeight: '500',
                    padding: '12px 4px',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}
                >{link}</a>
              ))}
              <a
                href="/Abdullah_Basit_CV.pdf"
                download
                onClick={() => setMenuOpen(false)}
                style={{
                  marginTop: '12px',
                  padding: '12px 20px',
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  borderRadius: '8px', color: 'white',
                  textDecoration: 'none', fontSize: '14px', fontWeight: '600',
                  textAlign: 'center'
                }}
              >Download CV</a>
            </div>
          )}
        </>
      ) : (
        /* Desktop Links */
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
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
            boxShadow: '0 4px 15px rgba(99,102,241,0.3)',
            whiteSpace: 'nowrap'
          }}>Download CV</a>
        </div>
      )}
    </nav>
  );
}
