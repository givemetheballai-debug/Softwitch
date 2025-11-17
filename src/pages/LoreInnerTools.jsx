import { motion } from 'framer-motion';
import LoreNav from '../components/LoreNav';

export default function LoreInnerTools() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-midnight-aubergine/60">
        <span>Lore Library</span>
        <span className="mx-2">→</span>
        <span>Inner Tools</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="font-serif text-5xl text-midnight-aubergine">
          🌙 Inner Tools
        </h1>
        <p className="text-lg text-midnight-aubergine/80 leading-relaxed">
          Mantras, breathwork, emotional navigation, and soft questions for everyday clarity.
        </p>
        <p className="text-midnight-aubergine/70">
          These are the quiet tools that help you shift your inner world — not rituals, not spells, not frameworks. Just simple ways to soften, steady, and return to yourself.
        </p>
        <p className="text-midnight-aubergine/70 italic">
          You don't need to believe in anything for these to work. Just breathe, notice, and use what feels lightest.
        </p>
      </motion.div>

      {/* Mantras */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">✨ Mantras</h2>
        <p className="text-midnight-aubergine/70 italic mb-4">Short lines that shift your internal state.</p>
        
        <div className="grid gap-3">
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">You're allowed to take your time.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">Consistency matters less than returning.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">You don't need a perfect plan, just a gentle start.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">You can shift without explaining.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">Soft doesn't mean small.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">You can begin in the middle.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">Honesty is clarity.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">Move toward the lighter feeling.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">Let yourself be surprised.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">You don't need to earn rest.</p>
          </div>
        </div>
      </motion.section>

      {/* Breathwork */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🌬️ Breathwork</h2>
        <p className="text-midnight-aubergine/70 italic mb-4">Evergreen, simple, effective. No woo. No overwhelm.</p>
        
        <div className="space-y-4">
          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">1. The 4–2–4 Softening Breath</h3>
            <p className="text-midnight-aubergine/70">
              Inhale for 4. Hold for 2. Exhale for 4. Repeat twice.
            </p>
            <p className="text-midnight-aubergine/70 italic">A reset for your nervous system.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">2. The Foggy Window Breath</h3>
            <p className="text-midnight-aubergine/70">
              Exhale as if you're fogging up glass.
            </p>
            <p className="text-midnight-aubergine/70 italic">Your system immediately lowers its guard.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">3. The One-Minute Reset</h3>
            <p className="text-midnight-aubergine/70">
              Take one deep breath with a long exhale. Repeat three times.
            </p>
            <p className="text-midnight-aubergine/70 italic">For interrupting spirals.</p>
          </div>
        </div>
      </motion.section>

      {/* Emotional Navigation */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">💛 Emotional Navigation</h2>
        <p className="text-midnight-aubergine/70 italic mb-4">Tools for feeling your feelings without getting stuck in them.</p>
        
        <div className="space-y-4">
          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">1. The Light vs Heavy Check</h3>
            <p className="text-midnight-aubergine/70">
              Ask: Does this feel lighter or heavier? Follow lighter.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">2. The Two-Word Self-Check</h3>
            <p className="text-midnight-aubergine/70">
              Name: What's happening / What I need. Two words each. Simple clarity.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">3. The Energy Leak Scan</h3>
            <p className="text-midnight-aubergine/70">
              Identify one thing draining you today. Plug the leak in a tiny way.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">4. The Feeling vs Problem Question</h3>
            <p className="text-midnight-aubergine/70">
              Ask: Is this a feeling, or a problem? Handle accordingly.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Soft Questions */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🪞 Soft Questions</h2>
        <p className="text-midnight-aubergine/70 italic mb-4">Questions that gently reveal what you already know.</p>
        
        <div className="grid gap-3">
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">What feels tight?</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">What feels tender?</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">What wants more space?</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">What am I avoiding because it matters?</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">What feels true underneath the noise?</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">What would feel softer right now?</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">What would help future-me?</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">What can I let go of today?</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">Where do I feel resistance?</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">What tiny action would shift the vibe?</p>
          </div>
        </div>
      </motion.section>

      {/* Grounding Tools */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🫁 Grounding Tools</h2>
        <p className="text-midnight-aubergine/70 italic mb-4">Simple ways to return to your body.</p>
        
        <div className="space-y-4">
          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">1. Hand-to-Heart Reset</h3>
            <p className="text-midnight-aubergine/70">
              One hand on chest. One breath. You're back.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">2. Three Sensory Anchors</h3>
            <p className="text-midnight-aubergine/70">
              Name: one thing you see, one thing you hear, one thing you feel. Instant presence.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">3. The Chair Drop</h3>
            <p className="text-midnight-aubergine/70">
              Sit. Let your full weight drop downward. Release your shoulders. Grounded.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">4. Warm Hands Technique</h3>
            <p className="text-midnight-aubergine/70">
              Rub your hands together. Cup them over your face. Instant calm.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Identity Softeners */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🧭 Identity Softeners</h2>
        <p className="text-midnight-aubergine/70 italic mb-4">Tiny reframes that shift how you see yourself.</p>
        
        <div className="grid gap-3">
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">"I'm someone who returns."</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">"I'm someone who tries again."</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">"I'm someone who chooses softness over urgency."</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">"I'm someone who listens to my own signals."</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">"I'm someone who gives myself time."</p>
          </div>
        </div>
      </motion.section>

      {/* Permission Slips */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🎯 Permission Slips</h2>
        
        <div className="grid gap-3">
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">You're allowed to be a person.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">You're allowed to start over.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">You're allowed to want something different.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">You're allowed to take breaks.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">You're allowed to say no.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">You're allowed to not be impressive today.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">You're allowed to outgrow things.</p>
          </div>
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="text-midnight-aubergine/80">You're allowed to not have an opinion yet.</p>
          </div>
        </div>
      </motion.section>

      {/* How to Use */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="bg-glam-mauve/10 rounded-lg p-6 space-y-3 text-center"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🌟 How to Use These Tools</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Just pick the thing that feels lightest. Let it shift the moment. That's enough.
        </p>
      </motion.section>

      {/* Navigation */}
      <LoreNav />
    </div>
  );
}
