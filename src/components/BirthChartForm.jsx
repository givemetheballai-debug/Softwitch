import { useState } from 'react';
import { calculateBirthChart } from '../utils/zodiacCalculator';
import { getMantraForChart } from '../data/mantras';
import { motion } from 'framer-motion';

export default function BirthChartForm() {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('12:00');
  const [chart, setChart] = useState(null);
  const [mantras, setMantras] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!birthDate) return;

    const date = new Date(birthDate);
    const calculatedChart = calculateBirthChart(date, birthTime);
    const personalMantras = getMantraForChart(
      calculatedChart.sun, 
      calculatedChart.moon, 
      calculatedChart.rising
    );

    setChart(calculatedChart);
    setMantras(personalMantras);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleCalculate} className="bg-dusty-lilac/20 rounded-lg p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Birth Date *
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-glam-mauve/30 bg-champagne focus:outline-none focus:ring-2 focus:ring-glam-mauve"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Birth Time (optional - defaults to noon)
          </label>
          <input
            type="time"
            value={birthTime}
            onChange={(e) => setBirthTime(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-glam-mauve/30 bg-champagne focus:outline-none focus:ring-2 focus:ring-glam-mauve"
          />
          <p className="text-xs mt-1 opacity-60">
            Rising sign is more accurate with birth time
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-glam-mauve text-champagne py-3 rounded-lg hover:bg-midnight-aubergine transition-colors font-medium"
        >
          Calculate Birth Chart
        </button>
      </form>

      {chart && mantras && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Chart Display */}
          <div className="bg-midnight-aubergine/5 rounded-lg p-8">
            <h3 className="font-serif text-3xl text-center mb-6 text-midnight-aubergine">
              Your Cosmic Blueprint
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-champagne rounded-lg glow">
                <div className="text-4xl mb-2">{chart.sun.symbol}</div>
                <div className="font-serif text-xl text-midnight-aubergine">{chart.sun.name}</div>
                <div className="text-sm text-glam-mauve font-medium">Sun Sign</div>
                <div className="text-xs mt-2 opacity-60">Your core essence</div>
              </div>

              <div className="text-center p-6 bg-champagne rounded-lg glow">
                <div className="text-4xl mb-2">{chart.moon.symbol}</div>
                <div className="font-serif text-xl text-midnight-aubergine">{chart.moon.name}</div>
                <div className="text-sm text-glam-mauve font-medium">Moon Sign</div>
                <div className="text-xs mt-2 opacity-60">Your emotional world</div>
              </div>

              <div className="text-center p-6 bg-champagne rounded-lg glow">
                <div className="text-4xl mb-2">{chart.rising.symbol}</div>
                <div className="font-serif text-xl text-midnight-aubergine">{chart.rising.name}</div>
                <div className="text-sm text-glam-mauve font-medium">Rising Sign</div>
                <div className="text-xs mt-2 opacity-60">How you show up</div>
              </div>
            </div>
          </div>

          {/* Personalized Mantras */}
          <div className="bg-dusty-lilac/30 rounded-lg p-8 space-y-6">
            <h3 className="font-serif text-2xl text-midnight-aubergine text-center">
              Your Personal Mantras
            </h3>

            <div className="space-y-4">
              <div className="p-4 bg-champagne/50 rounded-lg">
                <div className="text-sm text-glam-mauve font-medium mb-1">Sun Affirmation</div>
                <p className="text-midnight-aubergine">{mantras.sunAffirmation}</p>
              </div>

              <div className="p-4 bg-champagne/50 rounded-lg">
                <div className="text-sm text-glam-mauve font-medium mb-1">Moon Affirmation</div>
                <p className="text-midnight-aubergine">{mantras.moonAffirmation}</p>
              </div>

              <div className="p-4 bg-champagne/50 rounded-lg">
                <div className="text-sm text-glam-mauve font-medium mb-1">Rising Affirmation</div>
                <p className="text-midnight-aubergine">{mantras.risingAffirmation}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-glam-mauve/20">
              <h4 className="font-serif text-lg text-midnight-aubergine mb-3">
                Suggested Daily Rituals
              </h4>
              <ul className="space-y-2 text-sm">
                {mantras.suggestedRituals.map((ritual, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-glam-mauve">✦</span>
                    <span>{ritual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
