// Zodiac sign calculator
const ZODIAC_SIGNS = [
  { name: 'Aries', symbol: '♈', start: [3, 21], end: [4, 19], element: 'Fire' },
  { name: 'Taurus', symbol: '♉', start: [4, 20], end: [5, 20], element: 'Earth' },
  { name: 'Gemini', symbol: '♊', start: [5, 21], end: [6, 20], element: 'Air' },
  { name: 'Cancer', symbol: '♋', start: [6, 21], end: [7, 22], element: 'Water' },
  { name: 'Leo', symbol: '♌', start: [7, 23], end: [8, 22], element: 'Fire' },
  { name: 'Virgo', symbol: '♍', start: [8, 23], end: [9, 22], element: 'Earth' },
  { name: 'Libra', symbol: '♎', start: [9, 23], end: [10, 22], element: 'Air' },
  { name: 'Scorpio', symbol: '♏', start: [10, 23], end: [11, 21], element: 'Water' },
  { name: 'Sagittarius', symbol: '♐', start: [11, 22], end: [12, 21], element: 'Fire' },
  { name: 'Capricorn', symbol: '♑', start: [12, 22], end: [1, 19], element: 'Earth' },
  { name: 'Aquarius', symbol: '♒', start: [1, 20], end: [2, 18], element: 'Air' },
  { name: 'Pisces', symbol: '♓', start: [2, 19], end: [3, 20], element: 'Water' }
];

export const getZodiacSign = (month, day) => {
  for (const sign of ZODIAC_SIGNS) {
    const [startMonth, startDay] = sign.start;
    const [endMonth, endDay] = sign.end;
    
    if (startMonth === endMonth) {
      if (month === startMonth && day >= startDay && day <= endDay) {
        return sign;
      }
    } else {
      if ((month === startMonth && day >= startDay) || 
          (month === endMonth && day <= endDay)) {
        return sign;
      }
    }
  }
  return ZODIAC_SIGNS[0]; // Default to Aries
};

export const getSunSign = (birthDate) => {
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  return getZodiacSign(month, day);
};

// Approximate moon sign (simplified - moon changes every 2-3 days)
// This uses a simplified calculation based on days since new year
export const getMoonSign = (birthDate) => {
  const dayOfYear = Math.floor((birthDate - new Date(birthDate.getFullYear(), 0, 0)) / 86400000);
  const moonCycle = Math.floor((dayOfYear * 12) / 365) % 12;
  return ZODIAC_SIGNS[moonCycle];
};

// Rising sign calculation (simplified - requires birth time)
// This approximation uses birth hour to determine rising sign
export const getRisingSign = (birthDate, birthTime = '12:00') => {
  const [hours] = birthTime.split(':').map(Number);
  const risingIndex = Math.floor((hours * 12) / 24) % 12;
  return ZODIAC_SIGNS[risingIndex];
};

export const calculateBirthChart = (birthDate, birthTime = '12:00', birthLocation = null) => {
  return {
    sun: getSunSign(birthDate),
    moon: getMoonSign(birthDate),
    rising: getRisingSign(birthDate, birthTime)
  };
};

export { ZODIAC_SIGNS };
