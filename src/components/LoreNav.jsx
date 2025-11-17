import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const LORE_NAV = [
  { path: '/lore/roots', title: 'Roots' },
  { path: '/lore/cosmic-timing', title: 'Cosmic Timing' },
  { path: '/lore/moon-phases', title: 'Moon Phases' },
  { path: '/lore/rituals', title: 'Rituals' },
  { path: '/lore/guides', title: 'Guides' },
  { path: '/lore/inner-tools', title: 'Inner Tools' },
  { path: '/lore/spells', title: 'Spells & Potions' },
  { path: '/lore/solstice', title: 'Solstice & Equinox' },
  { path: '/lore/glossary', title: 'Glossary' }
];

export default function LoreNav() {
  const location = useLocation();
  const currentIndex = LORE_NAV.findIndex(item => item.path === location.pathname);
  const prevPage = currentIndex > 0 ? LORE_NAV[currentIndex - 1] : null;
  const nextPage = currentIndex < LORE_NAV.length - 1 ? LORE_NAV[currentIndex + 1] : null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-t border-dusty-lilac/30 pt-8 mt-12"
    >
      <div className="flex items-center justify-between text-sm">
        {/* Previous */}
        <div className="flex-1">
          {prevPage && (
            <Link
              to={prevPage.path}
              onClick={scrollToTop}
              className="text-glam-mauve hover:text-midnight-aubergine transition-colors inline-flex items-center gap-2"
            >
              <span>←</span>
              <span>{prevPage.title}</span>
            </Link>
          )}
        </div>

        {/* Back to Library */}
        <Link
          to="/lore"
          onClick={scrollToTop}
          className="text-midnight-aubergine/60 hover:text-glam-mauve transition-colors"
        >
          Back to Library
        </Link>

        {/* Next */}
        <div className="flex-1 text-right">
          {nextPage && (
            <Link
              to={nextPage.path}
              onClick={scrollToTop}
              className="text-glam-mauve hover:text-midnight-aubergine transition-colors inline-flex items-center gap-2"
            >
              <span>{nextPage.title}</span>
              <span>→</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
