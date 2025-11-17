import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="font-serif text-5xl text-midnight-aubergine">
          About
        </h1>
      </motion.div>

      {/* About Me */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="prose prose-lg max-w-none space-y-6 text-midnight-aubergine/90"
      >
        <div className="bg-midnight-aubergine/5 rounded-lg p-8 space-y-4">
          <h2 className="font-serif text-2xl text-midnight-aubergine">
            Hi, I'm Jamie.
          </h2>
          
          <p>
            I've always loved magic — the quiet kind. The kind found in rituals, intention-setting, pattern recognition, and those small, grounding moments that make life feel a little softer and more meaningful. I love self-help, personal growth, learning about myself, and yes… I absolutely love astrology.
          </p>
          
          <p>
            Professionally, I'm a writer, product strategist, and AI builder creating fun, playful tools and mini-experiments across astrology, culture, and women's sports. I blend vibes, strategy, data, and storytelling to make intuitive products people actually want to use — and I build fast with AI.
          </p>
          
          <p>
            SoftWitch is where all of those worlds overlap.
          </p>
          
          <div className="pl-6 border-l-4 border-glam-mauve space-y-2">
            <p className="font-medium">A blend of intuition and creativity.</p>
            <p className="font-medium">Design and gentle magic.</p>
            <p className="font-medium">Human intention and modern tools.</p>
          </div>
          
          <p>
            I built this site to explore the things I'm drawn to — cosmic frameworks, grounding rituals, tiny shifts that change your day — and to share them in a way that feels fun, beautiful, and zero-pressure. It's a modern witchcraft experiment: a soft, cosmic corner of the internet for curiosity and clarity.
          </p>
          
          <p>
            Not a belief system.<br />
            Not a forecast.<br />
            Just a place to explore yourself in a more magical way.
          </p>
        </div>

        {/* Origin Story */}
        <div className="bg-midnight-aubergine/5 rounded-lg p-8 space-y-4">
          <h2 className="font-serif text-2xl text-midnight-aubergine">
            Origin Story
          </h2>
          
          <p>
            SoftWitch started as a tiny experiment — a place to blend intuition, design, and modern magic. I wanted tools that felt gentle, creative, curious, and smart. Not woo, not overwhelming, not literal. Just meaningful. This site is a playground for that idea.
          </p>
        </div>

        {/* The Philosophy */}
        <div className="bg-midnight-aubergine/5 rounded-lg p-8 space-y-4">
          <h2 className="font-serif text-2xl text-midnight-aubergine">
            The Philosophy
          </h2>
          
          <p>
            This isn't woo-woo wellness. It's not occult. It's not here to predict your future or tell you what to do.
          </p>
          
          <p>
            It's emotional intelligence meets product thinking meets a touch of cosmic metaphor. It's witchcraft for people who work in tech, who value clarity, who want self-reflection to feel modern and approachable.
          </p>
          
          <p>
            I used AI to help me build this — not because AI is magic, but because it let me bring my ideas to life faster. Every ritual, every piece of content, every vibe here started with my voice and my intention.
          </p>
        </div>

        {/* The Vision */}
        <div className="bg-midnight-aubergine/5 rounded-lg p-8 space-y-4">
          <h2 className="font-serif text-2xl text-midnight-aubergine">
            The Vision
          </h2>
          
          <p>
            SoftWitch is a growing universe. Right now, it's a hub connecting cosmic tools for release, play, and self-discovery.
          </p>
          
          <p>
            Eventually, your birth chart will become your cosmic profile — powering personalized experiences across all the tools. Shopping recommendations. Travel suggestions. Emotional support. All aligned with your energy.
          </p>
          
          <p>
            For now, explore. Play. See what resonates. That's the only rule.
          </p>
        </div>
      </motion.div>

      {/* Footer Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center space-y-4"
      >
        <p className="text-sm text-midnight-aubergine/60">
          Built by Jamie Williams
        </p>
        <div className="flex gap-4 justify-center text-sm">
          <a 
            href="https://buildwithjamie.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-glam-mauve hover:text-midnight-aubergine transition-colors"
          >
            Build With Jamie
          </a>
        </div>
      </motion.div>
    </div>
  );
}
