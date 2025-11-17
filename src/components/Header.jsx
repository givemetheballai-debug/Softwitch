import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-midnight-aubergine/5 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl text-midnight-aubergine hover:text-glam-mauve transition-colors">
            SoftWitch
          </Link>
          
          <div className="flex gap-6 items-center">
            <Link to="/birth-chart" className="text-sm hover:text-glam-mauve transition-colors">
              Birth Chart
            </Link>
            <Link to="/lore" className="text-sm hover:text-glam-mauve transition-colors">
              Lore
            </Link>
            <Link to="/projects" className="text-sm hover:text-glam-mauve transition-colors">
              Projects
            </Link>
            <Link to="/about" className="text-sm hover:text-glam-mauve transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
