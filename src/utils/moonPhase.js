import SunCalc from 'suncalc';

const MOON_PHASES = [
  { name: 'New Moon', emoji: '🌑', message: 'Time for new beginnings and setting intentions' },
  { name: 'Waxing Crescent', emoji: '🌒', message: 'Building and planning energy' },
  { name: 'First Quarter', emoji: '🌓', message: 'Taking action and making decisions' },
  { name: 'Waxing Gibbous', emoji: '🌔', message: 'Refinement and preparation' },
  { name: 'Full Moon', emoji: '🌕', message: 'Clarity, completion, and release' },
  { name: 'Waning Gibbous', emoji: '🌖', message: 'Gratitude and sharing wisdom' },
  { name: 'Last Quarter', emoji: '🌗', message: 'Letting go and releasing' },
  { name: 'Waning Crescent', emoji: '🌘', message: 'Rest, reflection, and surrender' }
];

export const getMoonPhase = (date = new Date()) => {
  const moonIllumination = SunCalc.getMoonIllumination(date);
  const phase = moonIllumination.phase;
  
  // Convert phase (0-1) to moon phase name
  let phaseIndex;
  if (phase < 0.0625) phaseIndex = 0; // New Moon
  else if (phase < 0.1875) phaseIndex = 1; // Waxing Crescent
  else if (phase < 0.3125) phaseIndex = 2; // First Quarter
  else if (phase < 0.4375) phaseIndex = 3; // Waxing Gibbous
  else if (phase < 0.5625) phaseIndex = 4; // Full Moon
  else if (phase < 0.6875) phaseIndex = 5; // Waning Gibbous
  else if (phase < 0.8125) phaseIndex = 6; // Last Quarter
  else if (phase < 0.9375) phaseIndex = 7; // Waning Crescent
  else phaseIndex = 0; // New Moon
  
  return {
    ...MOON_PHASES[phaseIndex],
    illumination: Math.round(moonIllumination.fraction * 100)
  };
};

export const getCurrentMoonPhase = () => {
  return getMoonPhase(new Date());
};
