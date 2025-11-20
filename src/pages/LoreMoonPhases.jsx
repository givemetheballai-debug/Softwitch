import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LoreMoonPhases() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-sw-cream/60">
        <Link to="/lore" className="hover:text-sw-pink">Lore Library</Link>
        <span className="mx-2">→</span>
        <span>Moon Phases</span>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="y2k-hero"
      >
        <h1>🌙 Moon Phases</h1>
        <p>The OG mood ring in the sky</p>
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
          The moon cycles through phases every month, and you can use them as a vibe check for your own life. 
          New moon = fresh starts. Full moon = big feelings and letting go. It's not mystical, it's just a rhythm 
          that helps you tune into yourself. Think of it like checking the weather, but for your internal world.
        </p>
      </motion.div>

      {/* New Moon */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="polka-box-y2k"
      >
        <h3>🌑 New Moon — Fresh Start Energy</h3>
        <div className="space-y-3 mt-3">
          <p className="font-bold text-base">The vibe: Empty, quiet, potential</p>
          <p className="leading-relaxed">
            This is your cosmic reset button. Nothing exists yet, and that's the power. You don't need a huge plan — 
            just name one tiny thing you want to call in. Light a candle if you're feeling it. Start fresh.
          </p>
          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">Try this:</p>
            <p>Write down ONE thing you want to invite into your life this month. Keep it simple. Tape it somewhere you'll see it.</p>
          </div>
        </div>
      </motion.section>

      {/* Waxing Moon */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="game-card"
      >
        <h3>🌒 Waxing Moon — Build Mode</h3>
        <div className="space-y-3 mt-3">
          <p className="font-bold text-base">The vibe: Building, momentum, stacking wins</p>
          <p className="leading-relaxed">
            This is when you actually DO the thing. Take the idea from the new moon and add one small step. 
            Then another. Consistency beats intensity here — you're not sprinting, you're stacking tiny wins.
          </p>
          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">Try this:</p>
            <p>Add ONE action toward your new moon intention. Even if it's imperfect. Progress > perfection.</p>
          </div>
        </div>
      </motion.section>

      {/* Full Moon */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="magic-box-y2k"
      >
        <h3>🌕 Full Moon — Big Feelings Time</h3>
        <div className="space-y-3 mt-3">
          <p className="font-bold text-base">The vibe: Bright, revealing, heightened</p>
          <p className="leading-relaxed">
            Full moons bring stuff to the surface. Not because of magic, but because cycles peak. This is when you notice 
            what's working and what's not. It's clarity time — and also release time. Let go of what feels heavy.
          </p>
          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">Try this:</p>
            <p>Write down what's feeling heavy right now. Then literally throw it away, burn it (safely!), or delete it. Physical release = emotional release.</p>
          </div>
        </div>
      </motion.section>

      {/* Waning Moon */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="polka-box-y2k"
      >
        <h3>🌖 Waning Moon — Edit Your Life</h3>
        <div className="space-y-3 mt-3">
          <p className="font-bold text-base">The vibe: Clearing, simplifying, softening</p>
          <p className="leading-relaxed">
            Time to declutter — not just your closet, but your routines, your commitments, your mental load. 
            This phase is about lightening up. What can you remove? What can you simplify? Cosmic Marie Kondo energy.
          </p>
          <div className="bg-white/90 rounded-2xl p-4 text-black">
            <p className="font-bold mb-2">Try this:</p>
            <p>Remove ONE thing from your routine that drains you. Unsubscribe, cancel, delete, skip it. Give yourself permission.</p>
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
            You don't need to track every moon phase obsessively. Just check in when you remember. 
            Use it like a vibe calendar — a gentle reminder to tune into your own rhythm.
          </p>
          <p className="font-bold">This is NOT:</p>
          <p>❌ Predictive fortune-telling<br/>
          ❌ Something you have to do "right"<br/>
          ❌ A spiritual obligation</p>
          <p className="font-bold mt-3">This IS:</p>
          <p>✅ A grounding rhythm<br/>
          ✅ Pattern recognition for your internal world<br/>
          ✅ A tool that works if it helps you</p>
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
