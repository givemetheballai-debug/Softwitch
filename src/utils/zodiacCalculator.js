import * as Astronomy from 'astronomy-engine';

// Zodiac signs with ecliptic longitude ranges (0-360 degrees)
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

// Convert ecliptic longitude to zodiac sign
const getZodiacFromLongitude = (longitude) => {
  // Normalize to 0-360
  let lon = longitude % 360;
  if (lon < 0) lon += 360;
  
  for (const sign of ZODIAC_SIGNS) {
    if (lon >= sign.start && lon < sign.end) {
      return sign;
    }
  }
  return ZODIAC_SIGNS[0];
};

// Calculate Sun sign using actual astronomical position
export const getSunSign = (birthDate) => {
  try {
    const astroTime = Astronomy.MakeTime(birthDate);
    const ecliptic = Astronomy.Ecliptic(Astronomy.GeoVector('Sun', astroTime, false));
    return getZodiacFromLongitude(ecliptic.elon);
  } catch (error) {
    console.error('Error calculating sun sign:', error);
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();
    return getZodiacFromDateSimple(month, day);
  }
};

// Calculate Moon sign using actual astronomical position
export const getMoonSign = (birthDate) => {
  try {
    const astroTime = Astronomy.MakeTime(birthDate);
    const ecliptic = Astronomy.Ecliptic(Astronomy.GeoVector('Moon', astroTime, false));
    return getZodiacFromLongitude(ecliptic.elon);
  } catch (error) {
    console.error('Error calculating moon sign:', error);
    return ZODIAC_SIGNS[0];
  }
};

// Calculate Rising sign (Ascendant) using MC-based method
export const getRisingSign = (birthDate, birthTime, latitude, longitude, timezoneOffset = 0) => {
  try {
    // Parse birth time and convert to UTC
    const [hours, minutes] = birthTime.split(':').map(Number);
    const birthDateTime = new Date(birthDate);
    birthDateTime.setHours(hours, minutes, 0, 0);
    const utcTime = new Date(birthDateTime.getTime() - (timezoneOffset * 60 * 60 * 1000));
    
    const astroTime = Astronomy.MakeTime(utcTime);
    
    // Get obliquity for this date
    const obliquity = 23.4392911; // Can be more precise but this is close enough
    
    // Calculate RAMC (Right Ascension of MC) = LST
    const gast = Astronomy.SiderealTime(astroTime); // GAST in hours
    let ramc = (gast + (longitude / 15.0)) * 15; // Convert to degrees
    
    // Normalize RAMC
    ramc = ramc % 360;
    if (ramc < 0) ramc += 360;
    
    // Calculate MC (Midheaven) ecliptic longitude
    const ramcRad = ramc * Math.PI / 180;
    const oblRad = obliquity * Math.PI / 180;
    
    let mc = Math.atan2(Math.sin(ramcRad), Math.cos(ramcRad) * Math.cos(oblRad)) * 180 / Math.PI;
    if (mc < 0) mc += 360;
    
    // Calculate Ascendant from MC
    // For Ascendant, we need the point rising on eastern horizon
    // Formula: tan(Asc) = cos(MC + 90°) / (-sin(MC + 90°) * cos(obliquity) - tan(latitude) * sin(obliquity))
    
    const latRad = latitude * Math.PI / 180;
    const mcPlus90 = (mc + 90) * Math.PI / 180;
    
    const num = Math.cos(mcPlus90);
    const denom = -Math.sin(mcPlus90) * Math.cos(oblRad) - Math.tan(latRad) * Math.sin(oblRad);
    
    let ascendant = Math.atan2(num, denom) * 180 / Math.PI;
    if (ascendant < 0) ascendant += 360;
    
    return getZodiacFromLongitude(ascendant);
  } catch (error) {
    console.error('Error calculating rising sign:', error);
    const [hours] = birthTime.split(':').map(Number);
    const signIndex = Math.floor((hours * 12) / 24) % 12;
    return ZODIAC_SIGNS[signIndex];
  }
};

// Simple date-based fallback for Sun sign
const getZodiacFromDateSimple = (month, day) => {
  const dates = [
    { sign: ZODIAC_SIGNS[9], month: 12, day: 22, endMonth: 1, endDay: 19 },  // Capricorn
    { sign: ZODIAC_SIGNS[10], month: 1, day: 20, endMonth: 2, endDay: 18 },  // Aquarius
    { sign: ZODIAC_SIGNS[11], month: 2, day: 19, endMonth: 3, endDay: 20 },  // Pisces
    { sign: ZODIAC_SIGNS[0], month: 3, day: 21, endMonth: 4, endDay: 19 },   // Aries
    { sign: ZODIAC_SIGNS[1], month: 4, day: 20, endMonth: 5, endDay: 20 },   // Taurus
    { sign: ZODIAC_SIGNS[2], month: 5, day: 21, endMonth: 6, endDay: 20 },   // Gemini
    { sign: ZODIAC_SIGNS[3], month: 6, day: 21, endMonth: 7, endDay: 22 },   // Cancer
    { sign: ZODIAC_SIGNS[4], month: 7, day: 23, endMonth: 8, endDay: 22 },   // Leo
    { sign: ZODIAC_SIGNS[5], month: 8, day: 23, endMonth: 9, endDay: 22 },   // Virgo
    { sign: ZODIAC_SIGNS[6], month: 9, day: 23, endMonth: 10, endDay: 22 },  // Libra
    { sign: ZODIAC_SIGNS[7], month: 10, day: 23, endMonth: 11, endDay: 21 }, // Scorpio
    { sign: ZODIAC_SIGNS[8], month: 11, day: 22, endMonth: 12, endDay: 21 }  // Sagittarius
  ];
  
  for (const entry of dates) {
    if (entry.month === entry.endMonth) {
      if (month === entry.month && day >= entry.day && day <= entry.endDay) {
        return entry.sign;
      }
    } else {
      if ((month === entry.month && day >= entry.day) || 
          (month === entry.endMonth && day <= entry.endDay)) {
        return entry.sign;
      }
    }
  }
  return ZODIAC_SIGNS[0];
};

// Main birth chart calculation
export const calculateBirthChart = (birthDate, birthTime = '12:00', location = null) => {
  const sun = getSunSign(birthDate);
  const moon = getMoonSign(birthDate);
  
  let rising;
  if (location && location.latitude && location.longitude) {
    const timezoneOffset = location.timezoneOffset || 0;
    rising = getRisingSign(birthDate, birthTime, location.latitude, location.longitude, timezoneOffset);
  } else {
    // Approximate without location
    const [hours] = birthTime.split(':').map(Number);
    const signIndex = Math.floor((hours * 12) / 24) % 12;
    rising = ZODIAC_SIGNS[signIndex];
  }
  
  return { sun, moon, rising };
};

export { ZODIAC_SIGNS };
