import { motion } from 'framer-motion';
import LoreNav from '../components/LoreNav';

export default function LoreSolstice() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-midnight-aubergine/60">
        <span>Lore Library</span>
        <span className="mx-2">→</span>
        <span>Solstice & Equinox Guide</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="font-serif text-5xl text-midnight-aubergine">
          🌞 Solstice & Equinox Guide
        </h1>
        <p className="text-lg text-midnight-aubergine/80 leading-relaxed">
          How to celebrate the seasonal shifts — softly, modernly, and with zero pressure.
        </p>
        <p className="text-midnight-aubergine/70">
          Solstices and equinoxes mark the turning points in the year. They're not mystical — they're just nature's calendar.
        </p>
        <p className="text-midnight-aubergine/70">
          SoftWitch treats them like: reflection moments, reset points, little seasonal celebrations, and an excuse to gather with people you like.
        </p>
        <p className="text-midnight-aubergine/70 italic">
          Here's how to understand (and enjoy) them.
        </p>
      </motion.div>

      {/* Summer Solstice */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🌞 Summer Solstice (Light Peak)</h2>
        
        <div className="space-y-2">
          <p className="text-midnight-aubergine/70">
            <span className="font-medium">Theme:</span> radiance, expansion, full expression
          </p>
          <p className="text-midnight-aubergine/70">
            <span className="font-medium">Vibe:</span> peak sunlight, openness, heat, energy
          </p>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">What it means:</p>
          <p className="text-midnight-aubergine/70">You're in high energy — the world is bright and alive.</p>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">SoftWitch ways to honor it:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• Have a golden hour picnic</li>
            <li>• Wear something bright or silky</li>
            <li>• Write three things you want to glow more in your life</li>
            <li>• Make a "sun tea" (water + herbs charged outside)</li>
            <li>• Celebrate with friends outside</li>
          </ul>
        </div>

        <div className="bg-champagne/50 rounded p-4">
          <p className="font-medium text-midnight-aubergine mb-2">Party ideas:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• A long-table dinner in the backyard</li>
            <li>• Fresh fruit + herb cocktails</li>
            <li>• "Glow" dress code (gold, citrus, brights)</li>
          </ul>
        </div>
      </motion.section>

      {/* Autumn Equinox */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🍂 Autumn Equinox (Perfect Balance)</h2>
        
        <div className="space-y-2">
          <p className="text-midnight-aubergine/70">
            <span className="font-medium">Theme:</span> balance, harvest, gratitude
          </p>
          <p className="text-midnight-aubergine/70">
            <span className="font-medium">Vibe:</span> cozy, transitional, grounding
          </p>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">What it means:</p>
          <p className="text-midnight-aubergine/70">Equal light and dark — a moment of balance.</p>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">SoftWitch ways to honor it:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• Make a gratitude list for the past 3 months</li>
            <li>• Do a gentle home declutter</li>
            <li>• Light a warm candle and set a grounding intention</li>
            <li>• Make a cozy meal with fall ingredients</li>
          </ul>
        </div>

        <div className="bg-champagne/50 rounded p-4">
          <p className="font-medium text-midnight-aubergine mb-2">Party ideas:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• Soup night</li>
            <li>• Candle-lit dinner</li>
            <li>• Apple cocktails</li>
            <li>• "Bring something you're grateful for" toast</li>
          </ul>
        </div>
      </motion.section>

      {/* Winter Solstice */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">❄️ Winter Solstice (Deep Rest)</h2>
        
        <div className="space-y-2">
          <p className="text-midnight-aubergine/70">
            <span className="font-medium">Theme:</span> stillness, reflection, quiet magic
          </p>
          <p className="text-midnight-aubergine/70">
            <span className="font-medium">Vibe:</span> dark, slow, soft, internal
          </p>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">What it means:</p>
          <p className="text-midnight-aubergine/70">The darkest day of the year — a time for introspection.</p>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">SoftWitch ways to honor it:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• Host a candle ceremony with friends</li>
            <li>• Write what you're letting go of before the new year</li>
            <li>• Drink something warm and slow</li>
            <li>• Do a mini "year in review"</li>
          </ul>
        </div>

        <div className="bg-champagne/50 rounded p-4">
          <p className="font-medium text-midnight-aubergine mb-2">Party ideas:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• Candle party (everyone brings one)</li>
            <li>• Cozy dinner in sweaters</li>
            <li>• Silent 3-minute toast to the new cycle</li>
          </ul>
        </div>
      </motion.section>

      {/* Spring Equinox */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-dusty-lilac/20 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🌱 Spring Equinox (New Beginnings)</h2>
        
        <div className="space-y-2">
          <p className="text-midnight-aubergine/70">
            <span className="font-medium">Theme:</span> rebirth, fresh energy, creativity
          </p>
          <p className="text-midnight-aubergine/70">
            <span className="font-medium">Vibe:</span> light, floral, hopeful, renewal
          </p>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">What it means:</p>
          <p className="text-midnight-aubergine/70">The world begins again — so do you.</p>
        </div>

        <div>
          <p className="font-medium text-midnight-aubergine mb-2">SoftWitch ways to honor it:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• Try one new tiny habit</li>
            <li>• Bring flowers into your home</li>
            <li>• Do a "spring cleaning of the mind" list</li>
            <li>• Take a short walk outside</li>
          </ul>
        </div>

        <div className="bg-champagne/50 rounded p-4">
          <p className="font-medium text-midnight-aubergine mb-2">Party ideas:</p>
          <ul className="text-midnight-aubergine/70 space-y-1 pl-4">
            <li>• Brunch</li>
            <li>• Flower-arranging gathering</li>
            <li>• Pastel dress code</li>
          </ul>
        </div>
      </motion.section>

      {/* How to Throw a Party */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">⭐ How to Throw a SoftWitch Solstice Party (Any Season)</h2>
        <p className="text-midnight-aubergine/70 italic mb-4">Step-by-step, simple, aesthetic:</p>

        <div className="space-y-3">
          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">1. Set the vibe</p>
            <p className="text-midnight-aubergine/70 text-sm">Candles, soft lighting, seasonal colors.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">2. Pick a theme</p>
            <p className="text-midnight-aubergine/70 text-sm">Glow (summer), Cozy (winter), Balance (equinox).</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">3. Choose one grounding moment</p>
            <p className="text-midnight-aubergine/70 text-sm">A toast, a shared intention, a collective breath.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">4. Keep it simple</p>
            <p className="text-midnight-aubergine/70 text-sm">Finger foods, signature drink, ambient playlist.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">5. End with a ritual</p>
            <p className="text-midnight-aubergine/70 text-sm">Light a small candle, write something down, take one group photo.</p>
          </div>
        </div>

        <p className="text-midnight-aubergine/80 italic text-center pt-4">
          That's it. Zero pressure.
        </p>
      </motion.section>

      {/* Navigation */}
      <LoreNav />
    </div>
  );
}
