export default function Experience() {
  return (
    <section id="experience" style={{
      padding: '100px 40px',
      background: 'rgba(255,255,255,0.01)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ color: '#818cf8', fontSize: '13px', fontWeight: '700', letterSpacing: '2px', marginBottom: '12px' }}>EXPERIENCE</div>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: 'white', margin: 0 }}>
            Work{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>History</span>
          </h2>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(99,102,241,0.2)',
          borderRadius: '20px', padding: '32px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ color: 'white', fontSize: '20px', fontWeight: '700', margin: '0 0 4px' }}>
                RF & Drive Test Intern
              </h3>
              <div style={{ color: '#818cf8', fontSize: '14px', fontWeight: '600' }}>
                TalkPool LCC (Huawei Projects)
              </div>
            </div>
            <div style={{
              padding: '6px 16px',
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.3)',
              borderRadius: '20px',
              color: '#818cf8', fontSize: '13px', fontWeight: '600'
            }}>Apr 2026 – Jun 2026</div>
          </div>

          <div style={{ borderLeft: '2px solid rgba(99,102,241,0.3)', paddingLeft: '20px' }}>
            {[
              'Conducted RF drive tests using TEMS Investigation to collect LTE signal quality data (RSRP, RSRQ, SINR)',
              'Processed drive test data using Genex Assistant; identified coverage gaps and submitted RF optimization findings',
              'Studied GSM, WCDMA, LTE network architecture and network sharing technologies (MORAN, MOCN)',
            ].map((point, i) => (
              <div key={i} style={{
                display: 'flex', gap: '10px',
                marginBottom: '12px', alignItems: 'flex-start'
              }}>
                <span style={{ color: '#6366f1', marginTop: '2px', flexShrink: 0 }}>▸</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6' }}>{point}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
            {['TEMS Investigation', 'Genex Assistant', 'LTE/4G', 'RF Analysis', 'Drive Testing'].map(tag => (
              <span key={tag} style={{
                padding: '4px 12px',
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.2)',
                borderRadius: '6px', color: '#818cf8',
                fontSize: '12px', fontWeight: '600'
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}