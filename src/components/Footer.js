export default function Footer() {
  return (
    <footer style={{
      padding: '24px 40px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      textAlign: 'center',
      color: 'rgba(255,255,255,0.3)',
      fontSize: '13px'
    }}>
      <span>Built by </span>
      <span style={{
        background: 'linear-gradient(135deg, #6366f1, #a855f7)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        fontWeight: '700'
      }}>Abdullah Basit</span>
      <span> — React.js · Tailwind CSS · Deployed on Vercel</span>
    </footer>
  );
}