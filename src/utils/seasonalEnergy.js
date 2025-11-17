const SEASONAL_ENERGIES = {
  'early-spring': {
    season: 'Early Spring',
    message: 'A time for awakening and planting seeds',
    energy: 'renewal'
  },
  'late-spring': {
    season: 'Late Spring',
    message: 'Growth and expansion are in the air',
    energy: 'growth'
  },
  'early-summer': {
    season: 'Early Summer',
    message: 'Abundance and vitality peak',
    energy: 'abundance'
  },
  'late-summer': {
    season: 'Late Summer',
    message: 'Harvesting what you\'ve cultivated',
    energy: 'harvest'
  },
  'early-autumn': {
    season: 'Early Autumn',
    message: 'A time for gathering and gratitude',
    energy: 'gratitude'
  },
  'late-autumn': {
    season: 'Late Autumn',
    message: 'Release what no longer serves',
    energy: 'release'
  },
  'early-winter': {
    season: 'Early Winter',
    message: 'Rest and reflection are essential',
    energy: 'rest'
  },
  'late-winter': {
    season: 'Late Winter',
    message: 'Quiet preparation for renewal',
    energy: 'preparation'
  }
};

export const getSeasonalEnergy = (date = new Date()) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // Northern Hemisphere seasons
  if (month === 3 && day >= 1 || month === 4 && day <= 15) return SEASONAL_ENERGIES['early-spring'];
  if (month === 4 && day >= 16 || month === 5 || month === 6 && day <= 10) return SEASONAL_ENERGIES['late-spring'];
  if (month === 6 && day >= 11 || month === 7 || month === 8 && day <= 10) return SEASONAL_ENERGIES['early-summer'];
  if (month === 8 && day >= 11 || month === 9 && day <= 15) return SEASONAL_ENERGIES['late-summer'];
  if (month === 9 && day >= 16 || month === 10 || month === 11 && day <= 10) return SEASONAL_ENERGIES['early-autumn'];
  if (month === 11 && day >= 11 || month === 12 && day <= 10) return SEASONAL_ENERGIES['late-autumn'];
  if (month === 12 && day >= 11 || month === 1 || month === 2 && day <= 10) return SEASONAL_ENERGIES['early-winter'];
  if (month === 2 && day >= 11 || month === 3 && day <= 1) return SEASONAL_ENERGIES['late-winter'];
  
  return SEASONAL_ENERGIES['early-spring'];
};

export const getCurrentSeasonalEnergy = () => {
  return getSeasonalEnergy(new Date());
};
