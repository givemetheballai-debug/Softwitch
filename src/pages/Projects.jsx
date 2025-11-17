import { COSMIC_PROJECTS } from '../data/projects';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="font-serif text-5xl text-midnight-aubergine">
          The Cosmic Universe
        </h1>
        <p className="text-lg text-midnight-aubergine/80 max-w-2xl mx-auto">
          A family of tools for self-reflection, emotional release, and playful exploration.
          All connected by the same soft, magical energy.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {COSMIC_PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="bg-dusty-lilac/20 rounded-lg p-8 hover:bg-dusty-lilac/30 transition-all hover:glow"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-serif text-2xl text-midnight-aubergine">
                  {project.name}
                </h3>
                {project.status === 'live' ? (
                  <span className="text-xs px-3 py-1 rounded-full bg-soft-gold/30 text-midnight-aubergine font-medium">
                    Live
                  </span>
                ) : (
                  <span className="text-xs px-3 py-1 rounded-full bg-glam-mauve/20 text-glam-mauve font-medium">
                    Coming Soon
                  </span>
                )}
              </div>

              <p className="text-glam-mauve font-medium">
                {project.tagline}
              </p>

              <p className="text-midnight-aubergine/80 text-sm">
                {project.description}
              </p>

              {project.status === 'live' ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-glam-mauve text-champagne px-6 py-2 rounded-lg hover:bg-midnight-aubergine transition-colors font-medium text-sm"
                >
                  Visit {project.name} →
                </a>
              ) : (
                <button
                  disabled
                  className="inline-block bg-midnight-aubergine/20 text-midnight-aubergine/40 px-6 py-2 rounded-lg cursor-not-allowed font-medium text-sm"
                >
                  Coming Soon
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connection Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-midnight-aubergine/5 rounded-lg p-8 text-center"
      >
        <p className="text-midnight-aubergine/80">
          Each tool is designed to work independently, but they're all powered by the same cosmic framework.
          In the future, your birth chart will personalize every experience across the entire universe.
        </p>
      </motion.div>
    </div>
  );
}
