import { motion } from 'framer-motion';
import LoreNav from '../components/LoreNav';

export default function LoreRituals() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-midnight-aubergine/60">
        <span>Lore Library</span>
        <span className="mx-2">→</span>
        <span>Rituals</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="font-serif text-5xl text-midnight-aubergine">
          🔮 Rituals
        </h1>
        <p className="text-lg text-midnight-aubergine/80 leading-relaxed">
          Tiny actions that shift your energy. Soft, modern, under-a-minute magic.
        </p>
        <p className="text-midnight-aubergine/70">
          Rituals aren't about candles, herbs, or elaborate steps. They're micro-behaviors that help you feel grounded, clearer, and more connected to yourself.
        </p>
        <p className="text-midnight-aubergine/70">
          Nothing ceremonial. Nothing woo. Just intentional moments.
        </p>
      </motion.div>

      {/* How to Start */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">✨ How to Start a Ritual (In Under 60 Seconds)</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          You don't need a long process — just a moment of intention.
        </p>
        
        <div className="space-y-3">
          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Pick one small intention</p>
            <p className="text-midnight-aubergine/70">What do you want this moment to feel like?</p>
          </div>
          
          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Add one sensory anchor</p>
            <p className="text-midnight-aubergine/70">Breath, light, sound, scent — anything that brings you into your body.</p>
          </div>
          
          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Do it gently</p>
            <p className="text-midnight-aubergine/70">Slow. Soft. No pressure.</p>
          </div>
          
          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">You're done</p>
            <p className="text-midnight-aubergine/70">A ritual is about attention, not effort.</p>
          </div>
        </div>
      </motion.section>

      {/* Signature Rituals */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🌙 Signature SoftWitch Rituals</h2>
        <p className="text-midnight-aubergine/70 italic">
          These are your core, branded, foundational rituals — the ones that define the SoftWitch vibe.
        </p>

        <div className="space-y-4">
          <div className="bg-glam-mauve/10 rounded-lg p-6 space-y-3">
            <h3 className="font-serif text-2xl text-midnight-aubergine">💗 The Grounding Ritual (signature)</h3>
            <p className="text-midnight-aubergine/80 leading-relaxed">
              Put your hand on your chest. Take one slow inhale. Ask: "What do I actually need right now?"
            </p>
            <p className="text-midnight-aubergine/70 italic">
              This is the SoftWitch anchor. Always available. Always enough.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-3">
            <h3 className="font-serif text-2xl text-midnight-aubergine">🔍 Ask the Avoided Question</h3>
            <p className="text-midnight-aubergine/80 leading-relaxed">
              You already know which question you're avoiding. Say it out loud. Let the answer land gently.
            </p>
            <p className="text-glam-mauve font-medium">
              SoftWitch truth: avoidance is a signal.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-3">
            <h3 className="font-serif text-2xl text-midnight-aubergine">💧 Drink Water Like It's a Spell</h3>
            <p className="text-midnight-aubergine/80 leading-relaxed">
              Before you sip, set a tiny intention: "Clarity." "Softness." "Energy." "Release."
            </p>
            <p className="text-midnight-aubergine/70 italic">
              Hydration + intention = magic.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-3">
            <h3 className="font-serif text-2xl text-midnight-aubergine">🌤 The 10% Rule</h3>
            <p className="text-midnight-aubergine/80 leading-relaxed">
              Do something 10% nicer for your future self today. Not more. Not perfect. Just a little better.
            </p>
            <p className="text-midnight-aubergine/70 italic">
              Small improvements, cosmic results.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Daily Ritual Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🍃 The Daily Ritual Grid</h2>
        <p className="text-midnight-aubergine/70 italic">
          These are 5–10 second shifts. Use them anytime.
        </p>

        <div className="grid gap-3">
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="font-medium text-midnight-aubergine">• Unclench your jaw</p>
            <p className="text-midnight-aubergine/70 text-sm">Drop your shoulders. Loosen your face. Reset.</p>
          </div>
          
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="font-medium text-midnight-aubergine">• Step outside for one minute</p>
            <p className="text-midnight-aubergine/70 text-sm">Fresh air = instant nervous system shift.</p>
          </div>
          
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="font-medium text-midnight-aubergine">• Ask for clarity</p>
            <p className="text-midnight-aubergine/70 text-sm">"Show me what I need to see." Then trust what stands out.</p>
          </div>
          
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="font-medium text-midnight-aubergine">• Delete one thing that drains you</p>
            <p className="text-midnight-aubergine/70 text-sm">A tab, a file, a task, a thought.</p>
          </div>
          
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="font-medium text-midnight-aubergine">• Follow the smallest spark</p>
            <p className="text-midnight-aubergine/70 text-sm">Do the thing that glows — even for 30 seconds.</p>
          </div>
          
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="font-medium text-midnight-aubergine">• Touch something with texture</p>
            <p className="text-midnight-aubergine/70 text-sm">Ground through your senses.</p>
          </div>
          
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="font-medium text-midnight-aubergine">• Put both feet on the floor</p>
            <p className="text-midnight-aubergine/70 text-sm">Reconnect with the moment.</p>
          </div>
          
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="font-medium text-midnight-aubergine">• Look away from all screens for 20 seconds</p>
            <p className="text-midnight-aubergine/70 text-sm">Let your brain reset.</p>
          </div>
          
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="font-medium text-midnight-aubergine">• Write the truth you've been holding</p>
            <p className="text-midnight-aubergine/70 text-sm">One sentence is enough.</p>
          </div>
          
          <div className="bg-dusty-lilac/20 rounded p-4">
            <p className="font-medium text-midnight-aubergine">• Shake out your hands</p>
            <p className="text-midnight-aubergine/70 text-sm">Release tension physically.</p>
          </div>
        </div>
      </motion.section>

      {/* Rituals for Specific Moments */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🌬 Rituals for Specific Moments</h2>

        <div className="space-y-4">
          <div className="bg-dusty-lilac/20 rounded-lg p-5">
            <p className="font-medium text-midnight-aubergine mb-2">When you feel overwhelmed</p>
            <p className="text-midnight-aubergine/70">
              Put your hand on your chest. Inhale for 4 seconds. Exhale until your shoulders drop.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5">
            <p className="font-medium text-midnight-aubergine mb-2">When you need clarity</p>
            <p className="text-midnight-aubergine/70">
              Ask one tiny question. Notice the first feeling, not the first thought.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5">
            <p className="font-medium text-midnight-aubergine mb-2">When you feel stuck</p>
            <p className="text-midnight-aubergine/70">
              Move your body for 10 seconds. Say: "This moment is shifting."
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5">
            <p className="font-medium text-midnight-aubergine mb-2">When you need inspiration</p>
            <p className="text-midnight-aubergine/70">
              Follow one curiosity thread for 60 seconds. Write down the spark.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Closing */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-glam-mauve/10 rounded-lg p-6 space-y-3 text-center"
      >
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Rituals don't change your life all at once. They change the next moment — which changes the next choice — which changes everything.
        </p>
        <p className="text-midnight-aubergine/80 font-medium italic">
          Soft magic, done gently.
        </p>
      </motion.section>

      {/* Navigation */}
      <LoreNav />
    </div>
  );
}
