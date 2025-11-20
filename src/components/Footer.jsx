export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)',
      padding: '40px',
      borderRadius: '40px 40px 0 0',
      borderTop: '5px solid white',
      textAlign: 'center',
      marginTop: '60px',
      boxShadow: '0 -10px 40px rgba(255, 0, 255, 0.4)'
    }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-2">
          <p style={{
            color: '#000',
            fontWeight: 600,
            marginBottom: '10px',
            fontSize: '1.1rem'
          }}>
            ✨ A tiny cosmic universe built with intuition, product thinking, and AI ✨
          </p>
          <p style={{
            color: '#000',
            fontWeight: 600,
            fontSize: '0.9rem',
            opacity: 0.8
          }}>
            © {new Date().getFullYear()} SoftWitch. A modern magic project by Jamie.
          </p>
        </div>
      </div>
    </footer>
  );
}
