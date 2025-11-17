// Cosmic projects - all the tools in the SoftWitch universe
export const COSMIC_PROJECTS = [
  {
    id: 'cosmic-mash',
    name: 'Cosmic MASH',
    tagline: 'Fortune-telling meets childhood nostalgia',
    description: 'Remember MASH? Now with astrology and personalized insights. See your cosmic future unfold.',
    url: 'https://playcosmicmash.com',
    status: 'live',
    vibe: 'playful'
  },
  {
    id: 'big-scream-energy',
    name: 'Big Scream Energy',
    tagline: 'Scream into the void, receive cosmic wisdom',
    description: 'Type your chaos, watch it explode, get a personalized fortune. Therapeutic release meets mystical guidance.',
    url: 'https://bigscreamenergy.com',
    status: 'live',
    vibe: 'cathartic'
  },
  {
    id: 'cosmic-convenience',
    name: 'Cosmic Convenience',
    tagline: 'Self-care products aligned with your energy',
    description: 'Shop beauty, wellness, and lifestyle products curated to your astrological profile.',
    url: '#', // Coming soon
    status: 'coming-soon',
    vibe: 'elevated'
  },
  {
    id: 'reasons-to-roam',
    name: 'Reasons to Roam',
    tagline: 'Travel by your internal season',
    description: 'Where should you go when you need expansion? Rest? Adventure? Let your energy guide the journey.',
    url: '#', // Coming soon
    status: 'coming-soon',
    vibe: 'wanderlust'
  }
];

export const getLiveProjects = () => {
  return COSMIC_PROJECTS.filter(project => project.status === 'live');
};

export const getAllProjects = () => {
  return COSMIC_PROJECTS;
};
