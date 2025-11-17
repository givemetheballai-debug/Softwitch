import { useState, useEffect } from 'react';
import { getCurrentMoonPhase } from '../utils/moonPhase';
import { getCurrentSeasonalEnergy } from '../utils/seasonalEnergy';
import { motion } from 'framer-motion';

export default function DailyGrounding() {
  const [moonPhase, setMoonPhase] = useState(null);
  const [seasonalEnergy, setSeasonalEnergy] = useState(null);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const now = new Date();
    setCurrentDate(now.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }));
    setMoonPhase(getCurrentMoonPhase());
    setSeasonalEnergy(getCurrentSeasonalEnergy());
  }, []);

  if (!moonPhase || !seasonalEnergy) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dusty-lilac/30 rounded-lg p-8 glow"
    >
      <div className="text-center space-y-4">
        <h3 className="font-serif text-3xl text-midnight-aubergine">
          Today is {currentDate}
        </h3>
        
        <div className="space-y-3 text-lg">
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl">{moonPhase.emoji}</span>
            <p className="text-midnight-aubergine">
              <span className="font-serif font-semibold">{moonPhase.name}</span>
              <span className="text-sm opacity-75"> — {moonPhase.message}</span>
            </p>
          </div>
          
          <div className="text-midnight-aubergine">
            <p>
              <span className="font-serif font-semibold">{seasonalEnergy.season}</span>
              <span className="text-sm opacity-75"> — {seasonalEnergy.message}</span>
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-glam-mauve/20">
          <p className="text-sm italic text-midnight-aubergine/80">
            Put your hand on your chest, inhale once, and ask:<br/>
            What do I actually need right now?
          </p>
        </div>
      </div>
    </motion.div>
  );
}
