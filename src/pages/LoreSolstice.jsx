import { motion } from 'framer-motion';
import LoreNav from '../components/LoreNav';

export default function LoreSolstice() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Breadcrumb */}
      <div className="text-sm text-sw-yellow font-semibold">
        <span>Lore Library</span>
        <span className="mx-2">✨</span>
        <span>Solstice & Equinox Guide</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="y2k-hero"
      >
        <h1>
          🌞 Solstice & Equinox 🌙
        </h1>
        <p>
          Seasonal parties for your soul. Zero pressure, full vibes.
        </p>
      </motion.div>

      <div className="text-center space-y-3 text-white text-lg">
        <p>Solstices and equinoxes = nature's reset buttons. Perfect excuse to gather, reflect, or just vibe with the season.</p>
        <p className="text-sw-pink font-semibold">Here's how to celebrate like a SoftWitch. ✨</p>
      </div>

      {/* Summer Solstice */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="neon-card"
      >
        <h3 className="mb-4">🌞 Summer Solstice (Light Peak)</h3>
        
        <div className="space-y-4">
          <div>
            <p className="font-bold mb-2">✨ Theme: radiance, expansion, full expression</p>
            <p className="font-bold mb-2">💛 Vibe: peak sunlight, openness, heat, energy</p>
          </div>

          <p className="italic">You're in high energy — the world is bright and alive.</p>

          <div>
            <p className="font-bold mb-2">How to honor it:</p>
            <p>• Have a golden hour picnic<br/>
            • Wear something bright or silky<br/>
            • Write three things you want to glow more in your life<br/>
            • Make a "sun tea" (water + herbs charged outside)<br/>
            • Celebrate with friends outside</p>
          </div>

          <div className="bg-white/90 rounded-2xl p-4 mt-4">
            <p className="font-bold text-sw-purple mb-2">Party ideas:</p>
            <p className="text-sw-purple">• Long-table dinner in the backyard<br/>
            • Fresh fruit + herb cocktails<br/>
            • "Glow" dress code (gold, citrus, brights)</p>
          </div>
        </div>
      </motion.section>

      {/* Autumn Equinox */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="polka-box-y2k"
      >
        <h3 className="mb-4">🍂 Autumn Equinox (Perfect Balance)</h3>
        
        <div className="space-y-4">
          <div>
            <p className="font-bold mb-2">✨ Theme: balance, harvest, gratitude</p>
            <p className="font-bold mb-2">💛 Vibe: cozy, transitional, grounding</p>
          </div>

          <p className="italic">Equal light and dark — a moment of balance.</p>

          <div>
            <p className="font-bold mb-2">How to honor it:</p>
            <p>• Make a gratitude list for the past 3 months<br/>
            • Do a gentle home declutter<br/>
            • Light a warm candle and set a grounding intention<br/>
            • Make a cozy meal with fall ingredients</p>
          </div>

          <div className="bg-white/90 rounded-2xl p-4 mt-4">
            <p className="font-bold text-sw-purple mb-2">Party ideas:</p>
            <p className="text-sw-purple">• Soup night<br/>
            • Candle-lit dinner<br/>
            • Apple cocktails<br/>
            • "Bring something you're grateful for" toast</p>
          </div>
        </div>
      </motion.section>

      {/* Winter Solstice */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="magic-box-y2k"
      >
        <h2 className="font-serif text-3xl text-white mb-4">❄️ Winter Solstice (Deep Rest)</h2>
        
        <div className="space-y-4 text-white">
          <div>
            <p className="font-bold text-sw-yellow mb-2">✨ Theme: stillness, reflection, quiet magic</p>
            <p className="font-bold text-sw-yellow mb-2">💛 Vibe: dark, slow, soft, internal</p>
          </div>

          <p className="italic">The darkest day of the year — a time for introspection.</p>

          <div>
            <p className="font-bold text-sw-yellow mb-2">How to honor it:</p>
            <p>• Host a candle ceremony with friends<br/>
            • Write what you're letting go of before the new year<br/>
            • Drink something warm and slow<br/>
            • Do a mini "year in review"</p>
          </div>

          <div className="bg-white/20 rounded-2xl p-4 mt-4 border-2 border-sw-yellow">
            <p className="font-bold mb-2">Party ideas:</p>
            <p>• Candle party (everyone brings one)<br/>
            • Cozy dinner in sweaters<br/>
            • Silent 3-minute toast to the new cycle</p>
          </div>
        </div>
      </motion.section>

      {/* Spring Equinox */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="neon-card"
      >
        <h3 className="mb-4">🌱 Spring Equinox (New Beginnings)</h3>
        
        <div className="space-y-4">
          <div>
            <p className="font-bold mb-2">✨ Theme: rebirth, fresh energy, creativity</p>
            <p className="font-bold mb-2">💛 Vibe: light, floral, hopeful, renewal</p>
          </div>

          <p className="italic">The world begins again — so do you.</p>

          <div>
            <p className="font-bold mb-2">How to honor it:</p>
            <p>• Try one new tiny habit<br/>
            • Bring flowers into your home<br/>
            • Do a "spring cleaning of the mind" list<br/>
            • Take a short walk outside</p>
          </div>

          <div className="bg-white/90 rounded-2xl p-4 mt-4">
            <p className="font-bold text-sw-purple mb-2">Party ideas:</p>
            <p className="text-sw-purple">• Brunch<br/>
            • Flower-arranging gathering<br/>
            • Pastel dress code</p>
          </div>
        </div>
      </motion.section>

      {/* How to Throw a Party */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="house-rules-y2k"
      >
        <h2 className="mb-6">⭐ How to Throw a SoftWitch Party (Any Season)</h2>

        <div className="space-y-3">
          <p>✨ 1. Set the vibe → Candles, soft lighting, seasonal colors</p>
          <p>✨ 2. Pick a theme → Glow (summer), Cozy (winter), Balance (equinox)</p>
          <p>✨ 3. Choose one grounding moment → A toast, shared intention, collective breath</p>
          <p>✨ 4. Keep it simple → Finger foods, signature drink, ambient playlist</p>
          <p>✨ 5. End with a ritual → Light a small candle, write something down, take one group photo</p>
        </div>

        <p className="text-center font-bold text-2xl mt-6">That's it. Zero pressure. ✨</p>
      </motion.section>

      {/* Navigation */}
      <LoreNav />
    </div>
  );
}
