import { motion } from 'framer-motion';

const LIVE_PROJECTS = [
  {
    id: 'big-scream',
    name: 'Big Scream Energy',
    tagline: 'Scream into the void. The void screams back.',
    description: 'Got feelings? Too many feelings? Let them OUT. Scream as loud as you want (we measure the chaos), watch trippy animations react to your energy, then share your scream card with the world. It's therapy meets Y2K chaos meets vibes you can screenshot.',
    url: 'https://www.bigscreamenergy.com/'
  },
  {
    id: 'cosmic-mash',
    name: 'Cosmic MASH',
    tagline: 'Your future, but make it ✨cosmic✨',
    description: 'Remember MASH from middle school? This is that energy but the universe is in charge now. Answer questions about your vibe, dreams, and tolerance for chaos — then let the cosmos reveal your destiny. Mansion, Apartment, Shack, or House? The stars will decide.',
    url: 'https://www.playcosmicmash.com/'
  }
];

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="y2k-hero"
      >
        <h1>Magic Tools ✨</h1>
        <p>Games for your feelings, your future, and your chaos</p>
      </motion.div>

      {/* Live Games */}
      <div className="space-y-6">
        {LIVE_PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className={index === 0 ? 'neon-card' : 'game-card'}
          >
            <h3>{project.name}</h3>
            <p className="text-lg font-bold mb-3" style={{ background: 'rgba(255,255,255,0.95)', padding: '10px 15px', borderRadius: '15px', color: '#000' }}>
              {project.tagline}
            </p>
            <p className="mb-4">
              {project.description}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-6 py-3 rounded-full border-4 border-black font-bold text-lg hover:scale-105 transition-transform"
              style={{ boxShadow: '4px 4px 0px #ff00ff' }}
            >
              Play Now →
            </a>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="polka-box-y2k"
      >
        <h3 className="text-center mb-4">More Magic Coming Soon ✨</h3>
        <p className="text-center mb-3">
          We're building more tools for self-discovery, emotional release, and cosmic guidance. Each one designed to help you understand yourself better while having way too much fun.
        </p>
        <p className="text-center font-bold" style={{ background: 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Stay tuned for personalized readings, daily rituals, and tools that actually get you.
        </p>
      </motion.div>
    </div>
  );
}
