import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      type: 'cosmic',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600&auto=format&fit=crop',
      title: 'Intuition, creativity, and a little bit of magic',
      subtitle: '✨ witchcraft for people who love clarity, design, and good vibes ✨'
    },
    {
      type: 'bigscream',
      title: 'Play Big Scream Energy',
      subtitle: 'Sometimes you just need to scream',
      link: 'https://bigscreamenergy.com'
    },
    {
      type: 'mash',
      title: 'Play Cosmic MASH',
      subtitle: 'Your fortune-telling game powered by the universe',
      link: 'https://playcosmicmash.com'
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      
      {/* Cosmic Snapshot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="cosmic-snapshot-box relative overflow-hidden rounded-xl p-4 text-center"
      >
        <div className="relative z-10 backdrop-blur-sm rounded-lg p-6">
          <h2 className="cosmic-snapshot-title font-serif text-sw-purple">
            🌘 Today's Cosmic Snapshot
          </h2>
          <p className="cosmic-snapshot-date text-sw-purple">
            {dateStr}
          </p>
          <p className="cosmic-snapshot-details text-sw-purple/90 mb-3">
            <span className="block mb-1">Today's moon: <strong>{moonPhase.name}</strong> — {moonPhase.description}</span>
            <span className="block">Today's season: <strong>{season.name}</strong> — {season.description}</span>
          </p>
          <Link 
            to="/lore/moon-phases"
            className="inline-block text-base link-pink transition-colors font-semibold"
          >
            More on moon phases <span className="emoji-magic" style={{fontSize: '1rem'}}>✨</span>
          </Link>
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
          <h2 className="section-title font-serif text-3xl mb-3">
            <span className="emoji-magic">🌟</span> Explore the Universe
          </h2>
          <p className="text-sw-purple/80">
            A constellation of tools for clarity, release, and self-discovery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            to="/lore/roots" 
            className="product-card bg-white rounded-xl p-8 hover:shadow-glow-purple transition-all duration-300"
          >
            <h3 className="font-serif text-2xl text-sw-teal mb-3 font-semibold">
              The Roots of Magic
            </h3>
            <p className="text-base text-sw-purple/80">
              Learn the lore behind modern witchcraft and astrology.
            </p>
          </Link>
          
          <Link 
            to="/lore/rituals" 
            className="product-card bg-white rounded-xl p-8 hover:shadow-glow-purple transition-all duration-300"
          >
            <h3 className="font-serif text-2xl text-sw-teal mb-3 font-semibold">
              Rituals
            </h3>
            <p className="text-base text-sw-purple/80">
              Tiny practices for everyday magic — grounding, releasing, beginning again.
            </p>
          </Link>
          
          <Link 
            to="/lore/inner-tools" 
            className="product-card bg-white rounded-xl p-8 hover:shadow-glow-purple transition-all duration-300"
          >
            <h3 className="font-serif text-2xl text-sw-teal mb-3 font-semibold">
              Inner Tools
            </h3>
            <p className="text-base text-sw-purple/80">
              Simple techniques to regulate your emotions and find your center.
            </p>
          </Link>
          
          <Link 
            to="/birth-chart" 
            className="product-card bg-white rounded-xl p-8 hover:shadow-glow-purple transition-all duration-300"
          >
            <h3 className="font-serif text-2xl text-sw-teal mb-3 font-semibold">
              Birth Chart
            </h3>
            <p className="text-base text-sw-purple/80">
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
        className="space-y-6 bg-gradient-soft-rust"
      >
        <div className="text-center">
          <h2 className="section-title font-serif text-3xl mb-3">
            <span className="emoji-magic">✨</span> Soft Magic in Action
          </h2>
          <p className="text-sw-purple/80">
            Three tiny rituals you can try right now.
          </p>
        </div>
        
        <div 
          className="relative overflow-hidden rounded-xl p-8"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1543459176-4426b37223ba?q=80&w=2070&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 grid md:grid-cols-3 gap-6">
            <div className="magic-box backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-serif text-xl text-sw-purple mb-3 font-semibold">
                A tiny moment of soft magic
              </h3>
              <p className="text-sm text-sw-purple/80">
                Put your hand on your chest and ask:<br />
                "What do I actually need right now?"
              </p>
            </div>
            
            <div className="magic-box backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-serif text-xl text-sw-purple mb-3 font-semibold">
                Take a moment for a ritual
              </h3>
              <p className="text-sm text-sw-purple/80">
                Take one slow breath.<br />
                Relax your jaw.<br />
                Begin again.
              </p>
            </div>
            
            <div className="magic-box backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-serif text-xl text-sw-purple mb-3 font-semibold">
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
        className="relative overflow-hidden rounded-xl p-8 shadow-soft border-gradient-top bg-gradient-soft-pink"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1602874801006-e04291c8656d?w=1200&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-sw-cream/92 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h2 className="section-title font-serif text-3xl text-center mb-6">
            <span className="emoji-magic">🔮</span> House Rules
          </h2>
          <div className="max-w-2xl mx-auto space-y-3 text-sw-purple/90 text-center">
            <p className="sparkle-hover">• Everything here is an invitation, not a prescription.</p>
            <p className="sparkle-hover">• Magic is just pattern recognition with better lighting.</p>
            <p className="sparkle-hover">• Nothing here is mystical — just meaningful.</p>
            <p className="sparkle-hover">• Keep it soft, simple, and grounded.</p>
            <p className="sparkle-hover">• Touch your chest and breathe when things feel weird.</p>
            <p className="sparkle-hover">• Tiny rituals beat big overhauls.</p>
            <p className="sparkle-hover">• You're not here to be fixed — just to explore.</p>
            <p className="sparkle-hover">• Follow your curiosity. Trust your intuition.</p>
            <p className="sparkle-hover">• Every room should feel good to be in.</p>
            <p className="sparkle-hover">• AI helped build this — the intention is all human.</p>
          </div>
        </div>
      </motion.div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center space-y-2 pt-8 bg-gradient-soft-teal border-gradient-bottom pb-8"
      >
        <h2 className="section-title font-serif text-2xl sparkle-hover">
          <span className="emoji-magic">🌙</span> SoftWitch Philosophy
        </h2>
        <p className="text-sw-purple/80 sparkle-hover">
          A tiny reminder before you explore: Everything here meets you where you are.
        </p>
      </motion.div>
    </div>
  );
}
