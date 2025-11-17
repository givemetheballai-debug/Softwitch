import { useState } from 'react';
import { LORE_ENTRIES, LORE_CATEGORIES } from '../data/lore';
import { motion } from 'framer-motion';

export default function Lore() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredLore = selectedCategory === 'all' 
    ? LORE_ENTRIES 
    : LORE_ENTRIES.filter(entry => entry.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="font-serif text-5xl text-midnight-aubergine">
          The Lore Library
        </h1>
        <p className="text-lg text-midnight-aubergine/80 max-w-2xl mx-auto">
          Rituals, mantras, and cosmic wisdom for everyday magic.
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-glam-mauve text-champagne'
              : 'bg-dusty-lilac/30 text-midnight-aubergine hover:bg-dusty-lilac/50'
          }`}
        >
          All
        </button>
        {LORE_CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
              selectedCategory === category
                ? 'bg-glam-mauve text-champagne'
                : 'bg-dusty-lilac/30 text-midnight-aubergine hover:bg-dusty-lilac/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Lore Entries */}
      <motion.div
        layout
        className="grid gap-6"
      >
        {filteredLore.map((entry, index) => (
          <motion.div
            key={entry.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dusty-lilac/20 rounded-lg p-6 hover:bg-dusty-lilac/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-serif text-2xl text-midnight-aubergine">
                {entry.title}
              </h3>
              <span className="text-xs px-3 py-1 rounded-full bg-glam-mauve/20 text-glam-mauve capitalize">
                {entry.category}
              </span>
            </div>
            <p className="text-midnight-aubergine/80 whitespace-pre-line leading-relaxed">
              {entry.content}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Add More Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-sm text-midnight-aubergine/60 italic"
      >
        <p>The library grows with each moon cycle.</p>
      </motion.div>
    </div>
  );
}
