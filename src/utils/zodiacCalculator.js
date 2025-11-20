import SunCalc from 'suncalc';

// Zodiac sign data with ecliptic longitude ranges
const ZODIAC_SIGNS = [
  { name: 'Aries', symbol: '♈', start: 0, end: 30, element: 'Fire' },
  { name: 'Taurus', symbol: '♉', start: 30, end: 60, element: 'Earth' },
  { name: 'Gemini', symbol: '♊', start: 60, end: 90, element: 'Air' },
  { name: 'Cancer', symbol: '♋', start: 90, end: 120, element: 'Water' },
  { name: 'Leo', symbol: '♌', start: 120, end: 150, element: 'Fire' },
  { name: 'Virgo', symbol: '♍', start: 150, end: 180, element: 'Earth' },
  { name: 'Libra', symbol: '♎', start: 180, end: 210, element: 'Air' },
  { name: 'Scorpio', symbol: '♏', start: 210, end: 240, element: 'Water' },
  { name: 'Sagittarius', symbol: '♐', start: 240, end: 270, element: 'Fire' },
  { name: 'Capricorn', symbol: '♑', start: 270, end: 300, element: 'Earth' },
  { name: 'Aquarius', symbol: '♒', start: 300, end: 330, element: 'Air' },
  { name: 'Pisces', symbol: '♓', start: 330, end: 360, element: 'Water' }
];

// Simple date-based zodiac calculator (for Sun sign)
const ZODIAC_DATES = [
  { name: 'Capricorn', symbol: '♑', month: 12, day: 22, endMonth: 1, endDay: 19, element: 'Earth' },
  { name: 'Aquarius', symbol: '♒', month: 1, day: 20, endMonth: 2, endDay: 18, element: 'Air' },
  { name: 'Pisces', symbol: '♓', month: 2, day: 19, endMonth: 3, endDay: 20, element: 'Water' },
  { name: 'Aries', symbol: '♈', month: 3, day: 21, endMonth: 4, endDay: 19, element: 'Fire' },
  { name: 'Taurus', symbol: '♉', month: 4, day: 20, endMonth: 5, endDay: 20, element: 'Earth' },
  { name: 'Gemini', symbol: '♊', month: 5, day: 21, endMonth: 6, endDay: 20, element: 'Air' },
  { name: 'Cancer', symbol: '♋', month: 6, day: 21, endMonth: 7, endDay: 22, element: 'Water' },
  { name: 'Leo', symbol: '♌', month: 7, day: 23, endMonth: 8, endDay: 22, element: 'Fire' },
  { name: 'Virgo', symbol: '♍', month: 8, day: 23, endMonth: 9, endDay: 22, element: 'Earth' },
  { name: 'Libra', symbol: '♎', month: 9, day: 23, endMonth: 10, endDay: 22, element: 'Air' },
  { name: 'Scorpio', symbol: '♏', month: 10, day: 23, endMonth: 11, endDay: 21, element: 'Water' },
  { name: 'Sagittarius', symbol: '♐', month: 11, day: 22, endMonth: 12, endDay: 21, element: 'Fire' }
];

// Get zodiac sign from date (for Sun sign)
const getZodiacFromDate = (month, day) => {
  for (const sign of ZODIAC_DATES) {
    if (sign.month === sign.endMonth) {
      // Same month
      if (month === sign.month && day >= sign.day && day <= sign.endDay) {
        return sign;
      }
    } else {
      // Spans two months
      if ((month === sign.month && day >= sign.day) || 
          (month === sign.endMonth && day <= sign.endDay)) {
        return sign;
      }
    }
  }
  return ZODIAC_DATES[0]; // Default to Capricorn
};

// Calculate Sun sign
export const getSunSign = (birthDate) => {
  const month = birthDate.getMonth() + 1; // 1-12
  const day = birthDate.getDate();
  return getZodiacFromDate(month, day);
};

// Calculate Moon sign using lunar phase and position
export const getMoonSign = (birthDate) => {
  try {
    // Get moon position
    const moonPos = SunCalc.getMoonPosition(birthDate, 0, 0);
    
    // Convert azimuth to zodiac position (rough approximation)
    // Moon moves through zodiac approximately every 27.3 days
    const dayOfYear = Math.floor((birthDate - new Date(birthDate.getFullYear(), 0, 0)) / 86400000);
    const moonCycle = (dayOfYear * 13.368) % 360; // 360 degrees / 27.3 days ≈ 13.368 degrees/day
    
    // Find zodiac sign for this position
    const signIndex = Math.floor(moonCycle / 30);
    return ZODIAC_SIGNS[signIndex];
  } catch (error) {
    console.error('Error calculating moon sign:', error);
    // Fallback: simple calculation based on day of year
    const dayOfYear = Math.floor((birthDate - new Date(birthDate.getFullYear(), 0, 0)) / 86400000);
    const signIndex = Math.floor((dayOfYear * 12) / 365) % 12;
    return ZODIAC_SIGNS[signIndex];
  }
};

// Calculate Rising sign using time and location
export const getRisingSign = (birthDate, birthTime, latitude, longitude) => {
  try {
    // Parse birth time
    const [hours, minutes] = birthTime.split(':').map(Number);
    const birthDateTime = new Date(birthDate);
    birthDateTime.setHours(hours, minutes, 0, 0);
    
    // Get sun position at birth location and time
    const sunPos = SunCalc.getPosition(birthDateTime, latitude, longitude);
    
    // Calculate local sidereal time
    // Rising sign is determined by which sign is on the eastern horizon at birth
    // This is a simplified calculation
    const hourAngle = (hours + minutes / 60) / 24 * 360; // Convert time to degrees
    const risingDegree = (hourAngle + longitude) % 360;
    
    // Find zodiac sign
    const signIndex = Math.floor(risingDegree / 30);
    return ZODIAC_SIGNS[signIndex];
  } catch (error) {
    console.error('Error calculating rising sign:', error);
    // Fallback: approximate based on time of day
    const [hours] = birthTime.split(':').map(Number);
    const signIndex = Math.floor((hours * 12) / 24) % 12;
    return ZODIAC_SIGNS[signIndex];
  }
};

// Main birth chart calculation
export const calculateBirthChart = (birthDate, birthTime = '12:00', location = null) => {
  const sun = getSunSign(birthDate);
  const moon = getMoonSign(birthDate);
  
  let rising;
  if (location && location.latitude && location.longitude) {
    rising = getRisingSign(birthDate, birthTime, location.latitude, location.longitude);
  } else {
    // Approximate rising sign without location
    const [hours] = birthTime.split(':').map(Number);
    const signIndex = Math.floor((hours * 12) / 24) % 12;
    rising = ZODIAC_SIGNS[signIndex];
  }
  
  return {
    sun,
    moon,
    rising
  };
};

export { ZODIAC_SIGNS };
