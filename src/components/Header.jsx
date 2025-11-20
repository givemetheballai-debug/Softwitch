import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #ff1493 0%, #ffd700 50%, #00ff00 100%)',
      borderBottom: '5px solid white',
      boxShadow: '0 0 40px rgba(255, 20, 147, 0.6)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <nav className="max-w-6xl mx-auto px-10 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
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
            
            <div className="flex flex-col" style={{position: 'relative'}}>
              {/* Shadow layer - subtle behind */}
              <span 
                className="font-display font-bold text-4xl"
                style={{
                  position: 'absolute',
                  color: '#fff',
                  lineHeight: 1,
                  top: '4px',
                  left: '4px',
                  opacity: 0.5
                }}
              >
                SoftWitch
              </span>
              
              {/* Main readable black text */}
              <span 
                className="font-display font-bold text-4xl"
                style={{
                  color: '#000',
                  lineHeight: 1,
                  position: 'relative',
                  WebkitTextStroke: '2px #000',
                  paintOrder: 'stroke fill'
                }}
              >
                SoftWitch
              </span>
              
              {/* Gradient overlay */}
              <span 
                className="font-display font-bold text-4xl"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradientShift 3s ease infinite',
                  lineHeight: 1,
                  opacity: 0.7
                }}
              >
                SoftWitch
              </span>
              
              <span 
                className="text-base font-semibold"
                style={{
                  color: '#00ff88',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  letterSpacing: '0.5px',
                  marginTop: '8px'
                }}
              >
                Witchy vibes, zero pressure
              </span>
            </div>
          </Link>
          
          <div className="flex gap-8 items-center">
            <Link 
              to="/birth-chart"
              className="font-semibold text-lg"
              style={{
                color: '#000',
                textDecoration: 'none',
                padding: '10px 20px',
                background: 'white',
                borderRadius: '20px',
                border: '3px solid #ff00ff',
                transition: 'all 0.3s',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
              }}
            >
              Birth Chart
            </Link>
            <Link 
              to="/lore"
              className="font-semibold text-lg"
              style={{
                color: '#000',
                textDecoration: 'none',
                padding: '10px 20px',
                background: 'white',
                borderRadius: '20px',
                border: '3px solid #ff00ff',
                transition: 'all 0.3s',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
              }}
            >
              Lore
            </Link>
            <Link 
              to="/projects"
              className="font-semibold text-lg"
              style={{
                color: '#000',
                textDecoration: 'none',
                padding: '10px 20px',
                background: 'white',
                borderRadius: '20px',
                border: '3px solid #ff00ff',
                transition: 'all 0.3s',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
              }}
            >
              Magic Tools
            </Link>
            <Link 
              to="/about"
              className="font-semibold text-lg"
              style={{
                color: '#000',
                textDecoration: 'none',
                padding: '10px 20px',
                background: 'white',
                borderRadius: '20px',
                border: '3px solid #ff00ff',
                transition: 'all 0.3s',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
              }}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
