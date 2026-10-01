export default function About() {
  return (
    <section id="about" style={{ padding: '100px 40px', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

        {/* Left — Photo */}
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '320px', height: '320px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 60px rgba(99,102,241,0.3)',
            margin: '0 auto',
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
            position: 'absolute', bottom: '-10px', right: '30px',
            background: 'rgba(10,10,15,0.9)',
            border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: '12px', padding: '12px 20px',
            backdropFilter: 'blur(20px)'
          }}>
            <div style={{ color: '#818cf8', fontSize: '11px', fontWeight: '700' }}>CURRENTLY</div>
            <div style={{ color: 'white', fontSize: '13px', fontWeight: '600', marginTop: '2px' }}>
              🟢 Open to Work
            </div>
          </div>
        </div>

        {/* Right — Text */}
        <div>
          <div style={{
            color: '#818cf8', fontSize: '13px', fontWeight: '700',
            letterSpacing: '2px', marginBottom: '12px'
          }}>ABOUT ME</div>

          <h2 style={{
            fontSize: '38px', fontWeight: '800',
            color: 'white', margin: '0 0 20px', lineHeight: '1.2'
          }}>
            I build software that{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>actually works</span>
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.6)', lineHeight: '1.8',
            fontSize: '15px', marginBottom: '16px'
          }}>
            I'm a fresh BS Electrical Engineering (Computer Engineering) graduate from
            COMSATS University Islamabad with a strong passion for building AI-powered
            software solutions.
          </p>

          <p style={{
            color: 'rgba(255,255,255,0.6)', lineHeight: '1.8',
            fontSize: '15px', marginBottom: '32px'
          }}>
            I've independently built 9 production-ready projects — from AI automation
            platforms and RAG chatbots to desktop apps and deep learning systems.
            Everything I know, I learned by building real things.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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