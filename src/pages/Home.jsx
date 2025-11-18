import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Calculate moon phase
function getMoonPhase() {
  const today = new Date();
  const year = today.getFullYear();
  
  // Known new moon: January 11, 2024
  const knownNewMoon = new Date('2024-01-11');
  const msPerDay = 24 * 60 * 60 * 1000;
  const daysSinceKnownNew = (today - knownNewMoon) / msPerDay;
  
  // Lunar cycle is approximately 29.53 days
  const lunarCycle = 29.53;
  const phase = (daysSinceKnownNew % lunarCycle) / lunarCycle;
  
  if (phase < 0.03 || phase > 0.97) {
    return { name: 'New Moon', description: 'New beginnings, intention-setting, planting seeds' };
  } else if (phase < 0.22) {
    return { name: 'Waxing Crescent', description: 'Building momentum, taking action, growing' };
  } else if (phase < 0.28) {
    return { name: 'First Quarter', description: 'Decision time, overcoming obstacles, commitment' };
  } else if (phase < 0.47) {
    return { name: 'Waxing Gibbous', description: 'Refinement, adjustment, preparation' };
  } else if (phase < 0.53) {
    return { name: 'Full Moon', description: 'Culmination, celebration, release what no longer serves' };
  } else if (phase < 0.72) {
    return { name: 'Waning Gibbous', description: 'Gratitude, sharing wisdom, giving back' };
  } else if (phase < 0.78) {
    return { name: 'Last Quarter', description: 'Letting go, forgiveness, clearing space' };
  } else {
    return { name: 'Waning Crescent', description: 'Rest, reflection, and surrender' };
  }
}

// Calculate season
function getSeason() {
  const today = new Date();
  const month = today.getMonth(); // 0-11
  const day = today.getDate();
  
  // Northern Hemisphere seasons (Jamie is in Cincinnati)
  // Spring: March 20 - June 20
  // Summer: June 21 - September 22
  // Autumn: September 23 - December 21
  // Winter: December 22 - March 19
  
  let season = '';
  let period = '';
  
  if ((month === 2 && day >= 20) || month === 3 || month === 4 || (month === 5 && day <= 20)) {
    season = 'Spring';
    if (month === 2 || (month === 3 && day < 15)) period = 'Early';
    else if (month === 3 || (month === 4 && day < 15)) period = 'Mid';
    else period = 'Late';
  } else if ((month === 5 && day >= 21) || month === 6 || month === 7 || (month === 8 && day <= 22)) {
    season = 'Summer';
    if (month === 5 || (month === 6 && day < 15)) period = 'Early';
    else if (month === 6 || (month === 7 && day < 15)) period = 'Mid';
    else period = 'Late';
  } else if ((month === 8 && day >= 23) || month === 9 || month === 10 || (month === 11 && day <= 21)) {
    season = 'Autumn';
    if (month === 8 || (month === 9 && day < 15)) period = 'Early';
    else if (month === 9 || (month === 10 && day < 15)) period = 'Mid';
    else period = 'Late';
  } else {
    season = 'Winter';
    if (month === 11 || (month === 0 && day < 15)) period = 'Early';
    else if (month === 0 || (month === 1 && day < 15)) period = 'Mid';
    else period = 'Late';
  }
  
  const descriptions = {
    'Early Spring': 'A season for new growth',
    'Mid Spring': 'A season for blooming',
    'Late Spring': 'A season for abundance',
    'Early Summer': 'A season for expansion',
    'Mid Summer': 'A season for fullness',
    'Late Summer': 'A season for ripening',
    'Early Autumn': 'A season for harvesting',
    'Mid Autumn': 'A season for gratitude',
    'Late Autumn': 'A season for release',
    'Early Winter': 'A season for rest',
    'Mid Winter': 'A season for dreaming',
    'Late Winter': 'A season for waiting'
  };
  
  return {
    name: `${period} ${season}`,
    description: descriptions[`${period} ${season}`]
  };
}

