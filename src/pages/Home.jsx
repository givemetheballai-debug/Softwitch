import { Link } from 'react-router-dom';
import DailyGrounding from '../components/DailyGrounding';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="font-serif text-5xl md:text-6xl text-midnight-aubergine text-shadow-glow">
          Welcome to SoftWitch
        </h1>
        <p className="text-xl text-midnight-aubergine/80 max-w-2xl mx-auto">
          A modern cosmic universe for self-reflection, intuition, and gentle rituals.
          Witchcraft for normal people.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link 
            to="/birth-chart"
            className="bg-glam-mauve text-champagne px-6 py-3 rounded-lg hover:bg-midnight-aubergine transition-colors font-medium"
          >
            Calculate Birth Chart
          </Link>
          <Link 
            to="/lore"
            className="border-2 border-glam-mauve text-glam-mauve px-6 py-3 rounded-lg hover:bg-glam-mauve hover:text-champagne transition-colors font-medium"
          >
            Explore Lore
          </Link>
        </div>
      </motion.div>

      {/* Daily Grounding */}
      <DailyGrounding />

      {/* House Rules */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-midnight-aubergine/5 rounded-lg p-8"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine text-center mb-6">
          House Rules
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p>✦ Everything here is an invitation, not a prescription</p>
            <p>✦ Magic is pattern recognition with better lighting</p>
            <p>✦ Nothing is spooky. Nothing is literal</p>
            <p>✦ Keep it short, fun, human</p>
            <p>✦ Touch your chest and breathe when things get weird</p>
          </div>
          <div className="space-y-2">
            <p>✦ Magic works best when it's tiny</p>
            <p>✦ You're not here to be fixed — just to explore</p>
            <p>✦ Curiosity &gt; certainty. Vibes &gt; beliefs</p>
            <p>✦ Every room should feel good to be in</p>
            <p>✦ AI helped build this — intention is 100% human</p>
          </div>
        </div>
      </motion.div>

      {/* Cosmic Tools Teaser */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">
          Explore the Cosmic Universe
        </h2>
        <p className="text-midnight-aubergine/80">
          SoftWitch connects to a family of tools for self-reflection, release, and play.
        </p>
        <Link 
          to="/projects"
          className="inline-block text-glam-mauve hover:text-midnight-aubergine transition-colors font-medium"
        >
          See All Projects →
        </Link>
      </motion.div>
    </div>
  );
}
