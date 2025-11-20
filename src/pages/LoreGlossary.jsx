import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LoreGlossary() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-sw-cream/60">
        <Link to="/lore" className="hover:text-sw-pink">Lore Library</Link>
        <span className="mx-2">→</span>
        <span>Cosmic Glossary</span>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="y2k-hero"
      >
        <h1>📖 Cosmic Glossary</h1>
        <p>Words you'll pretend you always knew</p>
      </motion.div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="neon-card"
      >
        <h3 className="mb-3">What's This?</h3>
        <p className="leading-relaxed">
          A cheat sheet for all the SoftWitch language you'll see across the site. No gatekeeping, no weird mystical jargon — 
          just clear definitions so you know what we're talking about. Think of it as your cosmic dictionary.
        </p>
      </motion.div>

      {/* Core Terms */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="space-y-3"
      >
        <h2 className="section-title-y2k">The Basics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Ritual</p>
            <p className="text-sw-cream/80 text-sm">A tiny, intentional action that shifts your energy</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Season</p>
            <p className="text-sw-cream/80 text-sm">Your current internal energy state (Active, Quiet, Expansion, Transition)</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Signal</p>
            <p className="text-sw-cream/80 text-sm">A small pull, a gentle nudge, your intuition saying "yes"</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Pattern</p>
            <p className="text-sw-cream/80 text-sm">Something you keep noticing — a repeat, a theme, a cue</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Portal</p>
            <p className="text-sw-cream/80 text-sm">A transition moment when something ends or begins</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Release</p>
            <p className="text-sw-cream/80 text-sm">Letting go of something heavy, stuck, or no longer needed</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Soft Magic</p>
            <p className="text-sw-cream/80 text-sm">Tiny practices that make your day better — not supernatural, just intentional</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Glow</p>
            <p className="text-sw-cream/80 text-sm">Something that pulls you forward — not logical, but undeniable</p>
          </div>
        </div>
      </motion.section>

      {/* Energy Terms */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="space-y-3"
      >
        <h2 className="section-title-y2k">Energy & Feels</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Alignment</p>
            <p className="text-sw-cream/80 text-sm">When your choices match your values and energy</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Clarity</p>
            <p className="text-sw-cream/80 text-sm">When a question feels lighter than it did before</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Grounding</p>
            <p className="text-sw-cream/80 text-sm">Coming back into your body; regulating your energy</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Expansion</p>
            <p className="text-sw-cream/80 text-sm">The feeling of opening — curiosity, creativity, inspiration</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Quiet</p>
            <p className="text-sw-cream/80 text-sm">Lower internal energy; a call to soften, pause, or rest</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Insight</p>
            <p className="text-sw-cream/80 text-sm">A small flash of clarity landing softly</p>
          </div>
        </div>
      </motion.section>

      {/* Timing Terms */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="space-y-3"
      >
        <h2 className="section-title-y2k">Timing & Cycles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Cycle</p>
            <p className="text-sw-cream/80 text-sm">A natural rhythm (moon phases, internal seasons, emotional patterns)</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Phase</p>
            <p className="text-sw-cream/80 text-sm">A temporary energetic state in a cycle</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Threshold</p>
            <p className="text-sw-cream/80 text-sm">A moment right before a shift — often emotional or intuitive</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Portal</p>
            <p className="text-sw-cream/80 text-sm">When one thing ends and another begins</p>
          </div>
        </div>
      </motion.section>

      {/* Helpful Tools */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="space-y-3"
      >
        <h2 className="section-title-y2k">Helpful Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Anchor</p>
            <p className="text-sw-cream/80 text-sm">A sensory cue that brings you into the moment (breath, light, sound, scent)</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Spark</p>
            <p className="text-sw-cream/80 text-sm">A moment of interest or curiosity worth following</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Reset</p>
            <p className="text-sw-cream/80 text-sm">A small moment where you begin again — no overhaul needed</p>
          </div>

          <div className="bg-gradient-to-br from-sw-purple/20 to-sw-pink/20 rounded-xl p-4 border-2 border-sw-teal/30">
            <p className="font-bold text-white mb-1">Micro-Win</p>
            <p className="text-sw-cream/80 text-sm">A tiny success that builds trust and momentum</p>
          </div>
        </div>
      </motion.section>

      {/* Guides vs Rituals */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="polka-box-y2k"
      >
        <h3 className="text-center mb-4">Guides vs Rituals (What's the Difference?)</h3>
        
        <div className="space-y-4">
          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">GUIDES = Understanding</p>
            <p className="text-sm">They explain the moment. Give you clarity, perspective, emotional intelligence. It's the "why" and "how to think about it."</p>
          </div>

          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">RITUALS = Doing</p>
            <p className="text-sm">They shift the moment. Tiny actions that change your energy right now. It's the "what to do next."</p>
          </div>

          <p className="text-center font-bold text-lg mt-4">Together = the SoftWitch way ✨</p>
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
