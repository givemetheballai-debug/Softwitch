import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BirthChart() {
  const [birthData, setBirthData] = useState({
    date: '',
    time: '',
    location: ''
  });
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate sun/moon/rising here
    // For now, just showing placeholder
    setResult({
      sun: { sign: 'Taurus', description: 'Grounded, sensual, steady. You move through the world with intention and purpose.' },
      moon: { sign: 'Cancer', description: 'Deep feeling, protective, nurturing. Your emotions guide you home.' },
      rising: { sign: 'Leo', description: 'Magnetic, expressive, warm. People feel your presence before you speak.' }
    });
  };

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
          A simple, modern birth chart that gives you your core energy, your emotional baseline, and your overall vibe — interpreted the SoftWitch way.
        </p>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-midnight-aubergine/5 rounded-lg p-8"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-midnight-aubergine mb-2">
              Birth Date
            </label>
            <input
              type="date"
              value={birthData.date}
              onChange={(e) => setBirthData({...birthData, date: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border-2 border-midnight-aubergine/20 focus:border-glam-mauve outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-midnight-aubergine mb-2">
              Birth Time (optional for more accuracy)
            </label>
            <input
              type="time"
              value={birthData.time}
              onChange={(e) => setBirthData({...birthData, time: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border-2 border-midnight-aubergine/20 focus:border-glam-mauve outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-midnight-aubergine mb-2">
              Birth Location (city, country)
            </label>
            <input
              type="text"
              value={birthData.location}
              onChange={(e) => setBirthData({...birthData, location: e.target.value})}
              placeholder="e.g. Cincinnati, USA"
              className="w-full px-4 py-3 rounded-lg border-2 border-midnight-aubergine/20 focus:border-glam-mauve outline-none transition-colors"
              required
            />
            <p className="text-xs text-midnight-aubergine/60 mt-1">
              Location is required for accurate rising sign calculation
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-glam-mauve text-champagne px-6 py-3 rounded-lg hover:bg-midnight-aubergine transition-colors font-medium"
          >
            Calculate Birth Chart
          </button>
        </form>
      </motion.div>

      {/* Results */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-midnight-aubergine/5 rounded-lg p-8">
            <h2 className="font-serif text-2xl text-midnight-aubergine mb-4">
              🌞 Your Sun (Your Core Energy)
            </h2>
            <p className="text-lg font-medium text-glam-mauve mb-2">
              {result.sun.sign}
            </p>
            <p className="text-midnight-aubergine/80">
              This represents the energy you move through the world with. It isn't about destiny — it's about your natural posture toward life.
            </p>
            <p className="text-midnight-aubergine/90 mt-4">
              {result.sun.description}
            </p>
          </div>

          <div className="bg-midnight-aubergine/5 rounded-lg p-8">
            <h2 className="font-serif text-2xl text-midnight-aubergine mb-4">
              🌙 Your Moon (Your Emotional Style)
            </h2>
            <p className="text-lg font-medium text-glam-mauve mb-2">
              {result.moon.sign}
            </p>
            <p className="text-midnight-aubergine/80">
              This is how you process emotions, recharge, and deal with internal shifts.
            </p>
            <p className="text-midnight-aubergine/90 mt-4">
              {result.moon.description}
            </p>
          </div>

          <div className="bg-midnight-aubergine/5 rounded-lg p-8">
            <h2 className="font-serif text-2xl text-midnight-aubergine mb-4">
              ⬆️ Your Rising (Your Social Vibe)
            </h2>
            <p className="text-lg font-medium text-glam-mauve mb-2">
              {result.rising.sign}
            </p>
            <p className="text-midnight-aubergine/80">
              This is the vibe people get from you before they know you.
            </p>
            <p className="text-midnight-aubergine/90 mt-4">
              {result.rising.description}
            </p>
          </div>
        </motion.div>
      )}

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
