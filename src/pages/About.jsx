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
          About SoftWitch
        </h1>
        <p className="text-xl text-glam-mauve font-medium">
          Product Manager by day. Witch by vibes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="prose prose-lg max-w-none space-y-6 text-midnight-aubergine/90"
      >
        <div className="bg-dusty-lilac/20 rounded-lg p-8 space-y-4">
          <p>
            Hi, I'm Jamie. I've spent 15+ years building products at places like Nielsen and Kantar,
            managing $100M+ portfolios and creating tools people actually use.
          </p>
          
          <p>
            But I've also always been the person who reads tarot privately, who tracks moon phases,
            who believes in tiny rituals and pattern recognition.
          </p>
          
          <p>
            SoftWitch is what happens when you combine product strategy with intuition,
            modern design with gentle magic, and AI-assisted building with human intention.
          </p>
        </div>

        <div className="bg-midnight-aubergine/5 rounded-lg p-8 space-y-4">
          <h2 className="font-serif text-2xl text-midnight-aubergine">
            The Philosophy
          </h2>
          
          <p>
            This isn't woo-woo wellness. It's not occult. It's not here to predict your future
            or tell you what to do.
          </p>
          
          <p>
            It's emotional intelligence meets product thinking meets a touch of cosmic metaphor.
            It's witchcraft for people who work in tech, who value clarity, who want
            self-reflection to feel modern and approachable.
          </p>
          
          <p>
            I used AI to help me build this — not because AI is magic, but because it let me
            bring my ideas to life faster. Every ritual, every piece of content, every vibe here
            started with my voice and my intention.
          </p>
        </div>

        <div className="bg-dusty-lilac/20 rounded-lg p-8 space-y-4">
          <h2 className="font-serif text-2xl text-midnight-aubergine">
            The Vision
          </h2>
          
          <p>
            SoftWitch is a growing universe. Right now, it's a hub connecting cosmic tools
            for release, play, and self-discovery.
          </p>
          
          <p>
            Eventually, your birth chart will become your cosmic profile — powering personalized
            experiences across all the tools. Shopping recommendations. Travel suggestions.
            Emotional support. All aligned with your energy.
          </p>
          
          <p>
            For now, explore. Play. See what resonates. That's the only rule.
          </p>
        </div>
      </motion.div>

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
          <span className="text-midnight-aubergine/30">•</span>
          <a 
            href="https://fancylazytravel.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-glam-mauve hover:text-midnight-aubergine transition-colors"
          >
            Fancy Lazy Travel
          </a>
        </div>
      </motion.div>
    </div>
  );
}
