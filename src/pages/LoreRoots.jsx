import { motion } from 'framer-motion';
import LoreNav from '../components/LoreNav';

export default function LoreRoots() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-midnight-aubergine/60">
        <span>Lore Library</span>
        <span className="mx-2">→</span>
        <span>The Roots of Modern Witchcraft & Astrology</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="font-serif text-5xl text-midnight-aubergine">
          🔮 The Roots of Modern Witchcraft & Astrology
        </h1>
        <p className="text-lg text-midnight-aubergine/80 leading-relaxed">
          A soft, modern guide to where these practices came from — and how we use them now.
        </p>
        <p className="text-midnight-aubergine/70">
          Witchcraft and astrology have thousands of years of history across cultures. SoftWitch isn't recreating those traditions — it's reinterpreting their core principles for clarity, grounding, and modern self-reflection.
        </p>
        <p className="text-midnight-aubergine/70">
          This page helps people understand: where these ideas come from, how practices evolved, why they still resonate, and how SoftWitch uses them in non-literal, non-spiritual ways.
        </p>
        <p className="text-midnight-aubergine/70">
          Nothing too detailed. Nothing too mystical. Just clear, respectful context.
        </p>
      </motion.div>

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🌿 Introduction</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Magic has always been a language for understanding life — not a supernatural force, but a way to make meaning. Across cultures, witchcraft and astrology have been tools for:
        </p>
        <ul className="text-midnight-aubergine/70 space-y-2 pl-6">
          <li>• pattern recognition</li>
          <li>• emotional grounding</li>
          <li>• community rituals</li>
          <li>• understanding cycles</li>
          <li>• feeling connected to something bigger</li>
        </ul>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          SoftWitch takes those ancient frameworks and turns them into something modern: tiny rituals, gentle metaphors, and simple tools for clarity.
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          We're not here to cast spells, predict futures, or claim secret knowledge. We're here to use the softest, most human parts of these traditions.
        </p>
      </motion.section>

      {/* What "Witchcraft" Really Means */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🔮 What "Witchcraft" Really Means (The SoftWitch Take)</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Witchcraft wasn't originally about: hexes, fantasy tropes, the occult, or spooky aesthetics.
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Historically, witches were: healers, midwives, community caretakers, people who noticed patterns, intuitive thinkers, makers of herbal remedies, and keepers of rituals.
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed font-medium">
          Witchcraft was a practice of attention and intention — not theatrics.
        </p>

        <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-3">
          <h3 className="font-serif text-xl text-midnight-aubergine">SoftWitch Reinterpretation</h3>
          <p className="text-midnight-aubergine/70">
            We bring witchcraft into the modern world as: self-reflection, emotional tools, sensory rituals, nervous system regulation, pattern awareness, intuition, and meaning-making.
          </p>
          <p className="text-midnight-aubergine/80 leading-relaxed">
            Modern witchcraft is: lighting a candle with intention, setting boundaries, noticing repeating patterns, creating tiny rituals, listening to your intuition, and making your life feel softer, clearer, and more magical.
          </p>
          <p className="text-midnight-aubergine/70 italic">
            No dogma. No hierarchy. No belief system required.
          </p>
        </div>
      </motion.section>

      {/* History of Astrology */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">✨ The History of Astrology (Soft Edition)</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Astrology is one of the oldest meaning-making systems in the world. Ancient cultures used the sky as a calendar, a navigation tool, and a metaphorical framework for understanding human experience.
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Over thousands of years, astrology developed into: cycles, archetypes, patterns, and symbolic language.
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed font-medium">
          It was never meant to be literal. It was meant to help people understand themselves.
        </p>

        <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-3">
          <h3 className="font-serif text-xl text-midnight-aubergine">SoftWitch Reinterpretation</h3>
          <p className="text-midnight-aubergine/70">
            We don't use astrology as prediction. We use it as: symbolism, storytelling, personality cues, timing metaphors, and emotional frameworks.
          </p>
          <ul className="text-midnight-aubergine/70 space-y-2">
            <li>• Your birth chart becomes: <span className="italic">a map of themes, not your destiny.</span></li>
            <li>• Moon phases become: <span className="italic">a rhythm, not a forecast.</span></li>
            <li>• Signs become: <span className="italic">patterns, not fixed traits.</span></li>
          </ul>
          <p className="text-midnight-aubergine/70 italic">
            It's astrology — cleaned, softened, modernized.
          </p>
        </div>
      </motion.section>

      {/* Why These Practices Still Matter */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🌙 Why These Practices Still Matter</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Because humans still need: rituals, grounding, meaning, reflection, community, cycles, transitions, and moments of pause.
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Witchcraft and astrology survived for thousands of years because they help people feel more connected to: themselves, their emotions, the present moment, and the world around them.
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed font-medium">
          SoftWitch keeps the parts that matter:
        </p>
        <ul className="text-midnight-aubergine/70 space-y-2 pl-6">
          <li>⭐ the reflection</li>
          <li>⭐ the rituals</li>
          <li>⭐ the patterns</li>
          <li>⭐ the meaning</li>
          <li>⭐ the softness</li>
          <li>⭐ the creativity</li>
        </ul>
        <p className="text-midnight-aubergine/70 italic">
          And leaves behind the rest.
        </p>
      </motion.section>

      {/* How SoftWitch Uses This History */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🧙‍♀️ How SoftWitch Uses This History</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          We borrow the language, metaphors, and emotional tools — not the belief systems.
        </p>
        <div className="bg-dusty-lilac/20 rounded-lg p-6 space-y-2">
          <p className="text-midnight-aubergine/70">
            <span className="font-medium">witchcraft</span> → ritual, intention, grounding
          </p>
          <p className="text-midnight-aubergine/70">
            <span className="font-medium">astrology</span> → cycles, timing, archetypes, symbolism
          </p>
          <p className="text-midnight-aubergine/70">
            <span className="font-medium">AI</span> → creative collaboration, pattern processing, fast building
          </p>
          <p className="text-midnight-aubergine/70">
            <span className="font-medium">product strategy</span> → clarity, usability, simplicity
          </p>
        </div>
        <p className="text-midnight-aubergine/80 leading-relaxed font-medium">
          The result?
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          A modern witchcraft experiment designed to be: safe, secular, fun, intuitive, creative, helpful, and emotionally intelligent.
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed italic">
          This is magic without the mystique. Astrology without the overwhelm. Witchcraft without the dogma. Just soft, modern meaning-making.
        </p>
      </motion.section>

      {/* If You're New Here */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-glam-mauve/10 rounded-lg p-6 space-y-3"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">⭐ "If You're New Here…"</h2>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          You don't need to know anything about witchcraft or astrology to enjoy SoftWitch.
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed">
          Just explore. Notice what resonates. Use what feels good.
        </p>
        <p className="text-midnight-aubergine/80 leading-relaxed font-medium italic">
          This is a playground, not a belief system.
        </p>
      </motion.section>

      {/* Navigation */}
      <LoreNav />
    </div>
  );
}
