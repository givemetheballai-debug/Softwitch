import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LoreCosmicTiming() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-sw-cream/60">
        <Link to="/lore" className="hover:text-sw-pink">Lore Library</Link>
        <span className="mx-2">→</span>
        <span>Cosmic Timing</span>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="y2k-hero"
      >
        <h1>🌀 Cosmic Timing</h1>
        <p>Your personal seasons (hint: they're not the weather)</p>
      </motion.div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="neon-card"
      >
        <h3 className="mb-3">What's This About?</h3>
        <p className="leading-relaxed">
          Life moves in cycles — beginnings, growth, peaks, endings, rest. You don't need astrology to understand timing, 
          you just need to notice your patterns. This is about recognizing where YOU are in YOUR rhythm, 
          so you stop fighting yourself and start working with your energy instead.
        </p>
      </motion.div>

      {/* The 4 Internal Seasons */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="space-y-4"
      >
        <h2 className="section-title-y2k">Your 4 Internal Seasons</h2>

        {/* Active Season */}
        <div className="polka-box-y2k">
          <h3>🔥 Active Season — Go Time</h3>
          <div className="space-y-3 mt-3">
            <p className="font-bold text-base">The vibe: High energy, movement, momentum</p>
            <p className="leading-relaxed">
              You feel READY. This is when you start things, make decisions, build momentum. You've got the gas in the tank, 
              so use it. Don't overthink — just do the thing you keep thinking about.
            </p>
            <div className="bg-white/90 rounded-2xl p-4 text-black">
              <p className="font-bold mb-2">When you're here:</p>
              <p>Take action. Say yes to opportunities. Start the project. Make the move. Your energy supports it.</p>
            </div>
          </div>
        </div>

        {/* Expansion Season */}
        <div className="game-card">
          <h3>✨ Expansion Season — Explore Mode</h3>
          <div className="space-y-3 mt-3">
            <p className="font-bold text-base">The vibe: Curious, creative, open</p>
            <p className="leading-relaxed">
              You're in learning mode. New ideas spark. You want to try things, explore possibilities, follow fascinations. 
              This isn't about finishing — it's about discovering. Let yourself be curious without pressure.
            </p>
            <div className="bg-white/90 rounded-2xl p-4 text-black">
              <p className="font-bold mb-2">When you're here:</p>
              <p>Follow your curiosity. Try new things. Read widely. Talk to interesting people. Play.</p>
            </div>
          </div>
        </div>

        {/* Quiet Season */}
        <div className="magic-box-y2k">
          <h3>🌙 Quiet Season — Rest Mode</h3>
          <div className="space-y-3 mt-3">
            <p className="font-bold text-base">The vibe: Low energy, internal, slow</p>
            <p className="leading-relaxed">
              You're in recovery mode. Everything feels harder. You need more rest, more softness, more space. 
              This isn't laziness — it's your system recharging. Honor it. Reduce demands. Add gentleness.
            </p>
            <div className="bg-white/90 rounded-2xl p-4 text-black">
              <p className="font-bold mb-2">When you're here:</p>
              <p>Do less. Say no more often. Simplify your routines. Give yourself permission to just BE.</p>
            </div>
          </div>
        </div>

        {/* Transition Season */}
        <div className="polka-box-y2k">
          <h3>🌀 Transition Season — In-Between Mode</h3>
          <div className="space-y-3 mt-3">
            <p className="font-bold text-base">The vibe: Uncertain, shifting, messy</p>
            <p className="leading-relaxed">
              You're between phases. Not where you were, not where you're going. It's uncomfortable, emotional, unclear. 
              This is the hardest season to be in, but it's where the most growth happens. Stay with it. Don't rush.
            </p>
            <div className="bg-white/90 rounded-2xl p-4 text-black">
              <p className="font-bold mb-2">When you're here:</p>
              <p>Notice more, do less. Journal. Talk to people you trust. Let the uncertainty show you where to go next.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How to Use */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="neon-card"
      >
        <h3 className="mb-3">How to Actually Use This</h3>
        <div className="space-y-3">
          <p className="leading-relaxed">
            Check in with yourself regularly: "What season am I in right now?" Then adjust your expectations accordingly. 
            Stop judging yourself for not being "consistent" — your energy HAS seasons. Work with them, not against them.
          </p>
          <p className="font-bold">The goal isn't to control your seasons.</p>
          <p>The goal is to recognize them and respond accordingly.</p>
        </div>
      </motion.section>

      {/* Back to Library */}
      <div className="text-center pt-4">
        <Link 
          to="/lore" 
          className="inline-block bg-sw-pink text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform border-4 border-white"
          style={{ boxShadow: '4px 4px 0px #6b4ba1' }}
        >
          ← Back to Lore Library
        </Link>
      </div>
    </div>
  );
}
