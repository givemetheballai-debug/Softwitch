import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LoreGuides() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-sw-cream/60">
        <Link to="/lore" className="hover:text-sw-pink">Lore Library</Link>
        <span className="mx-2">→</span>
        <span>Guides</span>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="y2k-hero"
      >
        <h1>🧭 Guides</h1>
        <p>The cheat codes you actually need</p>
      </motion.div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="neon-card"
      >
        <h3 className="mb-3">What Are Guides?</h3>
        <p className="leading-relaxed">
          Short, practical frameworks for navigating real human moments. No mystical BS, just gentle tools for everyday clarity. 
          Think of these as your emotional cheat sheets — the "how to" when life gets messy.
        </p>
      </motion.div>

      {/* Guide 1: Reconnect With Intuition */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="polka-box-y2k"
      >
        <h3>✨ How to Reconnect With Intuition</h3>
        <div className="space-y-3 mt-3">
          <p className="leading-relaxed">
            Intuition isn't loud — it's the first quiet thing you feel before your brain starts explaining everything. 
            You don't force it, you soften into it.
          </p>
          
          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">Try this:</p>
            <p className="text-sm mb-2">• Ask small questions, not big ones</p>
            <p className="text-sm mb-2">• Notice micro-reactions in your body</p>
            <p className="text-sm mb-2">• Follow what softens you, not what tightens you</p>
            <p className="text-sm">• Decrease input — less scrolling, more pausing</p>
          </div>

          <p className="font-bold text-sm">Remember: Intuition nudges. It doesn't shout.</p>
        </div>
      </motion.section>

      {/* Guide 2: Navigate Uncertainty */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="game-card"
      >
        <h3>🔮 How to Navigate Uncertainty</h3>
        <div className="space-y-3 mt-3">
          <p className="leading-relaxed">
            Uncertainty is a transition, not a failure. You don't push through it — you move with it.
          </p>
          
          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">Try this:</p>
            <p className="text-sm mb-2">• Name it: "This is a transition moment"</p>
            <p className="text-sm mb-2">• Lower the stakes</p>
            <p className="text-sm mb-2">• Let life be messy for a minute</p>
            <p className="text-sm">• Create small anchors: one consistent thing</p>
          </div>

          <p className="font-bold text-sm">Remember: Clarity comes after movement, not before.</p>
        </div>
      </motion.section>

      {/* Guide 3: Reset Routines */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="magic-box-y2k"
      >
        <h3>🌱 How to Reset Your Routines</h3>
        <div className="space-y-3 mt-3">
          <p className="leading-relaxed">
            A reset should feel like a breath out — not a punishment.
          </p>
          
          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">Try this:</p>
            <p className="text-sm mb-2">• Remove ONE step, not ten</p>
            <p className="text-sm mb-2">• Choose "relief," not "discipline"</p>
            <p className="text-sm mb-2">• Add a sensory cue: light, sound, breath</p>
            <p className="text-sm">• Make everything optional at first</p>
          </div>

          <p className="font-bold text-sm">Remember: Small rituals > big overhauls.</p>
        </div>
      </motion.section>

      {/* Guide 4: Build Trust With Yourself */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="polka-box-y2k"
      >
        <h3>💞 How to Build Trust With Yourself</h3>
        <div className="space-y-3 mt-3">
          <p className="leading-relaxed">
            Self-trust isn't a big breakthrough — it's micro-evidence collected over time.
          </p>
          
          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">Try this:</p>
            <p className="text-sm mb-2">• Make a tiny promise and keep it</p>
            <p className="text-sm mb-2">• Track moments where you followed through</p>
            <p className="text-sm mb-2">• Choose one thing each day that feels true</p>
            <p className="text-sm">• Notice when you honor your "no"</p>
          </div>

          <p className="font-bold text-sm">Remember: Trust = tiny kept promises.</p>
        </div>
      </motion.section>

      {/* Guide 5: Set Boundaries */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="game-card"
      >
        <h3>🛡 How to Set Boundaries Without Guilt</h3>
        <div className="space-y-3 mt-3">
          <p className="leading-relaxed">
            A boundary isn't mean — it's self-preservation.
          </p>
          
          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">Try this:</p>
            <p className="text-sm mb-2">• Start small: say "no" to one thing this week</p>
            <p className="text-sm mb-2">• You don't owe an explanation</p>
            <p className="text-sm mb-2">• Practice: "That doesn't work for me"</p>
            <p className="text-sm">• Notice who respects your boundaries</p>
          </div>

          <p className="font-bold text-sm">Remember: Discomfort ≠ wrongness.</p>
        </div>
      </motion.section>

      {/* Guide 6: Ground When Overwhelmed */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="magic-box-y2k"
      >
        <h3>⚓ How to Ground When Overwhelmed</h3>
        <div className="space-y-3 mt-3">
          <p className="leading-relaxed">
            You don't need to interpret the emotion — just hold it.
          </p>
          
          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">Try this:</p>
            <p className="text-sm mb-2">• Breathe into your chest, not your thoughts</p>
            <p className="text-sm mb-2">• Put both feet on the floor</p>
            <p className="text-sm mb-2">• Touch something with texture</p>
            <p className="text-sm">• Hold something warm or cold for 30 seconds</p>
          </div>

          <p className="font-bold text-sm">Remember: Ground first, analyze later.</p>
        </div>
      </motion.section>

      {/* Guide 7: Follow the Quiet Pull */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="polka-box-y2k"
      >
        <h3>✨ How to Follow the Quiet Pull</h3>
        <div className="space-y-3 mt-3">
          <p className="leading-relaxed">
            A "signal" is the soft tug toward something that feels right.
          </p>
          
          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">Try this:</p>
            <p className="text-sm mb-2">• Pay attention to what sparks</p>
            <p className="text-sm mb-2">• Notice what keeps showing up</p>
            <p className="text-sm mb-2">• Track your fascinations</p>
            <p className="text-sm">• Follow the pull, not the push</p>
          </div>

          <p className="font-bold text-sm">Remember: The universe whispers. Your job is to notice.</p>
        </div>
      </motion.section>

      {/* Guide 8: Release What's Stuck */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="game-card"
      >
        <h3>🌀 How to Release What's Stuck</h3>
        <div className="space-y-3 mt-3">
          <p className="leading-relaxed">
            Release is a shift — not a purge.
          </p>
          
          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">Try this:</p>
            <p className="text-sm mb-2">• Name what feels heavy</p>
            <p className="text-sm mb-2">• Move your body</p>
            <p className="text-sm mb-2">• Do a Scream Into The Void</p>
            <p className="text-sm">• Ask: "Is this mine to carry?"</p>
          </div>

          <p className="font-bold text-sm">Remember: Letting go = series of tiny moments.</p>
        </div>
      </motion.section>

      {/* Guide 9: Recognize Your Internal Season */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="magic-box-y2k"
      >
        <h3>🗺 How to Recognize Your Internal Season</h3>
        <div className="space-y-3 mt-3">
          <p className="leading-relaxed">
            Your energy has seasons — and they shift.
          </p>
          
          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">The 4 Seasons:</p>
            <p className="text-sm mb-2">• Active → ready to move</p>
            <p className="text-sm mb-2">• Quiet → need rest</p>
            <p className="text-sm mb-2">• Expansion → feeling creative</p>
            <p className="text-sm">• Transition → in flux</p>
          </div>

          <p className="font-bold text-sm">Remember: You're not inconsistent — you're seasonal.</p>
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
