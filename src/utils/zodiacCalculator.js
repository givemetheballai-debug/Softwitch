import Astronomy from 'astronomy-engine';

// Zodiac sign data
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

// Get zodiac sign from ecliptic longitude (0-360 degrees)
const getZodiacFromLongitude = (longitude) => {
  // Normalize to 0-360
  let lon = longitude % 360;
  if (lon < 0) lon += 360;
  
  for (const sign of ZODIAC_SIGNS) {
    if (lon >= sign.start && lon < sign.end) {
      return sign;
    }
  }
  return ZODIAC_SIGNS[0]; // Default to Aries
};

// Calculate Sun sign using actual astronomical position
export const getSunSign = (birthDate) => {
  try {
    const astroTime = new Astronomy.AstroTime(birthDate);
    const sunPosition = Astronomy.EclipticGeoMoon(astroTime);
    
    // Get Sun's ecliptic longitude
    const sunLongitude = Astronomy.SunPosition(astroTime).elon;
    
    return getZodiacFromLongitude(sunLongitude);
  } catch (error) {
    console.error('Error calculating sun sign:', error);
    // Fallback to simple date-based calculation
    return getZodiacSignSimple(birthDate.getMonth() + 1, birthDate.getDate());
  }
};

// Calculate Moon sign using actual astronomical position
export const getMoonSign = (birthDate) => {
  try {
    const astroTime = new Astronomy.AstroTime(birthDate);
    const moonPosition = Astronomy.EclipticGeoMoon(astroTime);
    
    return getZodiacFromLongitude(moonPosition.lon);
  } catch (error) {
    console.error('Error calculating moon sign:', error);
    return ZODIAC_SIGNS[0]; // Default to Aries on error
  }
};

// Calculate Rising sign (Ascendant) - requires time and location
export const getRisingSign = (birthDate, birthTime, latitude, longitude) => {
  try {
    // Parse birth time
    const [hours, minutes] = birthTime.split(':').map(Number);
    const birthDateTime = new Date(birthDate);
    birthDateTime.setHours(hours, minutes, 0, 0);
    
    const astroTime = new Astronomy.AstroTime(birthDateTime);
    
    // Calculate local sidereal time
    const observer = new Astronomy.Observer(latitude, longitude, 0);
    const hourAngle = Astronomy.HourAngle('Sun', astroTime, observer);
    
    // Calculate ascendant
    // This is a simplified calculation - for more accuracy, we'd need house system calculations
    const localSiderealTime = (hourAngle.ra + 12) % 24;
    const ascendantDegree = (localSiderealTime * 15) % 360;
    
    return getZodiacFromLongitude(ascendantDegree);
  } catch (error) {
    console.error('Error calculating rising sign:', error);
    // Return approximate rising based on time of day if location fails
    const [hours] = birthTime.split(':').map(Number);
    const risingIndex = Math.floor((hours * 12) / 24) % 12;
    return ZODIAC_SIGNS[risingIndex];
  }
};

// Simple fallback calculation (for Sun sign only)
const getZodiacSignSimple = (month, day) => {
  const dates = [
    [3, 21, 4, 19],   // Aries
    [4, 20, 5, 20],   // Taurus
    [5, 21, 6, 20],   // Gemini
    [6, 21, 7, 22],   // Cancer
    [7, 23, 8, 22],   // Leo
    [8, 23, 9, 22],   // Virgo
    [9, 23, 10, 22],  // Libra
    [10, 23, 11, 21], // Scorpio
    [11, 22, 12, 21], // Sagittarius
    [12, 22, 1, 19],  // Capricorn
    [1, 20, 2, 18],   // Aquarius
    [2, 19, 3, 20]    // Pisces
  ];
  
  for (let i = 0; i < dates.length; i++) {
    const [startMonth, startDay, endMonth, endDay] = dates[i];
    
    if (startMonth === endMonth) {
      if (month === startMonth && day >= startDay && day <= endDay) {
        return ZODIAC_SIGNS[i];
      }
    } else {
      if ((month === startMonth && day >= startDay) || 
          (month === endMonth && day <= endDay)) {
        return ZODIAC_SIGNS[i];
      }
    }
  }
  return ZODIAC_SIGNS[0];
};

// Main birth chart calculation function
export const calculateBirthChart = (birthDate, birthTime = '12:00', location = null) => {
  const sun = getSunSign(birthDate);
  const moon = getMoonSign(birthDate);
  
  let rising;
  if (location && location.latitude && location.longitude) {
    rising = getRisingSign(birthDate, birthTime, location.latitude, location.longitude);
  } else {
    // Approximate rising sign without location
    const [hours] = birthTime.split(':').map(Number);
    const risingIndex = Math.floor((hours * 12) / 24) % 12;
    rising = ZODIAC_SIGNS[risingIndex];
  }
  
  return {
    sun,
    moon,
    rising
  };
};

export { ZODIAC_SIGNS };
