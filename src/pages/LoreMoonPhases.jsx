import { motion } from 'framer-motion';
import LoreNav from '../components/LoreNav';

export default function LoreMoonPhases() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-midnight-aubergine/60">
        <span>Lore Library</span>
        <span className="mx-2">→</span>
        <span>Moon Phases</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="font-serif text-5xl text-midnight-aubergine">
          🌙 Moon Phases
        </h1>
        <p className="text-lg text-midnight-aubergine/80 leading-relaxed">
          A soft, modern guide to lunar cycles — for clarity, calm, and tiny rituals that help you feel grounded.
        </p>
        <p className="text-midnight-aubergine/70 font-medium italic">
          Nothing spooky. Just cycles.
        </p>
      </motion.div>

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🌓 Introduction</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          The moon has always been a symbol of change, rhythm, and gentle shifts. You don't need to believe anything mystical to feel connected to its phases — the moon is just a visible reminder that everything moves in cycles.
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          This is a SoftWitch-style guide to the lunar phases: short, intuitive, and designed to help you understand your own internal shifts.
        </p>
        <p className="text-midnight-aubergine/70">
          Use it as a grounding tool. A rhythm. A reminder that nothing stays the same forever.
        </p>
      </motion.section>

      {/* New Moon */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4">
          <h2 className="font-serif text-3xl text-midnight-aubergine">🌑 New Moon — Beginnings</h2>
          <div className="space-y-2">
            <p className="text-midnight-aubergine/70">
              <span className="font-medium">Energy:</span> empty, fresh, quiet, receptive
            </p>
            <p className="text-midnight-aubergine/70">
              <span className="font-medium">Meaning:</span> a clean slate, a reset, a seed planted in the dark
            </p>
          </div>
          <p className="text-midnight-aubergine/80 leading-relaxed">
            This is the moment of potential — when nothing exists yet, and that's the power. You don't need a plan. You just need a direction.
          </p>
          <div className="bg-champagne/50 rounded p-4 space-y-2">
            <p className="font-medium text-midnight-aubergine">SoftWitch Take:</p>
            <p className="text-midnight-aubergine/70">
              Start something tiny. Name one thing you'd like to call in. Light a candle, soften your breath, begin again.
            </p>
          </div>
          <p className="text-glam-mauve font-medium">
            Mini-Ritual: "Try one small thing."
          </p>
        </div>
      </motion.section>

      {/* Waxing Moon */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4">
          <h2 className="font-serif text-3xl text-midnight-aubergine">🌒 Waxing Moon — Momentum</h2>
          <div className="space-y-2">
            <p className="text-midnight-aubergine/70">
              <span className="font-medium">Energy:</span> building, rising, gathering
            </p>
            <p className="text-midnight-aubergine/70">
              <span className="font-medium">Meaning:</span> the phase of effort, movement, and stacking small wins
            </p>
          </div>
          <p className="text-midnight-aubergine/80 leading-relaxed">
            This is when ideas begin to take shape. Consistency beats intensity here.
          </p>
          <div className="bg-champagne/50 rounded p-4 space-y-2">
            <p className="font-medium text-midnight-aubergine">SoftWitch Take:</p>
            <p className="text-midnight-aubergine/70">
              Add one step. Keep going, gently. Let progress be imperfect.
            </p>
          </div>
          <p className="text-glam-mauve font-medium">
            Mini-Ritual: "Stack a tiny win."
          </p>
        </div>
      </motion.section>

      {/* Full Moon */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4">
          <h2 className="font-serif text-3xl text-midnight-aubergine">🌕 Full Moon — Clarity + Release</h2>
          <div className="space-y-2">
            <p className="text-midnight-aubergine/70">
              <span className="font-medium">Energy:</span> bright, revealing, heightened
            </p>
            <p className="text-midnight-aubergine/70">
              <span className="font-medium">Meaning:</span> illumination, completion, insight, letting go
            </p>
          </div>
          <p className="text-midnight-aubergine/80 leading-relaxed">
            Full moons bring things to the surface — not because of magic, but because cycles reach their peak. This is a moment to notice what's working and what isn't.
          </p>
          <div className="bg-champagne/50 rounded p-4 space-y-2">
            <p className="font-medium text-midnight-aubergine">SoftWitch Take:</p>
            <p className="text-midnight-aubergine/70">
              Name your truth. Release what feels heavy. Let clarity land without forcing it.
            </p>
          </div>
          <p className="text-glam-mauve font-medium">
            Mini-Ritual: "Let something go."
          </p>
        </div>
      </motion.section>

      {/* Waning Moon */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-4"
      >
        <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4">
          <h2 className="font-serif text-3xl text-midnight-aubergine">🌖 Waning Moon — Editing</h2>
          <div className="space-y-2">
            <p className="text-midnight-aubergine/70">
              <span className="font-medium">Energy:</span> calming, clearing, simplifying
            </p>
            <p className="text-midnight-aubergine/70">
              <span className="font-medium">Meaning:</span> reduction, refinement, soft letting-go
            </p>
          </div>
          <p className="text-midnight-aubergine/80 leading-relaxed">
            This phase supports quiet adjustments and lightening your load. Think of it as cosmic decluttering.
          </p>
          <div className="bg-champagne/50 rounded p-4 space-y-2">
            <p className="font-medium text-midnight-aubergine">SoftWitch Take:</p>
            <p className="text-midnight-aubergine/70">
              Simplify. Edit your routines. Remove one thing that drains you.
            </p>
          </div>
          <p className="text-glam-mauve font-medium">
            Mini-Ritual: "Lighten the load."
          </p>
        </div>
      </motion.section>

      {/* Quarter Moons */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="space-y-4"
      >
        <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4">
          <h2 className="font-serif text-3xl text-midnight-aubergine">🌓 Quarter Moons — Tension Points</h2>
          <div className="space-y-2">
            <p className="text-midnight-aubergine/70">
              <span className="font-medium">Energy:</span> friction, decision-making, internal push-pull
            </p>
            <p className="text-midnight-aubergine/70">
              <span className="font-medium">Meaning:</span> you're at a crossroads — something needs to shift
            </p>
          </div>
          <p className="text-midnight-aubergine/80 leading-relaxed">
            Quarter moons are the moments where cycles hinge. They're not dramatic unless you resist them.
          </p>
          <div className="bg-champagne/50 rounded p-4 space-y-2">
            <p className="font-medium text-midnight-aubergine">SoftWitch Take:</p>
            <p className="text-midnight-aubergine/70">
              Make a choice. Move toward relief. Let the tension show you where to go.
            </p>
          </div>
          <p className="text-glam-mauve font-medium">
            Mini-Ritual: "Choose the path with relief."
          </p>
        </div>
      </motion.section>

      {/* How to Use */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🌙 How to Use the Moon Phases (SoftWitch Style)</h2>
        <div className="space-y-4">
          <div>
            <p className="text-midnight-aubergine/80 font-medium mb-2">This is not:</p>
            <p className="text-midnight-aubergine/70">
              predictive, spiritual obligation, or something to track obsessively
            </p>
          </div>
          <div>
            <p className="text-midnight-aubergine/80 font-medium mb-2">This is:</p>
            <p className="text-midnight-aubergine/70">
              a grounding rhythm, a way to understand your own internal cycles, a gentle reminder to tune in to yourself
            </p>
          </div>
          <p className="text-midnight-aubergine/80 leading-relaxed">
            Use the moon phases the way you'd use a calendar of vibes.
          </p>
        </div>
      </motion.section>

      {/* Soft Rules */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="bg-glam-mauve/10 rounded-lg p-6 space-y-3"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">✨ The Soft Rules</h2>
        <ul className="text-midnight-aubergine/70 space-y-2">
          <li>• Keep it simple.</li>
          <li>• Go with the energy, not against it.</li>
          <li>• You don't need to get it "right."</li>
          <li>• Use whatever helps you feel more grounded today.</li>
        </ul>
        <p className="text-midnight-aubergine/80 font-medium italic pt-2">
          Nothing spooky. Just cycles.
        </p>
      </motion.section>

      {/* Navigation */}
      <LoreNav />
    </div>
  );
}
