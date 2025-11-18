import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            {/* Moon + Stars Logo */}
            <svg width="40" height="40" viewBox="0 0 120 100" className="flex-shrink-0">
              <path 
                className="fill-sw-pink" 
                style={{ filter: 'drop-shadow(0 2px 8px rgba(255, 107, 157, 0.3))' }}
                d="M45 8 C28 8 15 21 15 38 C15 55 28 68 45 68 C35 68 28 61 28 38 C28 15 35 8 45 8 Z"
              />
              <circle className="fill-sw-yellow" cx="70" cy="25" r="6"/>
              <path stroke="#f4c761" strokeWidth="3" d="M70 16 L70 34 M61 25 L79 25" fill="none"/>
              <circle className="fill-sw-yellow" cx="25" cy="18" r="4"/>
              <path stroke="#f4c761" strokeWidth="2" d="M25 12 L25 24 M19 18 L31 18" fill="none"/>
              <circle className="fill-sw-yellow" cx="88" cy="55" r="4.5"/>
              <circle className="fill-sw-yellow" cx="102" cy="35" r="3"/>
              <circle className="fill-sw-yellow" cx="18" cy="65" r="3"/>
            </svg>
            
            <div className="flex flex-col">
              {/* Logo Text */}
              <span 
                className="font-display font-bold text-3xl text-gradient-logo"
                style={{ letterSpacing: '-0.5px' }}
              >
                SoftWitch
              </span>
              {/* Tagline */}
              <span className="font-serif italic text-xs text-sw-purple/70 -mt-1">
                Modern magic for smart adults
              </span>
            </div>
          </Link>
          
          <div className="flex gap-8 items-center">
            <Link 
              to="/birth-chart" 
              className="text-sm font-medium text-sw-purple hover:text-sw-pink transition-colors"
            >
              Birth Chart
            </Link>
            <Link 
              to="/lore" 
              className="text-sm font-medium text-sw-purple hover:text-sw-pink transition-colors"
            >
              Lore
            </Link>
            <Link 
              to="/projects" 
              className="text-sm font-medium text-sw-purple hover:text-sw-pink transition-colors"
            >
              Magic Tools
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-sw-purple hover:text-sw-pink transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
