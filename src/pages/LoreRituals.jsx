import { motion } from 'framer-motion';
import LoreNav from '../components/LoreNav';

export default function LoreRituals() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Breadcrumb */}
      <div className="text-sm text-sw-yellow font-semibold">
        <span>Lore Library</span>
        <span className="mx-2">✨</span>
        <span>Rituals</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="y2k-hero"
      >
        <h1>
          🔮 Rituals 🔮
        </h1>
        <p>
          Micro-actions that shift your vibe. Under-a-minute magic.
        </p>
      </motion.div>

      <div className="text-center space-y-3 text-white text-lg">
        <p>Rituals = tiny behaviors that help you feel grounded, clearer, and more connected to yourself.</p>
        <p className="text-sw-pink font-semibold">Simple. Intentional. Immediate. ✨</p>
      </div>

      {/* How to Start */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="house-rules-y2k"
      >
        <h2 className="mb-6">✨ How to Start a Ritual (In Under 60 Seconds)</h2>

        <div className="space-y-3">
          <p>1. Pick one small intention → What do you want this moment to feel like?</p>
          <p>2. Add one sensory anchor → Breath, light, sound, scent — anything that brings you into your body.</p>
          <p>3. Do it gently → Slow. Soft. No pressure.</p>
          <p>4. You're done → A ritual is about attention, not effort.</p>
        </div>
      </motion.section>

      {/* Signature Rituals */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="section-title-y2k">🌙 Signature SoftWitch Rituals</h2>

        <div className="neon-card">
          <h3 className="mb-4">💗 The Grounding Ritual (signature)</h3>
          <p className="text-lg">Put your hand on your chest. Take one slow inhale. Ask: "What do I actually need right now?"</p>
          <p className="italic mt-3">This is the SoftWitch anchor. Always available. Always enough.</p>
        </div>

        <div className="polka-box-y2k">
          <h3 className="mb-4">🔍 Ask the Avoided Question</h3>
          <p>You already know which question you're avoiding. Say it out loud. Let the answer land gently.</p>
          <p className="font-bold mt-3">SoftWitch truth: avoidance is a signal.</p>
        </div>

        <div className="magic-box-y2k">
          <h2 className="font-serif text-3xl text-white mb-4">💧 Drink Water Like It's a Spell</h2>
          <p className="text-white">Before you sip, set a tiny intention: "Clarity." "Softness." "Energy." "Release."</p>
          <p className="text-sw-yellow italic mt-3">Hydration + intention = magic.</p>
        </div>

        <div className="neon-card">
          <h3 className="mb-4">🌤 The 10% Rule</h3>
          <p>Do something 10% nicer for your future self today. Not more. Not perfect. Just a little better.</p>
          <p className="italic mt-3">Small improvements, cosmic results.</p>
        </div>
      </motion.section>

      {/* Daily Ritual Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="section-title-y2k">🃏 The Daily Ritual Grid</h2>
        <p className="text-white text-center text-lg italic">5–10 second shifts. Use them anytime.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="magic-box-y2k">
            <p className="text-white font-bold">Unclench your jaw</p>
            <p className="text-white text-sm mt-2">Drop your shoulders. Loosen your face. Reset.</p>
          </div>
          
          <div className="magic-box-y2k">
            <p className="text-white font-bold">Step outside for one minute</p>
            <p className="text-white text-sm mt-2">Fresh air = instant nervous system shift.</p>
          </div>
          
          <div className="magic-box-y2k">
            <p className="text-white font-bold">Ask for clarity</p>
            <p className="text-white text-sm mt-2">"Show me what I need to see." Then trust what stands out.</p>
          </div>
          
          <div className="magic-box-y2k">
            <p className="text-white font-bold">Delete one thing that drains you</p>
            <p className="text-white text-sm mt-2">A tab, a file, a task, a thought.</p>
          </div>
          
          <div className="magic-box-y2k">
            <p className="text-white font-bold">Follow the smallest spark</p>
            <p className="text-white text-sm mt-2">Do the thing that glows — even for 30 seconds.</p>
          </div>
          
          <div className="magic-box-y2k">
            <p className="text-white font-bold">Touch something with texture</p>
            <p className="text-white text-sm mt-2">Ground through your senses.</p>
          </div>
          
          <div className="magic-box-y2k">
            <p className="text-white font-bold">Put both feet on the floor</p>
            <p className="text-white text-sm mt-2">Reconnect with the moment.</p>
          </div>
          
          <div className="magic-box-y2k">
            <p className="text-white font-bold">Look away from all screens for 20 seconds</p>
            <p className="text-white text-sm mt-2">Let your brain reset.</p>
          </div>
          
          <div className="magic-box-y2k">
            <p className="text-white font-bold">Write the truth you've been holding</p>
            <p className="text-white text-sm mt-2">One sentence is enough.</p>
          </div>
          
          <div className="magic-box-y2k">
            <p className="text-white font-bold">Shake out your hands</p>
            <p className="text-white text-sm mt-2">Release tension physically.</p>
          </div>
        </div>
      </motion.section>

      {/* Rituals for Specific Moments */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-6"
      >
        <h2 className="section-title-y2k">🌬 Rituals for Specific Moments</h2>

        <div className="grid gap-4">
          <div className="neon-card">
            <p className="font-bold mb-2">When you feel overwhelmed</p>
            <p>Put your hand on your chest. Inhale for 4 seconds. Exhale until your shoulders drop.</p>
          </div>

          <div className="polka-box-y2k">
            <p className="font-bold mb-2">When you need clarity</p>
            <p>Ask one tiny question. Notice the first feeling, not the first thought.</p>
          </div>

          <div className="neon-card">
            <p className="font-bold mb-2">When you feel stuck</p>
            <p>Move your body for 10 seconds. Say: "This moment is shifting."</p>
          </div>

          <div className="polka-box-y2k">
            <p className="font-bold mb-2">When you need inspiration</p>
            <p>Follow one curiosity thread for 60 seconds. Write down the spark.</p>
          </div>
        </div>
      </motion.section>

      {/* Closing */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="house-rules-y2k text-center"
      >
        <p className="text-xl">Rituals don't change your life all at once.</p>
        <p className="text-xl mt-3">They change the next moment — which changes the next choice — which changes everything.</p>
        <p className="font-bold text-2xl mt-4">Soft magic, done gently. ✨</p>
      </motion.section>

      {/* Navigation */}
      <LoreNav />
    </div>
  );
}
