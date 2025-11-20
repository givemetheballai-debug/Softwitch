import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LORE_SECTIONS = [
  {
    id: 'roots',
    emoji: '🔮',
    title: 'Modern Magic 101',
    description: "Where this all came from (the fun version)",
    path: '/lore/roots'
  },
  {
    id: 'cosmic-timing',
    emoji: '🌀',
    title: 'Cosmic Timing',
    description: "Your personal seasons (hint: they're not the weather)",
    path: '/lore/cosmic-timing'
  },
  {
    id: 'moon-phases',
    emoji: '🌙',
    title: 'Moon Phases',
    description: "The OG mood ring in the sky",
    path: '/lore/moon-phases'
  },
  {
    id: 'rituals',
    emoji: '✨',
    title: 'Rituals',
    description: "Tiny actions, major vibes",
    path: '/lore/rituals'
  },
  {
    id: 'guides',
    emoji: '🧭',
    title: 'Guides',
    description: "The cheat codes you actually need",
    path: '/lore/guides'
  },
  {
    id: 'inner-tools',
    emoji: '💛',
    title: 'Inner Tools',
    description: "Emotional regulation but make it cute",
    path: '/lore/inner-tools'
  },
  {
    id: 'spells',
    emoji: '🌿',
    title: 'Spells & Potions',
    description: "The fun stuff (yes, really)",
    path: '/lore/spells'
  },
  {
    id: 'solstice',
    emoji: '☀️',
    title: 'Solstice & Equinox',
    description: "Seasonal parties the universe throws",
    path: '/lore/solstice'
  },
  {
    id: 'glossary',
    emoji: '📖',
    title: 'Cosmic Glossary',
    description: "Words you'll pretend you always knew",
    path: '/lore/glossary'
  }
];

export default function Lore() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="y2k-hero"
      >
        <h1>The Lore Library 📚✨</h1>
        <p>Magic school but fun (no homework, we promise)</p>
      </motion.div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="neon-card text-center"
      >
        <h3 className="mb-3">What's This?</h3>
        <p className="text-base leading-relaxed">
          Everything you need to understand moon phases, rituals, cosmic timing, and how to actually use magic in your regular life. 
          No gatekeeping, no weird vibes, just the fun stuff that works. Think of it as your cosmic cheat sheet.
        </p>
      </motion.div>

      {/* Grid of Lore Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {LORE_SECTIONS.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index }}
          >
            <Link
              to={section.path}
              className="block bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-2xl p-5 hover:from-sw-purple/30 hover:to-sw-pink/30 transition-all border-2 border-sw-teal/30 hover:border-sw-teal hover:scale-105"
            >
              <div className="text-4xl mb-3 transition-transform group-hover:scale-110">
                {section.emoji}
              </div>
              <h3 className="font-serif text-lg text-white mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-sw-cream/80">
                {section.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="game-card text-center"
      >
        <h3 className="mb-3">Pages Coming Soon! 🚀</h3>
        <p className="text-base">
          We're building out each section with the perfect mix of useful info and zero pretension. 
          Subscribe to get notified when new pages drop (or just check back, we're not gonna guilt trip you).
        </p>
      </motion.div>
    </div>
  );
}
