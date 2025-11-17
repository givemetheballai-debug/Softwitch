// Mantras and self-help content by zodiac sign
export const MANTRAS_BY_SIGN = {
  Aries: {
    core: 'I am bold and trust my instincts',
    affirmations: [
      'My courage opens doors',
      'I act with clarity and confidence',
      'I lead with authentic fire'
    ],
    rituals: [
      'Set one brave intention each morning',
      'Move your body to channel energy',
      'Ask: What needs my courage today?'
    ]
  },
  Taurus: {
    core: 'I ground myself in beauty and pleasure',
    affirmations: [
      'Stability is my superpower',
      'I create comfort from within',
      'My persistence builds lasting things'
    ],
    rituals: [
      'Touch something beautiful daily',
      'Eat one meal with full presence',
      'Ask: What makes me feel safe?'
    ]
  },
  Gemini: {
    core: 'I trust my curiosity and adaptability',
    affirmations: [
      'My mind is quick and clear',
      'I communicate with ease',
      'Connection flows through me'
    ],
    rituals: [
      'Learn one new thing each day',
      'Write to process your thoughts',
      'Ask: What wants to be expressed?'
    ]
  },
  Cancer: {
    core: 'I honor my emotions and intuition',
    affirmations: [
      'My sensitivity is wisdom',
      'I create safe spaces naturally',
      'I nurture myself first'
    ],
    rituals: [
      'Check in with your feelings hourly',
      'Create one cozy moment daily',
      'Ask: What do I need to feel held?'
    ]
  },
  Leo: {
    core: 'I shine authentically and generously',
    affirmations: [
      'My presence is a gift',
      'I create joy wherever I go',
      'I am confident in my worth'
    ],
    rituals: [
      'Do something that makes you feel alive',
      'Celebrate one small win daily',
      'Ask: Where do I want to shine today?'
    ]
  },
  Virgo: {
    core: 'I serve with precision and care',
    affirmations: [
      'My attention to detail matters',
      'I improve things naturally',
      'I am enough as I am'
    ],
    rituals: [
      'Organize one small thing mindfully',
      'Notice what\'s working well',
      'Ask: How can I be of service?'
    ]
  },
  Libra: {
    core: 'I create harmony and beauty',
    affirmations: [
      'Balance is my natural state',
      'I see all sides with grace',
      'My relationships reflect my worth'
    ],
    rituals: [
      'Make one choice without overthinking',
      'Surround yourself with beauty',
      'Ask: What feels fair to everyone?'
    ]
  },
  Scorpio: {
    core: 'I transform through depth and truth',
    affirmations: [
      'I trust my intensity',
      'I release what no longer serves',
      'My power comes from within'
    ],
    rituals: [
      'Feel one emotion fully today',
      'Let go of one small thing',
      'Ask: What truth am I avoiding?'
    ]
  },
  Sagittarius: {
    core: 'I expand through adventure and wisdom',
    affirmations: [
      'The universe supports my journey',
      'I trust the path ahead',
      'My optimism is infectious'
    ],
    rituals: [
      'Explore something unfamiliar',
      'Share what you\'ve learned',
      'Ask: What wants to grow?'
    ]
  },
  Capricorn: {
    core: 'I build my legacy with patience',
    affirmations: [
      'I achieve through steady effort',
      'My ambition serves a purpose',
      'I am worthy of rest too'
    ],
    rituals: [
      'Take one step toward your goal',
      'Honor how far you\'ve come',
      'Ask: What am I building?'
    ]
  },
  Aquarius: {
    core: 'I innovate with vision and freedom',
    affirmations: [
      'My uniqueness is valuable',
      'I think beyond the obvious',
      'Community amplifies my impact'
    ],
    rituals: [
      'Question one assumption today',
      'Connect with like-minded people',
      'Ask: How can I serve the collective?'
    ]
  },
  Pisces: {
    core: 'I flow with compassion and imagination',
    affirmations: [
      'My empathy is a strength',
      'I trust my creative vision',
      'I am both soft and resilient'
    ],
    rituals: [
      'Create something from feeling',
      'Set one gentle boundary',
      'Ask: What is my intuition saying?'
    ]
  }
};

export const getMantraForChart = (sunSign, moonSign, risingSign) => {
  const sun = MANTRAS_BY_SIGN[sunSign.name] || MANTRAS_BY_SIGN.Aries;
  const moon = MANTRAS_BY_SIGN[moonSign.name] || MANTRAS_BY_SIGN.Aries;
  const rising = MANTRAS_BY_SIGN[risingSign.name] || MANTRAS_BY_SIGN.Aries;
  
  return {
    core: `${sun.core}. ${moon.core}. ${rising.core}.`,
    sunAffirmation: sun.affirmations[0],
    moonAffirmation: moon.affirmations[1],
    risingAffirmation: rising.affirmations[2],
    suggestedRituals: [
      sun.rituals[0],
      moon.rituals[1],
      rising.rituals[2]
    ]
  };
};
