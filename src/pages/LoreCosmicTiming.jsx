import { motion } from 'framer-motion';
import LoreNav from '../components/LoreNav';

export default function LoreCosmicTiming() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-midnight-aubergine/60">
        <span>Lore Library</span>
        <span className="mx-2">→</span>
        <span>Cosmic Timing & Internal Seasons</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="font-serif text-5xl text-midnight-aubergine">
          🌒 Cosmic Timing & Internal Seasons
        </h1>
        <p className="text-lg text-midnight-aubergine/80 leading-relaxed">
          A SoftWitch guide to the rhythms beneath your daily experience.
        </p>
      </motion.div>

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🌙 Introduction</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Life moves in cycles — beginnings, growth, tension, clarity, release.
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          You don't need astrology to understand timing; you just need to notice patterns.
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          This is a simple, modern framework for understanding where you are in your internal rhythm.
        </p>
        <p className="text-midnight-aubergine/70 italic">
          Nothing predictive. Nothing literal. Just gentle pattern recognition to help you feel grounded.
        </p>
      </motion.section>

      {/* Cosmic Timing Basics */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">⭐️ Cosmic Timing Basics</h2>
        <p className="text-midnight-aubergine/70 italic">
          (The pattern language behind SoftWitch)
        </p>

        <div className="space-y-4">
          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">Beginnings</h3>
            <p className="text-midnight-aubergine/70">
              A fresh spark. New ideas. A feeling of: "Okay, let's try."
            </p>
            <p className="text-glam-mauve font-medium">
              SoftWitch Prompt: Start small.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">Transitions</h3>
            <p className="text-midnight-aubergine/70">
              The in-between. Messy, uncertain, emotional. A feeling of: "I'm not where I was… but not where I'm going."
            </p>
            <p className="text-glam-mauve font-medium">
              SoftWitch Prompt: Stay curious.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">Clarity</h3>
            <p className="text-midnight-aubergine/70">
              Moments click into place. Patterns reveal themselves.
            </p>
            <p className="text-glam-mauve font-medium">
              SoftWitch Prompt: Listen closely.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">Endings</h3>
            <p className="text-midnight-aubergine/70">
              Completion. Letting go. Emotional closure.
            </p>
            <p className="text-glam-mauve font-medium">
              SoftWitch Prompt: You don't have to carry everything.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-xl text-midnight-aubergine">Insight</h3>
            <p className="text-midnight-aubergine/70">
              A nudge. A pull. A spark. The whisper of intuition.
            </p>
            <p className="text-glam-mauve font-medium">
              SoftWitch Prompt: Follow the thing that glows.
            </p>
          </div>
        </div>

        <p className="text-midnight-aubergine/70 italic text-center pt-4">
          These are the energetic seasons beneath your daily life.
        </p>
      </motion.section>

      {/* Internal Seasons */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🌀 Internal Seasons — The Season of You</h2>
        <p className="text-midnight-aubergine/70 italic">
          A SoftWitch signature concept.
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Your energy has seasons — and they shift. Honoring them helps you make better choices, feel more aligned, and stop judging yourself for not being "consistent."
        </p>

        <div className="space-y-4">
          <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-3">
            <h3 className="font-serif text-2xl text-midnight-aubergine">Active Season</h3>
            <p className="text-midnight-aubergine/80">
              High energy. Movement. Action. You feel ready to start things, build momentum, make decisions.
            </p>
            <p className="text-midnight-aubergine/70">
              <span className="font-medium">Themes:</span> productivity, motion, momentum
            </p>
            <p className="text-glam-mauve font-medium">
              SoftWitch Action: Do the thing you keep thinking about.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-3">
            <h3 className="font-serif text-2xl text-midnight-aubergine">Quiet Season</h3>
            <p className="text-midnight-aubergine/80">
              Rest. Reflection. Lower energy. You're slower, softer, and more internal.
            </p>
            <p className="text-midnight-aubergine/70">
              <span className="font-medium">Themes:</span> recovery, introspection, gentle resets
            </p>
            <p className="text-glam-mauve font-medium">
              SoftWitch Action: Reduce demands. Add softness.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-3">
            <h3 className="font-serif text-2xl text-midnight-aubergine">Expansion Season</h3>
            <p className="text-midnight-aubergine/80">
              Curiosity. Creativity. Growth. You feel open, inspired, and ready to explore.
            </p>
            <p className="text-midnight-aubergine/70">
              <span className="font-medium">Themes:</span> possibility, play, new ideas
            </p>
            <p className="text-glam-mauve font-medium">
              SoftWitch Action: Follow your fascinations.
            </p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-3">
            <h3 className="font-serif text-2xl text-midnight-aubergine">Transition Season</h3>
            <p className="text-midnight-aubergine/80">
              Uncertainty. Shifts. Realignment. You feel in-between — shedding one phase without fully entering the next.
            </p>
            <p className="text-midnight-aubergine/70">
              <span className="font-medium">Themes:</span> liminality, change, emotional complexity
            </p>
            <p className="text-glam-mauve font-medium">
              SoftWitch Action: Do less. Notice more.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Navigation */}
      <LoreNav />
    </div>
  );
}
