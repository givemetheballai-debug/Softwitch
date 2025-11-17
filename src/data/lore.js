// Lore Library - rituals, mantras, and cosmic wisdom
export const LORE_ENTRIES = [
  {
    id: 'grounding-ritual',
    title: 'The Grounding Ritual',
    category: 'ritual',
    content: `Put your hand on your chest, inhale once, and ask:
What do I actually need right now?

This is the signature SoftWitch practice. Simple, grounding, always available.`
  },
  {
    id: 'water-spell',
    title: 'Drink Water Like It\'s a Spell',
    category: 'daily',
    content: `Every glass of water is an opportunity.
Set an intention before drinking.
Let hydration be magic.`
  },
  {
    id: 'ten-percent-nicer',
    title: 'The 10% Rule',
    category: 'daily',
    content: `Do something 10% nicer for your future self today.
Not perfect. Not overwhelming.
Just 10% better.`
  },
  {
    id: 'pattern-recognition',
    title: 'Magic is Pattern Recognition',
    category: 'philosophy',
    content: `Magic works best when it's tiny.
Notice patterns. Honor cycles.
Everything is connected by attention.`
  },
  {
    id: 'moon-phases',
    title: 'Working with Moon Phases',
    category: 'cosmic',
    content: `New Moon: Plant seeds, set intentions
Full Moon: Clarity, completion, release
Quarters: Tension, choice, adjustment

Nothing spooky. Just cycles.`
  },
  {
    id: 'avoided-question',
    title: 'Ask the Avoided Question',
    category: 'ritual',
    content: `The question you're avoiding is probably the one that matters most.

Take three breaths.
Ask it out loud.
Listen.`
  }
];

export const getLoreByCategory = (category) => {
  if (!category) return LORE_ENTRIES;
  return LORE_ENTRIES.filter(entry => entry.category === category);
};

export const getLoreById = (id) => {
  return LORE_ENTRIES.find(entry => entry.id === id);
};

export const LORE_CATEGORIES = ['ritual', 'daily', 'philosophy', 'cosmic'];
