import { motion } from 'framer-motion';
import LoreNav from '../components/LoreNav';

export default function LoreGuides() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-midnight-aubergine/60">
        <span>Lore Library</span>
        <span className="mx-2">→</span>
        <span>Guides</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="font-serif text-5xl text-midnight-aubergine">
          🧭 Guides
        </h1>
        <p className="text-lg text-midnight-aubergine/80 leading-relaxed">
          Short guides to help you navigate real human moments — using intuition, emotional intelligence, and a little bit of cosmic metaphor.
        </p>
        <p className="text-midnight-aubergine/70">
          Nothing mystical. Nothing prescriptive. Just gentle frameworks for everyday clarity.
        </p>
      </motion.div>

      {/* Guide 1: Reconnect With Intuition */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">✨ 1. How to Reconnect With Intuition</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Intuition isn't loud. It's subtle, quiet, and usually the first thing you feel before your brain starts explaining things. You don't reconnect with intuition by demanding answers — you reconnect by softening.
        </p>
        
        <div className="space-y-3">
          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Start Here</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Ask small questions, not big ones.</li>
              <li>• Notice the micro-reactions in your body.</li>
              <li>• Track the pulls, not the pressures.</li>
              <li>• Follow the thing that softens you, not the thing that tightens you.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">What Helps</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Decrease input (less scrolling, more pausing).</li>
              <li>• Create small pockets of silence.</li>
              <li>• Pay attention to repetition — the things you keep noticing.</li>
              <li>• Don't demand certainty; invite curiosity.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Remember</p>
            <p className="text-midnight-aubergine/70">
              Intuition doesn't shout. It nudges. Follow the direction that brings a feeling of relief, not the one that feels impressive.
            </p>
          </div>

          <div className="bg-champagne/50 rounded p-3">
            <p className="text-sm text-midnight-aubergine/70">
              <span className="font-medium">Ritual Pairing:</span> "Put your hand on your chest and ask: What do I actually need right now?"
            </p>
          </div>
        </div>
      </motion.section>

      {/* Guide 2: Navigate Uncertainty */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🔮 2. How to Navigate Uncertainty</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Uncertainty is a transition — not a failure of clarity. You don't push through it; you move with it.
        </p>
        
        <div className="space-y-3">
          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Start Here</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Name it. ("This is a transition moment.")</li>
              <li>• Lower the stakes.</li>
              <li>• Let life be messy for a minute.</li>
              <li>• Choose tiny actions.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">What Helps</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Create small anchors: a morning ritual, a grounding object, one consistent thing.</li>
              <li>• Stop trying to predict outcomes.</li>
              <li>• Focus on your internal season — not the external timeline.</li>
              <li>• Let emotions complete their cycle.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Remember</p>
            <p className="text-midnight-aubergine/70">
              Clarity often comes after movement. Not before. You don't need to know the final answer. You just need the next step.
            </p>
          </div>

          <div className="bg-champagne/50 rounded p-3">
            <p className="text-sm text-midnight-aubergine/70">
              <span className="font-medium">Ritual Pairing:</span> Do the easiest version of the thing you've been avoiding.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Guide 3: Reset Routines */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🌱 3. How to Reset Your Routines</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          A reset should feel like a breath out — not a punishment.
        </p>
        
        <div className="space-y-3">
          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Start Here</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Identify what feels heavy.</li>
              <li>• Remove one step, not ten.</li>
              <li>• Choose "relief," not "discipline."</li>
              <li>• Keep the ritual under one minute.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">What Helps</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Add a sensory cue: light a candle, use a sound, take a breath.</li>
              <li>• Stack a tiny action onto something you already do.</li>
              <li>• Let your routine shift with your season (Active, Quiet, Expansion, Transition).</li>
              <li>• Make everything optional at first.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Remember</p>
            <p className="text-midnight-aubergine/70">
              Small rituals work better than big overhauls. The moment should feel gentle and obvious.
            </p>
          </div>

          <div className="bg-champagne/50 rounded p-3">
            <p className="text-sm text-midnight-aubergine/70">
              <span className="font-medium">Ritual Pairing:</span> Unclench your jaw. Step outside. Breathe. Begin again.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Guide 4: Build Trust With Yourself */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">💞 4. How to Build Trust With Yourself</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Self-trust isn't a big emotional breakthrough — it's micro-evidence collected over time.
        </p>
        
        <div className="space-y-3">
          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Start Here</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Keep promises that are small enough to keep.</li>
              <li>• Do the 30% version instead of avoiding the 100% version.</li>
              <li>• Listen when something inside says "no."</li>
              <li>• Tell the truth gently.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">What Helps</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Track your wins, even the tiny ones.</li>
              <li>• Stop abandoning yourself to please others.</li>
              <li>• Notice when something feels aligned or off.</li>
              <li>• Validate your own feelings before explaining them.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Remember</p>
            <p className="text-midnight-aubergine/70">
              Self-trust grows from consistency, not perfection. It's a relationship with yourself — not a performance.
            </p>
          </div>

          <div className="bg-champagne/50 rounded p-3">
            <p className="text-sm text-midnight-aubergine/70">
              <span className="font-medium">Ritual Pairing:</span> Write down one thing you did right today. One is enough.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Guide 5: Low-Friction Habits */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🔥 5. How to Create Low-Friction Habits</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          If a habit is too hard, it's not you — it's the design.
        </p>
        
        <div className="space-y-3">
          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Start Here</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Remove every unnecessary step.</li>
              <li>• Keep the action tiny and immediate.</li>
              <li>• Follow the path of least resistance.</li>
              <li>• Stop waiting for motivation.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">What Helps</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Make the habit visible.</li>
              <li>• Add a cue (light, scent, song).</li>
              <li>• Pair it with something you already do.</li>
              <li>• Allow it to be imperfect.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Remember</p>
            <p className="text-midnight-aubergine/70">
              Ease isn't laziness. Ease is good design. The goal isn't discipline — it's momentum.
            </p>
          </div>

          <div className="bg-champagne/50 rounded p-3">
            <p className="text-sm text-midnight-aubergine/70">
              <span className="font-medium">Ritual Pairing:</span> Do a 10-second version of something you care about.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Guide 6: Grounded During Big Emotions */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🌧 6. How to Feel Grounded During Big Emotions</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          You don't need to interpret the emotion — you just need to hold it.
        </p>
        
        <div className="space-y-3">
          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Start Here</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Breathe into your chest, not your thoughts.</li>
              <li>• Notice what's true right now.</li>
              <li>• Identify your body sensations.</li>
              <li>• Slow down your reactions.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">What Helps</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Step away from screens.</li>
              <li>• Touch something with texture.</li>
              <li>• Put both feet on the floor.</li>
              <li>• Remind yourself: "This will pass."</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Remember</p>
            <p className="text-midnight-aubergine/70">
              Grounding comes before meaning-making. You can analyze later. Regulate first.
            </p>
          </div>

          <div className="bg-champagne/50 rounded p-3">
            <p className="text-sm text-midnight-aubergine/70">
              <span className="font-medium">Ritual Pairing:</span> Hold something warm or cold for 30 seconds.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Guide 7: Follow the Quiet Pull */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">✨ 7. How to Follow the Quiet Pull (Signals)</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          A "signal" is the soft tug toward something that feels right.
        </p>
        
        <div className="space-y-3">
          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Start Here</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Pay attention to what sparks.</li>
              <li>• Notice what keeps showing up.</li>
              <li>• Track your fascinations.</li>
              <li>• Follow the pull, not the push.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">What Helps</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Make a list of repeating themes.</li>
              <li>• Explore without needing a result.</li>
              <li>• Trust micro-curiosity.</li>
              <li>• Let things unfold slowly.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Remember</p>
            <p className="text-midnight-aubergine/70">
              Sometimes the universe doesn't shout — it whispers. Your job is to notice.
            </p>
          </div>

          <div className="bg-champagne/50 rounded p-3">
            <p className="text-sm text-midnight-aubergine/70">
              <span className="font-medium">Ritual Pairing:</span> Write down 3 things that lit you up this week.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Guide 8: Release What's Stuck */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🌀 8. How to Release What's Stuck</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Release is a shift — not a purge.
        </p>
        
        <div className="space-y-3">
          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Start Here</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Name what feels heavy.</li>
              <li>• Move your body.</li>
              <li>• Say the truth you've been holding.</li>
              <li>• Let a moment end.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">What Helps</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Shake out your hands.</li>
              <li>• Do a Scream Into The Void.</li>
              <li>• Delete one stale thing from your life.</li>
              <li>• Ask yourself: "Is this mine to carry?"</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Remember</p>
            <p className="text-midnight-aubergine/70">
              Letting go isn't an event — it's a series of tiny moments.
            </p>
          </div>

          <div className="bg-champagne/50 rounded p-3">
            <p className="text-sm text-midnight-aubergine/70">
              <span className="font-medium">Ritual Pairing:</span> Exhale slowly until your shoulders drop.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Guide 9: Recognize Your Internal Season */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🗺 9. How to Recognize Your Internal Season</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Your energy has seasons — and they shift.
        </p>
        
        <div className="space-y-3">
          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Start Here</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Active → you're ready to move</li>
              <li>• Quiet → you need rest</li>
              <li>• Expansion → you're creative</li>
              <li>• Transition → you're changing</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">What Helps</p>
            <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
              <li>• Name the season before you make a plan.</li>
              <li>• Align expectations with energy.</li>
              <li>• Don't force an Active season during a Quiet one.</li>
              <li>• Let seasons change naturally.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">Remember</p>
            <p className="text-midnight-aubergine/70">
              You're not inconsistent — you're seasonal.
            </p>
          </div>

          <div className="bg-champagne/50 rounded p-3">
            <p className="text-sm text-midnight-aubergine/70">
              <span className="font-medium">Ritual Pairing:</span> Ask: "What season am I in today?"
            </p>
          </div>
        </div>
      </motion.section>

      {/* Navigation */}
      <LoreNav />
    </div>
  );
}
