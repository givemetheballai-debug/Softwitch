import { motion } from 'framer-motion';
import LoreNav from '../components/LoreNav';

export default function LoreRoots() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Breadcrumb */}
      <div className="text-sm text-sw-yellow font-semibold">
        <span>Lore Library</span>
        <span className="mx-2">✨</span>
        <span>The Roots</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="y2k-hero"
      >
        <h1>
          🔮 The Roots 🔮
        </h1>
        <p>
          Where modern witchcraft came from. Zero homework, full context.
        </p>
      </motion.div>

      <div className="text-center space-y-3 text-white text-lg">
        <p>Witchcraft and astrology have been around for thousands of years. SoftWitch takes the best parts and makes them fun.</p>
        <p className="text-sw-pink font-semibold">Here's the quick history — no test at the end. ✨</p>
      </div>

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="neon-card"
      >
        <h3 className="mb-4">🌿 Introduction</h3>
        
        <div className="space-y-4">
          <p>Magic has always been a language for understanding life — not a supernatural force, but a way to make meaning.</p>
          
          <p className="font-bold">Across cultures, witchcraft and astrology have been tools for:</p>
          <p>• Pattern recognition<br/>
          • Emotional grounding<br/>
          • Community rituals<br/>
          • Understanding cycles<br/>
          • Feeling connected to something bigger</p>

          <div className="bg-white/90 rounded-2xl p-4 mt-4">
            <p className="text-sw-purple font-semibold">SoftWitch takes those ancient frameworks and turns them into tiny rituals, gentle metaphors, and simple tools for clarity.</p>
          </div>

          <p className="italic">We're not here to cast spells or predict futures. We're here to use the softest, most human parts of these traditions.</p>
        </div>
      </motion.section>

      {/* What Witchcraft Really Means */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="magic-box-y2k"
      >
        <h2 className="font-serif text-3xl text-white mb-4">🔮 What "Witchcraft" Really Means</h2>
        
        <div className="space-y-4 text-white">
          <p className="font-bold text-sw-yellow">Witchcraft wasn't originally about: hexes, fantasy tropes, the occult, or spooky aesthetics.</p>
          
          <p>Historically, witches were: healers, midwives, community caretakers, people who noticed patterns, intuitive thinkers, makers of herbal remedies, and keepers of rituals.</p>

          <p className="text-xl font-bold text-sw-yellow">Witchcraft was a practice of attention and intention — not theatrics.</p>

          <div className="bg-white/20 rounded-2xl p-4 border-2 border-sw-yellow mt-4">
            <p className="font-bold mb-2">SoftWitch Reinterpretation:</p>
            <p>We bring witchcraft into the modern world as: self-reflection, emotional tools, sensory rituals, nervous system regulation, pattern awareness, and meaning-making.</p>
            <p className="mt-3 italic">Modern witchcraft = lighting a candle with intention, setting boundaries, noticing repeating patterns, creating tiny rituals.</p>
            <p className="mt-3 font-bold">No dogma. No hierarchy. No belief system required.</p>
          </div>
        </div>
      </motion.section>

      {/* History of Astrology */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="polka-box-y2k"
      >
        <h3 className="mb-4">✨ The History of Astrology (Soft Edition)</h3>
        
        <div className="space-y-4">
          <p>Astrology is one of the oldest meaning-making systems in the world. Ancient cultures used the sky as a calendar, a navigation tool, and a metaphorical framework for understanding human experience.</p>
          
          <p>Over thousands of years, astrology developed into: cycles, archetypes, patterns, and symbolic language.</p>

          <p className="text-xl font-bold">It was never meant to be literal. It was meant to help people understand themselves.</p>

          <div className="bg-white/90 rounded-2xl p-4 mt-4">
            <p className="font-bold text-sw-purple mb-2">SoftWitch Reinterpretation:</p>
            <p className="text-sw-purple">We don't use astrology as prediction. We use it as: symbolism, storytelling, personality cues, timing metaphors, and emotional frameworks.</p>
            <p className="text-sw-purple mt-3">• Your birth chart = <span className="italic">a map of themes, not your destiny</span><br/>
            • Moon phases = <span className="italic">a rhythm, not a forecast</span><br/>
            • Signs = <span className="italic">patterns, not fixed traits</span></p>
            <p className="text-sw-purple italic mt-3">It's astrology — cleaned, softened, modernized.</p>
          </div>
        </div>
      </motion.section>

      {/* Why These Practices Still Matter */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="neon-card"
      >
        <h3 className="mb-4">🌙 Why These Practices Still Matter</h3>
        
        <div className="space-y-4">
          <p className="font-bold">Because humans still need:</p>
          <p>• Rituals<br/>
          • Grounding<br/>
          • Meaning<br/>
          • Reflection<br/>
          • Community<br/>
          • Cycles<br/>
          • Moments of pause</p>

          <p>Witchcraft and astrology survived for thousands of years because they help people feel more connected to themselves, their emotions, the present moment, and the world around them.</p>

          <div className="bg-white/90 rounded-2xl p-4 mt-4">
            <p className="font-bold text-sw-purple mb-2">SoftWitch keeps the parts that matter:</p>
            <p className="text-sw-purple">⭐ the reflection<br/>
            ⭐ the rituals<br/>
            ⭐ the patterns<br/>
            ⭐ the meaning<br/>
            ⭐ the softness<br/>
            ⭐ the creativity</p>
            <p className="text-sw-purple italic mt-3">And leaves behind the rest.</p>
          </div>
        </div>
      </motion.section>

      {/* How SoftWitch Uses This History */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="magic-box-y2k"
      >
        <h2 className="font-serif text-3xl text-white mb-4">🧙‍♀️ How SoftWitch Uses This History</h2>
        
        <div className="space-y-4 text-white">
          <p>We borrow the language, metaphors, and emotional tools — not the belief systems.</p>

          <div className="bg-white/20 rounded-2xl p-4 border-2 border-sw-yellow">
            <p className="font-bold mb-2">The remix:</p>
            <p>• <span className="font-bold">witchcraft</span> → ritual, intention, grounding<br/>
            • <span className="font-bold">astrology</span> → cycles, timing, archetypes, symbolism<br/>
            • <span className="font-bold">AI</span> → creative collaboration, pattern processing, fast building<br/>
            • <span className="font-bold">product strategy</span> → clarity, usability, simplicity</p>
          </div>

          <p className="text-xl font-bold text-sw-yellow mt-4">The result?</p>
          <p>A modern witchcraft experiment designed to be: safe, secular, fun, intuitive, creative, helpful, and emotionally intelligent.</p>

          <p className="italic text-xl mt-4">This is magic without the mystique. Astrology without the overwhelm. Witchcraft without the dogma.</p>
        </div>
      </motion.section>

      {/* If You're New Here */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="house-rules-y2k"
      >
        <h2 className="mb-4">⭐ If You're New Here...</h2>
        
        <p className="text-xl">You don't need to know anything about witchcraft or astrology to enjoy SoftWitch.</p>
        <p className="text-xl mt-3">Just explore. Notice what resonates. Use what feels good.</p>
        <p className="font-bold text-2xl mt-4">This is a playground, not a belief system. ✨</p>
      </motion.section>

      {/* Navigation */}
      <LoreNav />
    </div>
  );
}
