import { useState } from 'react';
import { projects } from '../data/projects';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" style={{ padding: '100px 40px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ color: '#818cf8', fontSize: '13px', fontWeight: '700', letterSpacing: '2px', marginBottom: '12px' }}>
            MY WORK
          </div>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: 'white', margin: 0 }}>
            Featured{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>Projects</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px'
        }}>
          {displayed.map(project => (
            <div key={project.id} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px', padding: '28px',
              transition: 'all 0.3s', cursor: 'pointer',
              position: 'relative', overflow: 'hidden'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${project.color}40`;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${project.color}20`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {project.featured && (
                <div style={{
                  position: 'absolute', top: '16px', right: '16px',
                  background: `${project.color}20`,
                  border: `1px solid ${project.color}40`,
                  borderRadius: '6px', padding: '3px 10px',
                  color: project.color, fontSize: '11px', fontWeight: '700'
                }}>FEATURED</div>
              )}

              <div style={{
                width: '52px', height: '52px',
                background: `${project.color}15`,
                border: `1px solid ${project.color}30`,
                borderRadius: '14px',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '24px',
                marginBottom: '16px'
              }}>{project.emoji}</div>

              <h3 style={{
                color: 'white', fontSize: '17px',
                fontWeight: '700', margin: '0 0 10px'
              }}>{project.title}</h3>

              <p style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '13px', lineHeight: '1.6',
                margin: '0 0 20px'
              }}>{project.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    padding: '4px 10px',
                    background: `${project.color}10`,
                    border: `1px solid ${project.color}25`,
                    borderRadius: '5px',
                    color: project.color, fontSize: '11px', fontWeight: '600'
                  }}>{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <a href={project.github} target="_blank" rel="noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '8px 16px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px', color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none', fontSize: '13px', fontWeight: '600'
                }}>⬡ GitHub</a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '8px 16px',
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}30`,
                    borderRadius: '8px', color: project.color,
                    textDecoration: 'none', fontSize: '13px', fontWeight: '600'
                  }}>↗ Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button onClick={() => setShowAll(true)} style={{
              padding: '12px 32px',
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.3)',
              borderRadius: '10px', color: '#818cf8',
              fontSize: '14px', fontWeight: '600',
              cursor: 'pointer'
            }}>Show All Projects ({projects.length})</button>
          </div>
        )}
      </div>
    </section>
  );
}