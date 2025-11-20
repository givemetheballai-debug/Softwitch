import { motion } from 'framer-motion';
import LoreNav from '../components/LoreNav';

export default function LoreInnerTools() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Breadcrumb */}
      <div className="text-sm text-sw-yellow font-semibold">
        <span>Lore Library</span>
        <span className="mx-2">✨</span>
        <span>Inner Tools</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="y2k-hero"
      >
        <h1>
          🌙 Inner Tools 🌙
        </h1>
        <p>
          Soft questions, breathwork, and emotional navigation for everyday clarity.
        </p>
      </motion.div>

      <div className="text-center space-y-3 text-white text-lg">
        <p>Quiet tools that help you shift your inner world. Not rituals, not spells — just simple ways to soften and steady.</p>
        <p className="text-sw-pink font-semibold">Breathe. Notice. Use what feels lightest. ✨</p>
      </div>

      {/* Mantras */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <h2 className="section-title-y2k">✨ Mantras</h2>
        <p className="text-white text-center italic">Short lines that shift your internal state.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="magic-box-y2k">
            <p className="text-white">You're allowed to take your time.</p>
          </div>
          <div className="magic-box-y2k">
            <p className="text-white">Consistency matters less than returning.</p>
          </div>
          <div className="magic-box-y2k">
            <p className="text-white">You don't need a perfect plan, just a gentle start.</p>
          </div>
          <div className="magic-box-y2k">
            <p className="text-white">You can shift without explaining.</p>
          </div>
          <div className="magic-box-y2k">
            <p className="text-white">Soft doesn't mean small.</p>
          </div>
          <div className="magic-box-y2k">
            <p className="text-white">You can begin in the middle.</p>
          </div>
          <div className="magic-box-y2k">
            <p className="text-white">Honesty is clarity.</p>
          </div>
          <div className="magic-box-y2k">
            <p className="text-white">Move toward the lighter feeling.</p>
          </div>
          <div className="magic-box-y2k">
            <p className="text-white">Let yourself be surprised.</p>
          </div>
          <div className="magic-box-y2k">
            <p className="text-white">You don't need to earn rest.</p>
          </div>
        </div>
      </motion.section>

      {/* Breathwork */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="section-title-y2k">🌬️ Breathwork</h2>
        <p className="text-white text-center italic">Simple, effective. No woo. No overwhelm.</p>
        
        <div className="space-y-4">
          <div className="neon-card">
            <h3 className="mb-3">1. The 4–2–4 Softening Breath</h3>
            <p>Inhale for 4. Hold for 2. Exhale for 4. Repeat twice.</p>
            <p className="italic mt-2">A reset for your nervous system.</p>
          </div>

          <div className="polka-box-y2k">
            <h3 className="mb-3">2. The Foggy Window Breath</h3>
            <p>Exhale as if you're fogging up glass.</p>
            <p className="italic mt-2">Your system immediately lowers its guard.</p>
          </div>

          <div className="neon-card">
            <h3 className="mb-3">3. The One-Minute Reset</h3>
            <p>Take one deep breath with a long exhale. Repeat three times.</p>
            <p className="italic mt-2">For interrupting spirals.</p>
          </div>
        </div>
      </motion.section>

      {/* Emotional Navigation */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="section-title-y2k">💛 Emotional Navigation</h2>
        <p className="text-white text-center italic">Tools for feeling your feelings without getting stuck in them.</p>
        
        <div className="space-y-4">
          <div className="magic-box-y2k">
            <h2 className="font-serif text-2xl text-white mb-3">1. The Light vs Heavy Check</h2>
            <p className="text-white">Ask: Does this feel lighter or heavier? Follow lighter.</p>
          </div>

          <div className="magic-box-y2k">
            <h2 className="font-serif text-2xl text-white mb-3">2. The Two-Word Self-Check</h2>
            <p className="text-white">Name: What's happening / What I need. Two words each. Simple clarity.</p>
          </div>

          <div className="magic-box-y2k">
            <h2 className="font-serif text-2xl text-white mb-3">3. The Energy Leak Scan</h2>
            <p className="text-white">Identify one thing draining you today. Plug the leak in a tiny way.</p>
          </div>

          <div className="magic-box-y2k">
            <h2 className="font-serif text-2xl text-white mb-3">4. The Feeling vs Problem Question</h2>
            <p className="text-white">Ask: Is this a feeling, or a problem? Handle accordingly.</p>
          </div>
        </div>
      </motion.section>

      {/* Soft Questions */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-6"
      >
        <h2 className="section-title-y2k">🪞 Soft Questions</h2>
        <p className="text-white text-center italic">Questions that gently reveal what you already know.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="polka-box-y2k"><p>What feels tight?</p></div>
          <div className="polka-box-y2k"><p>What feels tender?</p></div>
          <div className="polka-box-y2k"><p>What wants more space?</p></div>
          <div className="polka-box-y2k"><p>What am I avoiding because it matters?</p></div>
          <div className="polka-box-y2k"><p>What feels true underneath the noise?</p></div>
          <div className="polka-box-y2k"><p>What would feel softer right now?</p></div>
          <div className="polka-box-y2k"><p>What would help future-me?</p></div>
          <div className="polka-box-y2k"><p>What can I let go of today?</p></div>
          <div className="polka-box-y2k"><p>Where do I feel resistance?</p></div>
          <div className="polka-box-y2k"><p>What tiny action would shift the vibe?</p></div>
        </div>
      </motion.section>

      {/* Grounding Tools */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-6"
      >
        <h2 className="section-title-y2k">🫀 Grounding Tools</h2>
        <p className="text-white text-center italic">Simple ways to return to your body.</p>
        
        <div className="space-y-4">
          <div className="neon-card">
            <h3 className="mb-3">1. Hand-to-Heart Reset</h3>
            <p>One hand on chest. One breath. You're back.</p>
          </div>

          <div className="polka-box-y2k">
            <h3 className="mb-3">2. Three Sensory Anchors</h3>
            <p>Name: one thing you see, one thing you hear, one thing you feel. Instant presence.</p>
          </div>

          <div className="neon-card">
            <h3 className="mb-3">3. The Chair Drop</h3>
            <p>Sit. Let your full weight drop downward. Release your shoulders. Grounded.</p>
          </div>

          <div className="polka-box-y2k">
            <h3 className="mb-3">4. Warm Hands Technique</h3>
            <p>Rub your hands together. Cup them over your face. Instant calm.</p>
          </div>
        </div>
      </motion.section>

      {/* Identity Softeners */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="space-y-6"
      >
        <h2 className="section-title-y2k">🧭 Identity Softeners</h2>
        <p className="text-white text-center italic">Tiny reframes that shift how you see yourself.</p>
        
        <div className="grid gap-3">
          <div className="magic-box-y2k"><p className="text-white">"I'm someone who returns."</p></div>
          <div className="magic-box-y2k"><p className="text-white">"I'm someone who tries again."</p></div>
          <div className="magic-box-y2k"><p className="text-white">"I'm someone who chooses softness over urgency."</p></div>
          <div className="magic-box-y2k"><p className="text-white">"I'm someone who listens to my own signals."</p></div>
          <div className="magic-box-y2k"><p className="text-white">"I'm someone who gives myself time."</p></div>
        </div>
      </motion.section>

      {/* Permission Slips */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-6"
      >
        <h2 className="section-title-y2k">🎯 Permission Slips</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="neon-card"><p>You're allowed to be a person.</p></div>
          <div className="neon-card"><p>You're allowed to start over.</p></div>
          <div className="neon-card"><p>You're allowed to want something different.</p></div>
          <div className="neon-card"><p>You're allowed to take breaks.</p></div>
          <div className="neon-card"><p>You're allowed to say no.</p></div>
          <div className="neon-card"><p>You're allowed to not be impressive today.</p></div>
          <div className="neon-card"><p>You're allowed to outgrow things.</p></div>
          <div className="neon-card"><p>You're allowed to not have an opinion yet.</p></div>
        </div>
      </motion.section>

      {/* How to Use */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="house-rules-y2k text-center"
      >
        <h2 className="text-3xl mb-4">🌟 How to Use These Tools</h2>
        <p className="text-xl">Just pick the thing that feels lightest. Let it shift the moment.</p>
        <p className="font-bold text-2xl mt-4">That's enough. ✨</p>
      </motion.section>

      {/* Navigation */}
      <LoreNav />
    </div>
  );
}
