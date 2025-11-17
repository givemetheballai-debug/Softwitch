import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LORE_SECTIONS = [
  {
    id: 'roots',
    emoji: '🔮',
    title: 'The Roots of Modern Witchcraft & Astrology',
    description: "It's the context.",
    path: '/lore/roots'
  },
  {
    id: 'cosmic-timing',
    emoji: '🌀',
    title: 'Cosmic Timing & Internal Seasons',
    description: "It's the map.",
    path: '/lore/cosmic-timing'
  },
  {
    id: 'moon-phases',
    emoji: '🌙',
    title: 'Moon Phases',
    description: "It's the clock.",
    path: '/lore/moon-phases'
  },
  {
    id: 'rituals',
    emoji: '✨',
    title: 'Rituals',
    description: "It's the micro-action layer.",
    path: '/lore/rituals'
  },
  {
    id: 'guides',
    emoji: '🧭',
    title: 'Guides',
    description: "It's the understanding layer.",
    path: '/lore/guides'
  },
  {
    id: 'inner-tools',
    emoji: '💛',
    title: 'Inner Tools',
    description: "It's the inner regulation layer.",
    path: '/lore/inner-tools'
  },
  {
    id: 'spells',
    emoji: '🌿',
    title: 'Spells & Potions',
    description: "It's the play layer.",
    path: '/lore/spells'
  },
  {
    id: 'solstice',
    emoji: '☀️',
    title: 'Solstice & Equinox Guide',
    description: "It's the celebration layer.",
    path: '/lore/solstice'
  },
  {
    id: 'glossary',
    emoji: '📖',
    title: 'Cosmic Glossary',
    description: "It's the index.",
    path: '/lore/glossary'
  }
];

export default function Lore() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 max-w-3xl mx-auto"
      >
        <h1 className="font-serif text-5xl text-midnight-aubergine">
          🌙 The Lore Library
        </h1>
        <p className="text-lg text-midnight-aubergine/80 leading-relaxed">
          Learn the foundations of modern magic — from moon phases to solstices, rituals to emotional tools. Everything you need to understand magical practices and apply them to your everyday life. Designed for release, intention-setting, clarity, and gentle transformation.
        </p>
      </motion.div>

      {/* Grid of Lore Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {LORE_SECTIONS.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Link
              to={section.path}
              className="block bg-dusty-lilac/20 rounded-lg p-6 hover:bg-dusty-lilac/30 transition-all hover:shadow-lg hover:shadow-glam-mauve/10 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {section.emoji}
              </div>
              <h3 className="font-serif text-xl text-midnight-aubergine mb-2 group-hover:text-glam-mauve transition-colors">
                {section.title}
              </h3>
              <p className="text-sm text-midnight-aubergine/60 italic">
                {section.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Framework Overview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center space-y-4 max-w-2xl mx-auto pt-8 border-t border-dusty-lilac/30"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">
          🌙 The SoftWitch Framework
        </h2>
        <p className="text-midnight-aubergine/70">
          Your Lore Library teaches SoftWitch as a complete system:
        </p>
        <div className="text-sm text-midnight-aubergine/60 space-y-1">
          <p>Roots — context</p>
          <p>Timing — cycles</p>
          <p>Moon — rhythm</p>
          <p>Rituals — action</p>
          <p>Guides — understanding</p>
          <p>Inner Tools — emotional regulation</p>
          <p>Spells — playful magic</p>
          <p>Solstice — celebration</p>
          <p>Glossary — reference</p>
        </div>
      </motion.div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-sm text-midnight-aubergine/60 italic"
      >
        <p>The library grows with intention and curiosity.</p>
      </motion.div>
    </div>
  );
}
