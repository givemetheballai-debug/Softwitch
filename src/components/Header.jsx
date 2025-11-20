import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .header-nav-link {
          font-weight: 600;
          font-size: 1.125rem;
          color: #000;
          text-decoration: none;
          padding: 10px 20px;
          background: white;
          border-radius: 20px;
          border: 3px solid #ff00ff;
          transition: all 0.3s;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        
        .header-nav-link:hover {
          background: #ff00ff;
          color: white;
          transform: scale(1.1);
          box-shadow: 0 0 30px rgba(255, 0, 255, 1);
        }
        
        @media (max-width: 768px) {
          .header-nav {
            padding: 15px 20px !important;
          }
          
          .header-nav-content {
            flex-direction: column !important;
            gap: 20px !important;
          }
          
          .header-logo-area {
            gap: 12px !important;
          }
          
          .header-logo-area svg {
            width: 50px !important;
            height: 50px !important;
          }
          
          .header-logo-text {
            font-size: 1.75rem !important;
          }
          
          .header-tagline {
            font-size: 0.875rem !important;
          }
          
          .header-nav-links {
            flex-wrap: wrap !important;
            gap: 10px !important;
            justify-content: center !important;
          }
          
          .header-nav-link {
            font-size: 0.875rem !important;
            padding: 8px 16px !important;
          }
        }
      `}</style>
      
      <header style={{
        background: 'linear-gradient(135deg, #ff1493 0%, #ffd700 50%, #00ff00 100%)',
        borderBottom: '5px solid white',
        boxShadow: '0 0 40px rgba(255, 20, 147, 0.6)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <nav className="header-nav max-w-6xl mx-auto px-10 py-5">
          <div className="header-nav-content flex items-center justify-between">
            <Link to="/" className="header-logo-area flex items-center gap-4">
              {/* Moon Icon */}
              <svg width="60" height="60" viewBox="0 0 100 100" style={{filter: 'drop-shadow(0 0 20px rgba(255, 107, 157, 0.8))'}}>
                <defs>
                  <linearGradient id="moonGradHeader" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#ff00ff', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#00ffff', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#ffd700', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="35" fill="url(#moonGradHeader)" stroke="#fff" strokeWidth="4"/>
                <ellipse cx="65" cy="50" rx="25" ry="35" fill="rgba(0,0,0,0.3)"/>
                <circle cx="40" cy="30" r="5" fill="rgba(255,255,255,0.4)"/>
                <circle cx="55" cy="65" r="3" fill="rgba(255,255,255,0.3)"/>
                <circle cx="35" cy="55" r="4" fill="rgba(255,255,255,0.35)"/>
              </svg>
              
              <div className="flex flex-col">
                <span 
                  className="header-logo-text font-display font-bold text-4xl"
                  style={{
                    background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '3px 3px 0px #000, 4px 4px 0px #000, 6px 6px 0px #fff',
                    animation: 'gradientShift 3s ease infinite',
                    lineHeight: 1
                  }}
                >
                  SoftWitch
                </span>
                <span 
                  className="header-tagline text-base font-semibold"
                  style={{
                    color: '#00ff88',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    letterSpacing: '0.5px',
                    marginTop: '5px'
                  }}
                >
                  Witchy vibes, zero pressure
                </span>
              </div>
            </Link>
            
            <div className="header-nav-links flex gap-8 items-center">
              <Link to="/birth-chart" className="header-nav-link">
                Birth Chart
              </Link>
              <Link to="/lore" className="header-nav-link">
                Lore
              </Link>
              <Link to="/projects" className="header-nav-link">
                Magic Tools
              </Link>
              <Link to="/about" className="header-nav-link">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