export default function Home() {
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const moonPhase = getMoonPhase();
  const season = getSeason();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <p className="text-2xl font-semibold text-sw-pink">
          ✨ Modern magic for smart adults ✨
        </p>
        <p className="text-base text-sw-purple/80 max-w-2xl mx-auto">
          Intuition, creativity, and a little bit of magic —<br />
          witchcraft for people who love clarity, design, and good vibes.
        </p>
      </motion.div>

      {/* Cosmic Snapshot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative overflow-hidden bg-gradient-to-br from-sw-purple/10 to-sw-pink/10 rounded-xl p-6 text-center shadow-soft"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-lg p-6">
          <h2 className="font-serif text-2xl text-sw-purple mb-2">
            🌘 Today's Cosmic Snapshot
          </h2>
          <p className="text-base font-medium text-sw-purple mb-2">
            {dateStr}
          </p>
          <p className="text-sm text-sw-purple/80">
            Today's moon: {moonPhase.name} — {moonPhase.description}<br />
            Today's season: {season.name} — {season.description}
          </p>
          <Link 
            to="/lore/moon-phases"
            className="inline-block mt-3 text-sm text-sw-pink hover:text-sw-purple transition-colors font-medium"
          >
            More on moon phases ✨
          </Link>
        </div>
      </motion.div>

      {/* Have Some Fun */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="font-serif text-3xl text-sw-purple mb-3">
            🎮 Have Some Fun
          </h2>
          <p className="text-sw-purple/80">
            These are cosmic games I created. Quick, fun, and surprisingly effective. ✨
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <a 
            href="https://bigscreamenergy.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl overflow-hidden hover:shadow-glow-pink transition-all duration-300 shadow-soft group"
          >
            <div className="h-48 bg-gradient-to-br from-sw-pink/20 to-sw-rust/20 flex items-center justify-center text-6xl">
              😱
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl text-sw-pink mb-3 group-hover:text-sw-purple transition-colors">
                💥 Big Scream Energy
              </h3>
              <p className="text-sm text-sw-purple/80">
                Sometimes you just need to scream. Do it and feel better. 🔊
              </p>
            </div>
          </a>
          
          <a 
            href="https://playcosmicmash.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl overflow-hidden hover:shadow-glow-pink transition-all duration-300 shadow-soft group"
          >
            <div className="h-48 bg-gradient-to-br from-sw-purple/20 to-sw-yellow/20 flex items-center justify-center text-6xl">
              🔮
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl text-sw-pink mb-3 group-hover:text-sw-purple transition-colors">
                ⭐ Cosmic MASH
              </h3>
              <p className="text-sm text-sw-purple/80">
                The fortune-telling game you played as a kid — now with cosmic energy. 🌙
              </p>
            </div>
          </a>
        </div>
      </motion.div>

      {/* Explore the Universe */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="font-serif text-3xl text-sw-purple mb-3">
            🌟 Explore the Universe
          </h2>
          <p className="text-sw-purple/80">
            A constellation of tools for clarity, release, and self-discovery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            to="/lore/roots" 
            className="bg-white rounded-xl p-8 hover:shadow-glow-purple transition-all duration-300 shadow-soft"
          >
            <h3 className="font-serif text-2xl text-sw-teal mb-3">
              The Roots of Magic
            </h3>
            <p className="text-sm text-sw-purple/80">
              Learn the lore behind modern witchcraft and astrology.
            </p>
          </Link>
          
          <Link 
            to="/lore/rituals" 
            className="bg-white rounded-xl p-8 hover:shadow-glow-purple transition-all duration-300 shadow-soft"
          >
            <h3 className="font-serif text-2xl text-sw-teal mb-3">
              Rituals
            </h3>
            <p className="text-sm text-sw-purple/80">
              Tiny practices for everyday magic — grounding, releasing, beginning again.
            </p>
          </Link>
          
          <Link 
            to="/lore/inner-tools" 
            className="bg-white rounded-xl p-8 hover:shadow-glow-purple transition-all duration-300 shadow-soft"
          >
            <h3 className="font-serif text-2xl text-sw-teal mb-3">
              Inner Tools
            </h3>
            <p className="text-sm text-sw-purple/80">
              Simple techniques to regulate your emotions and find your center.
            </p>
          </Link>
          
          <Link 
            to="/birth-chart" 
            className="bg-white rounded-xl p-8 hover:shadow-glow-purple transition-all duration-300 shadow-soft"
          >
            <h3 className="font-serif text-2xl text-sw-teal mb-3">
              Birth Chart
            </h3>
            <p className="text-sm text-sw-purple/80">
              Get your sun, moon, and rising signs — your cosmic profile made simple.
            </p>
          </Link>
        </div>
      </motion.div>

      {/* Soft Magic in Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="font-serif text-3xl text-sw-purple mb-3">
            ✨ Soft Magic in Action
          </h2>
          <p className="text-sw-purple/80">
            Three tiny rituals you can try right now.
          </p>
        </div>
        
        <div 
          className="relative overflow-hidden rounded-xl p-8"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1518276780006-c85b06fa3c11?w=1200&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-sw-cream/90 backdrop-blur-sm"></div>
          <div className="relative z-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft">
              <h3 className="font-serif text-xl text-sw-purple mb-3">
                A tiny moment of soft magic
              </h3>
              <p className="text-sm text-sw-purple/80">
                Put your hand on your chest and ask:<br />
                "What do I actually need right now?"
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft">
              <h3 className="font-serif text-xl text-sw-purple mb-3">
                Take a moment for a ritual
              </h3>
              <p className="text-sm text-sw-purple/80">
                Take one slow breath.<br />
                Relax your jaw.<br />
                Begin again.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft">
              <h3 className="font-serif text-xl text-sw-purple mb-3">
                A grounding moment
              </h3>
              <p className="text-sm text-sw-purple/80">
                Soften your shoulders.<br />
                Drop your attention back into your body.<br />
                This is where your magic lives.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* House Rules */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative overflow-hidden rounded-xl p-8 shadow-soft"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1602874801006-e04291c8656d?w=1200&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-sw-cream/92 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h2 className="font-serif text-3xl text-sw-purple text-center mb-6">
            🔮 House Rules
          </h2>
          <div className="max-w-2xl mx-auto space-y-3 text-sw-purple/90">
            <p>• Everything here is an invitation, not a prescription.</p>
            <p>• Magic is just pattern recognition with better lighting.</p>
            <p>• Nothing here is mystical — just meaningful.</p>
            <p>• Keep it soft, simple, and grounded.</p>
            <p>• Touch your chest and breathe when things feel weird.</p>
            <p>• Tiny rituals beat big overhauls.</p>
            <p>• You're not here to be fixed — just to explore.</p>
            <p>• Follow your curiosity. Trust your intuition.</p>
            <p>• Every room should feel good to be in.</p>
            <p>• AI helped build this — the intention is all human.</p>
          </div>
        </div>
      </motion.div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center space-y-2 pt-8"
      >
        <h2 className="font-serif text-2xl text-sw-purple">
          🌙 SoftWitch Philosophy
        </h2>
        <p className="text-sw-purple/80">
          A tiny reminder before you explore: Everything here meets you where you are.
        </p>
      </motion.div>
    </div>
  );
}
