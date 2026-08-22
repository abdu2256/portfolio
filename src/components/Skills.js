import { skills } from '../data/projects';

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '100px 40px',
      background: 'rgba(255,255,255,0.01)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ color: '#818cf8', fontSize: '13px', fontWeight: '700', letterSpacing: '2px', marginBottom: '12px' }}>
            TECH STACK
          </div>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: 'white', margin: 0 }}>
            Skills &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>Technologies</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px'
        }}>
          {skills.map((group, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px', padding: '24px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                color: '#818cf8', fontSize: '12px',
                fontWeight: '700', letterSpacing: '1px',
                marginBottom: '16px'
              }}>{group.category.toUpperCase()}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.items.map(skill => (
                  <span key={skill} style={{
                    padding: '6px 12px',
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: '6px',
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '13px', fontWeight: '500'
                  }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}