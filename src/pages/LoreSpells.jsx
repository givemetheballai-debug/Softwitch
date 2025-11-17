import { motion } from 'framer-motion';
import LoreNav from '../components/LoreNav';

export default function LoreSpells() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-midnight-aubergine/60">
        <span>Lore Library</span>
        <span className="mx-2">→</span>
        <span>Spells & Potions</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="font-serif text-5xl text-midnight-aubergine">
          ✨ Spells & Potions
        </h1>
        <p className="text-lg text-midnight-aubergine/80 leading-relaxed">
          A tiny cookbook for your energy.
        </p>
        <p className="text-midnight-aubergine/70">
          These aren't literal spells. They're ritual recipes — small, sensory actions designed to shift your mood or intention.
        </p>
        <p className="text-midnight-aubergine/70 italic">
          Nothing mystical. Nothing ceremonial. Just modern magic you can feel.
        </p>
      </motion.div>

      {/* Spell 1: Clarity */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🌿 1. Clarity Spell (The Clearing Cup)</h2>
        
        <div>
          <p className="font-medium text-midnight-aubergine mb-2">Ingredients:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• A glass of cold water</li>
            <li>• A quiet breath</li>
            <li>• One tiny intention</li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">Instructions:</p>
          <p className="text-midnight-aubergine/70">
            Hold the glass. Say softly: "Clear my mind, soften my edges." Drink slowly. Imagine the clarity dropping into your body like light.
          </p>
        </div>

        <div className="bg-champagne/50 rounded p-3">
          <p className="text-sm text-midnight-aubergine/70">
            <span className="font-medium">Purpose:</span> mental reset, focus, decision making.
          </p>
        </div>
      </motion.section>

      {/* Spell 2: Release */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🔥 2. Release Spell (The Let-Go Flame)</h2>
        
        <div>
          <p className="font-medium text-midnight-aubergine mb-2">Ingredients:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• A candle</li>
            <li>• One thing you're ready to release</li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">Instructions:</p>
          <p className="text-midnight-aubergine/70">
            Light the candle. Say: "I'm letting this go." Exhale. Let the flame hold the rest.
          </p>
        </div>

        <div className="bg-champagne/50 rounded p-3">
          <p className="text-sm text-midnight-aubergine/70">
            <span className="font-medium">Purpose:</span> emotional release, ending cycles, soft closure.
          </p>
        </div>
      </motion.section>

      {/* Spell 3: Reset Potion */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🌊 3. The Reset Potion (Morning Magic)</h2>
        
        <div>
          <p className="font-medium text-midnight-aubergine mb-2">Ingredients:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• Warm beverage</li>
            <li>• Soft intention</li>
            <li>• First moment of the day</li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">Instructions:</p>
          <p className="text-midnight-aubergine/70">
            With your first sip, whisper: "A new moment starts now." Allow the warmth to reset your nervous system.
          </p>
        </div>

        <div className="bg-champagne/50 rounded p-3">
          <p className="text-sm text-midnight-aubergine/70">
            <span className="font-medium">Purpose:</span> morning grounding, fresh starts, gentle energy.
          </p>
        </div>
      </motion.section>

      {/* Spell 4: Spark */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">💫 4. The Spark Spell (Creativity Boost)</h2>
        
        <div>
          <p className="font-medium text-midnight-aubergine mb-2">Ingredients:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• A notebook</li>
            <li>• One curiosity</li>
            <li>• One minute</li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">Instructions:</p>
          <p className="text-midnight-aubergine/70">
            Write the first thing that comes to mind. Circle the part that glows. Follow it for 60 seconds.
          </p>
        </div>

        <div className="bg-champagne/50 rounded p-3">
          <p className="text-sm text-midnight-aubergine/70">
            <span className="font-medium">Purpose:</span> inspiration, creative momentum.
          </p>
        </div>
      </motion.section>

      {/* Spell 5: Protection Light */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🍃 5. Protection Light (Soft Boundaries)</h2>
        
        <div>
          <p className="font-medium text-midnight-aubergine mb-2">Ingredients:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• A lamp or candle</li>
            <li>• A breath</li>
            <li>• A boundary you're naming</li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">Instructions:</p>
          <p className="text-midnight-aubergine/70">
            Turn on the light. Say: "Bright for me, soft around me." Notice what expands.
          </p>
        </div>

        <div className="bg-champagne/50 rounded p-3">
          <p className="text-sm text-midnight-aubergine/70">
            <span className="font-medium">Purpose:</span> boundaries, emotional safety, clarity.
          </p>
        </div>
      </motion.section>

      {/* Spell 6: Mirror */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🪞 6. The Mirror Spell (Truth & Alignment)</h2>
        
        <div>
          <p className="font-medium text-midnight-aubergine mb-2">Ingredients:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• A reflective object</li>
            <li>• One question you're avoiding</li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">Instructions:</p>
          <p className="text-midnight-aubergine/70">
            Look gently into the reflection. Ask the question out loud. Notice the first feeling, not the first thought.
          </p>
        </div>

        <div className="bg-champagne/50 rounded p-3">
          <p className="text-sm text-midnight-aubergine/70">
            <span className="font-medium">Purpose:</span> honesty, alignment, inner clarity.
          </p>
        </div>
      </motion.section>

      {/* Spell 7: Calm Brew */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🌸 7. The Calm Brew (Anxiety Softener)</h2>
        
        <div>
          <p className="font-medium text-midnight-aubergine mb-2">Ingredients:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• Herbal tea</li>
            <li>• Slow inhale</li>
            <li>• One grounding word</li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">Instructions:</p>
          <p className="text-midnight-aubergine/70">
            Hold the cup with both hands. Inhale for four. Exhale for six. Say your grounding word: calm, release, safe, steady, soft.
          </p>
        </div>

        <div className="bg-champagne/50 rounded p-3">
          <p className="text-sm text-midnight-aubergine/70">
            <span className="font-medium">Purpose:</span> nervous system regulation.
          </p>
        </div>
      </motion.section>

      {/* Navigation */}
      <LoreNav />
    </div>
  );
}
