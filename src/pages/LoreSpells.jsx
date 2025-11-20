import { motion } from 'framer-motion';
import LoreNav from '../components/LoreNav';

export default function LoreSpells() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Breadcrumb */}
      <div className="text-sm text-sw-yellow font-semibold">
        <span>Lore Library</span>
        <span className="mx-2">✨</span>
        <span>Spells & Potions</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="y2k-hero"
      >
        <h1>
          ✨ Spells & Potions ✨
        </h1>
        <p>
          Tiny recipes for your vibe. Zero pressure, full magic.
        </p>
      </motion.div>

      <div className="text-center space-y-3 text-white text-lg">
        <p>These aren't literal spells (obvi). They're quick rituals that shift your energy.</p>
        <p className="text-sw-yellow font-semibold">Pick one. Try it. See what glows. ✨</p>
      </div>

      {/* Spell 1: Clarity */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="magic-box-y2k"
      >
        <h2 className="font-serif text-3xl text-white mb-4">🌿 Clarity Spell (The Clearing Cup)</h2>
        
        <div className="space-y-4 text-white">
          <div>
            <p className="font-bold text-sw-yellow mb-2">What you need:</p>
            <p>• A glass of cold water<br/>
            • A quiet breath<br/>
            • One tiny intention</p>
          </div>

          <div>
            <p className="font-bold text-sw-yellow mb-2">How to do it:</p>
            <p>Hold the glass. Say softly: "Clear my mind, soften my edges." Drink slowly. Imagine clarity dropping into your body like light.</p>
          </div>

          <div className="bg-white/20 rounded-2xl p-4 border-2 border-sw-yellow">
            <p className="font-semibold">✨ Vibe: mental reset, focus, decision making</p>
          </div>
        </div>
      </motion.section>

      {/* Spell 2: Release */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="neon-card"
      >
        <h3 className="mb-4">🔥 Release Spell (The Let-Go Flame)</h3>
        
        <div className="space-y-4">
          <div>
            <p className="font-bold mb-2">What you need:</p>
            <p>• A candle<br/>
            • One thing you're ready to release</p>
          </div>

          <div>
            <p className="font-bold mb-2">How to do it:</p>
            <p>Light the candle. Say: "I'm letting this go." Exhale. Let the flame hold the rest.</p>
          </div>

          <div className="bg-black/20 rounded-2xl p-4 border-2 border-white">
            <p className="font-semibold text-white">✨ Vibe: emotional release, ending cycles, soft closure</p>
          </div>
        </div>
      </motion.section>

      {/* Spell 3: Reset Potion */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="polka-box-y2k"
      >
        <h3 className="mb-4">🌊 The Reset Potion (Morning Magic)</h3>
        
        <div className="space-y-4">
          <div>
            <p className="font-bold mb-2">What you need:</p>
            <p>• Warm beverage<br/>
            • Soft intention<br/>
            • First moment of the day</p>
          </div>

          <div>
            <p className="font-bold mb-2">How to do it:</p>
            <p>With your first sip, whisper: "A new moment starts now." Allow the warmth to reset your nervous system.</p>
          </div>

          <div className="bg-black/20 rounded-2xl p-4 border-2 border-white">
            <p className="font-semibold text-white">✨ Vibe: morning grounding, fresh starts, gentle energy</p>
          </div>
        </div>
      </motion.section>

      {/* Spell 4: Spark */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="magic-box-y2k"
      >
        <h2 className="font-serif text-3xl text-white mb-4">💫 The Spark Spell (Creativity Boost)</h2>
        
        <div className="space-y-4 text-white">
          <div>
            <p className="font-bold text-sw-yellow mb-2">What you need:</p>
            <p>• A notebook<br/>
            • One curiosity<br/>
            • One minute</p>
          </div>

          <div>
            <p className="font-bold text-sw-yellow mb-2">How to do it:</p>
            <p>Write the first thing that comes to mind. Circle the part that glows. Follow it for 60 seconds.</p>
          </div>

          <div className="bg-white/20 rounded-2xl p-4 border-2 border-sw-yellow">
            <p className="font-semibold">✨ Vibe: inspiration, creative momentum</p>
          </div>
        </div>
      </motion.section>

      {/* Spell 5: Protection Light */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="neon-card"
      >
        <h3 className="mb-4">🕯️ Protection Light (Soft Boundaries)</h3>
        
        <div className="space-y-4">
          <div>
            <p className="font-bold mb-2">What you need:</p>
            <p>• A lamp or candle<br/>
            • A breath<br/>
            • A boundary you're naming</p>
          </div>

          <div>
            <p className="font-bold mb-2">How to do it:</p>
            <p>Turn on the light. Say: "Bright for me, soft around me." Notice what expands.</p>
          </div>

          <div className="bg-black/20 rounded-2xl p-4 border-2 border-white">
            <p className="font-semibold text-white">✨ Vibe: boundaries, emotional safety, clarity</p>
          </div>
        </div>
      </motion.section>

      {/* Spell 6: Mirror */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="polka-box-y2k"
      >
        <h3 className="mb-4">🪞 The Mirror Spell (Truth & Alignment)</h3>
        
        <div className="space-y-4">
          <div>
            <p className="font-bold mb-2">What you need:</p>
            <p>• A reflective object<br/>
            • One question you're avoiding</p>
          </div>

          <div>
            <p className="font-bold mb-2">How to do it:</p>
            <p>Look gently into the reflection. Ask the question out loud. Notice the first feeling, not the first thought.</p>
          </div>

          <div className="bg-black/20 rounded-2xl p-4 border-2 border-white">
            <p className="font-semibold text-white">✨ Vibe: honesty, alignment, inner clarity</p>
          </div>
        </div>
      </motion.section>

      {/* Spell 7: Calm Brew */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="magic-box-y2k"
      >
        <h2 className="font-serif text-3xl text-white mb-4">🌸 The Calm Brew (Anxiety Softener)</h2>
        
        <div className="space-y-4 text-white">
          <div>
            <p className="font-bold text-sw-yellow mb-2">What you need:</p>
            <p>• Herbal tea<br/>
            • Slow inhale<br/>
            • One grounding word</p>
          </div>

          <div>
            <p className="font-bold text-sw-yellow mb-2">How to do it:</p>
            <p>Hold the cup with both hands. Inhale for four. Exhale for six. Say your grounding word: calm, release, safe, steady, soft.</p>
          </div>

          <div className="bg-white/20 rounded-2xl p-4 border-2 border-sw-yellow">
            <p className="font-semibold">✨ Vibe: nervous system regulation</p>
          </div>
        </div>
      </motion.section>

      {/* Closing */}
      <div className="text-center text-white text-xl space-y-2 py-8">
        <p className="text-sw-pink font-bold">That's it. That's the magic. ✨</p>
        <p>No rules. No pressure. Just vibes.</p>
      </div>

      {/* Navigation */}
      <LoreNav />
    </div>
  );
}
