import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="font-serif text-6xl md:text-7xl text-midnight-aubergine">
          ✨ SoftWitch
        </h1>
        <p className="text-2xl font-semibold text-glam-mauve">
          Modern magic for smart adults.
        </p>
        <p className="text-lg text-midnight-aubergine/80 max-w-2xl mx-auto">
          Intuition, creativity, and a little bit of magic —<br />
          witchcraft for people who love clarity, design, and good vibes.
        </p>
        <div className="flex gap-4 justify-center pt-4 flex-wrap">
          <Link 
            to="/birth-chart"
            className="bg-glam-mauve text-champagne px-6 py-3 rounded-lg hover:bg-midnight-aubergine transition-colors font-medium"
          >
            Birth Chart
          </Link>
          <Link 
            to="/lore"
            className="bg-glam-mauve text-champagne px-6 py-3 rounded-lg hover:bg-midnight-aubergine transition-colors font-medium"
          >
            Lore Library
          </Link>
          <Link 
            to="/projects"
            className="bg-glam-mauve text-champagne px-6 py-3 rounded-lg hover:bg-midnight-aubergine transition-colors font-medium"
          >
            Magic Tools
          </Link>
        </div>
      </motion.div>

      {/* Cosmic Snapshot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-midnight-aubergine/5 rounded-lg p-8 text-center"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine mb-4">
          🌘 Today's Cosmic Snapshot
        </h2>
        <p className="text-lg font-medium text-midnight-aubergine mb-2">
          {dateStr}
        </p>
        <p className="text-midnight-aubergine/80">
          Waning Crescent — Rest, reflection, and surrender<br />
          Late Autumn — A season for release
        </p>
      </motion.div>

      {/* Start Here */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="font-serif text-3xl text-midnight-aubergine mb-3">
            🌿 Start Here
          </h2>
          <p className="text-midnight-aubergine/80">
            A tiny moment of soft magic before you explore.<br />
            Slow down, take one breath, and choose what feels lightest.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-midnight-aubergine/5 rounded-lg p-6">
            <h3 className="font-serif text-xl text-midnight-aubergine mb-3">
              A tiny moment of soft magic
            </h3>
            <p className="text-sm text-midnight-aubergine/80">
              Put your hand on your chest and ask:<br />
              "What do I actually need right now?"
            </p>
          </div>
          
          <div className="bg-midnight-aubergine/5 rounded-lg p-6">
            <h3 className="font-serif text-xl text-midnight-aubergine mb-3">
              Take a moment for a ritual
            </h3>
            <p className="text-sm text-midnight-aubergine/80">
              Take one slow breath.<br />
              Relax your jaw.<br />
              Begin again.
            </p>
          </div>
          
          <div className="bg-midnight-aubergine/5 rounded-lg p-6">
            <h3 className="font-serif text-xl text-midnight-aubergine mb-3">
              A grounding moment
            </h3>
            <p className="text-sm text-midnight-aubergine/80">
              Soften your shoulders.<br />
              Drop your attention back into your body.<br />
              This is where your magic lives.
            </p>
          </div>
        </div>
      </motion.div>

      {/* House Rules */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-midnight-aubergine/5 rounded-lg p-8"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine text-center mb-4">
          🔮 House Rules
        </h2>
        <p className="text-center text-midnight-aubergine/80 mb-6">
          How to move through this universe.
        </p>
        <div className="space-y-2 text-sm text-midnight-aubergine/90">
          <p>Everything here is an invitation, not a prescription.</p>
          <p>Magic is just pattern recognition with better lighting.</p>
          <p>Nothing here is mystical — just meaningful.</p>
          <p>Keep it soft, simple, and grounded.</p>
          <p>Touch your chest and breathe when things feel weird.</p>
          <p>Tiny rituals beat big overhauls.</p>
          <p>You're not here to be fixed — just to explore.</p>
          <p>Follow your curiosity. Trust your intuition.</p>
          <p>Every room should feel good to be in.</p>
          <p>AI helped build this — the intention is all human.</p>
        </div>
      </motion.div>

      {/* What You Can Do Here */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-6"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine text-center">
          🌟 What You Can Do Here
        </h2>
        <p className="text-center text-midnight-aubergine/80 mb-8">
          SoftWitch is a constellation of soft, modern tools for clarity, release, and play.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-midnight-aubergine/5 rounded-lg p-6">
            <h3 className="font-serif text-2xl text-glam-mauve mb-3">
              → Birth Chart
            </h3>
            <p className="text-sm text-midnight-aubergine/80">
              A simple, modern cosmic profile — your core energy, emotional baseline, and vibe.
            </p>
          </div>
          
          <div className="bg-midnight-aubergine/5 rounded-lg p-6">
            <h3 className="font-serif text-2xl text-glam-mauve mb-3">
              → Lore Library
            </h3>
            <p className="text-sm text-midnight-aubergine/80">
              Moon phases, internal seasons, rituals, guides, spells, timing, history, and more.
            </p>
          </div>
          
          <div className="bg-midnight-aubergine/5 rounded-lg p-6">
            <h3 className="font-serif text-2xl text-glam-mauve mb-3">
              → Magic Tools
            </h3>
            <p className="text-sm text-midnight-aubergine/80">
              Scream Into the Void, rituals, mini-games, and clarity tools for everyday magic.
            </p>
          </div>
          
          <div className="bg-midnight-aubergine/5 rounded-lg p-6">
            <h3 className="font-serif text-2xl text-glam-mauve mb-3">
              → About Jamie
            </h3>
            <p className="text-sm text-midnight-aubergine/80">
              The creator behind SoftWitch — intuition, product strategy, and modern magic.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center space-y-4 pt-8"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">
          🌙 SoftWitch Philosophy
        </h2>
        <p className="text-midnight-aubergine/80 max-w-2xl mx-auto">
          A tiny cosmic universe built with intuition, product thinking, and AI.
        </p>
        <p className="text-sm text-midnight-aubergine/70 max-w-xl mx-auto">
          A tiny reminder before you explore:<br />
          Everything here meets you where you are.
        </p>
      </motion.div>
    </div>
  );
}
