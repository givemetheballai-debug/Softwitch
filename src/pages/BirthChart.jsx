import BirthChartForm from '../components/BirthChartForm';
import { motion } from 'framer-motion';

export default function BirthChart() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="font-serif text-5xl text-midnight-aubergine">
          Your Birth Chart
        </h1>
        <p className="text-lg text-midnight-aubergine/80 max-w-2xl mx-auto">
          Discover your sun, moon, and rising signs. Receive personalized mantras and rituals aligned with your cosmic blueprint.
        </p>
      </motion.div>

      <BirthChartForm />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 text-center text-sm"
      >
        <p className="text-midnight-aubergine/80">
          Your birth chart is the foundation of your SoftWitch profile.
          In the future, it will power all cosmic tools with personalized guidance.
        </p>
      </motion.div>
    </div>
  );
}
