import { motion } from 'framer-motion';
import LoreNav from '../components/LoreNav';

export default function LoreGlossary() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-midnight-aubergine/60">
        <span>Lore Library</span>
        <span className="mx-2">→</span>
        <span>Cosmic Glossary</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="font-serif text-5xl text-midnight-aubergine">
          ✨ Cosmic Glossary
        </h1>
        <p className="text-lg text-midnight-aubergine/80 leading-relaxed">
          A simple, modern dictionary for SoftWitch language.
        </p>
        <p className="text-midnight-aubergine/70">
          This glossary keeps the vibe consistent and helps you understand the metaphors used across the Lore, Guides, Tools, and Rituals.
        </p>
        <p className="text-midnight-aubergine/70 italic">
          Nothing mystical. Nothing complicated. Just clear, intuitive definitions for the soft magic we use here.
        </p>
      </motion.div>

      {/* Core Terms */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🌙 Core Terms</h2>
        
        <div className="space-y-3">
          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Ritual</p>
            <p className="text-midnight-aubergine/70 text-sm">A tiny, intentional action that shifts your energy.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Season</p>
            <p className="text-midnight-aubergine/70 text-sm">Your current internal energy state (Active, Quiet, Expansion, Transition).</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Signal</p>
            <p className="text-midnight-aubergine/70 text-sm">A small pull, a gentle nudge, an intuitive "yes."</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Pattern</p>
            <p className="text-midnight-aubergine/70 text-sm">Something you keep noticing — a repeat, a theme, a cue.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Portal</p>
            <p className="text-midnight-aubergine/70 text-sm">A transition moment; when something ends or begins.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Release</p>
            <p className="text-midnight-aubergine/70 text-sm">Letting go of something heavy, stuck, or no longer needed.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Expansion</p>
            <p className="text-midnight-aubergine/70 text-sm">The feeling of opening — curiosity, creativity, inspiration.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Quiet</p>
            <p className="text-midnight-aubergine/70 text-sm">Lower internal energy; a call to soften, pause, or rest.</p>
          </div>
        </div>
      </motion.section>

      {/* Emotional & Energetic Terms */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🔮 Emotional & Energetic Terms</h2>
        
        <div className="space-y-3">
          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Insight</p>
            <p className="text-midnight-aubergine/70 text-sm">A small flash of clarity. A truth landing softly.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Alignment</p>
            <p className="text-midnight-aubergine/70 text-sm">When your choices match your values, intuition, and energy.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Glow</p>
            <p className="text-midnight-aubergine/70 text-sm">Something that pulls you forward — not logical, but undeniable.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Clarity</p>
            <p className="text-midnight-aubergine/70 text-sm">When a question feels lighter or simpler than it did before.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Grounding</p>
            <p className="text-midnight-aubergine/70 text-sm">Coming back into your body; regulating your energy.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Soft Magic</p>
            <p className="text-midnight-aubergine/70 text-sm">Tiny practices that make your day feel better — not supernatural, just intentional.</p>
          </div>
        </div>
      </motion.section>

      {/* Cosmic & Timing Terms */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🌟 Cosmic & Timing Terms</h2>
        
        <div className="space-y-3">
          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Cycle</p>
            <p className="text-midnight-aubergine/70 text-sm">A natural rhythm (moon phases, internal seasons, emotional patterns).</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Timing</p>
            <p className="text-midnight-aubergine/70 text-sm">The sense of what phase you're in — beginning, middle, ending, transition.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Phase</p>
            <p className="text-midnight-aubergine/70 text-sm">A temporary energetic state in a cycle.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Threshold</p>
            <p className="text-midnight-aubergine/70 text-sm">A moment right before a shift — often emotional or intuitive.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Opening</p>
            <p className="text-midnight-aubergine/70 text-sm">An opportunity, idea, or moment that feels spacious or exciting.</p>
          </div>
        </div>
      </motion.section>

      {/* Self-Reflection Terms */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🌱 Self-Reflection Terms</h2>
        
        <div className="space-y-3">
          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Anchor</p>
            <p className="text-midnight-aubergine/70 text-sm">A sensory cue (breath, light, sound, scent) that brings you into the moment.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Spark</p>
            <p className="text-midnight-aubergine/70 text-sm">A moment of interest or curiosity worth following.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Soft Questions</p>
            <p className="text-midnight-aubergine/70 text-sm">Gentle prompts that invite reflection without pressure.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Reset</p>
            <p className="text-midnight-aubergine/70 text-sm">A small moment where you begin again — no overhaul needed.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">Micro-Win</p>
            <p className="text-midnight-aubergine/70 text-sm">A tiny success that builds trust and momentum.</p>
          </div>
        </div>
      </motion.section>

      {/* Modern Witch Terms */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-3xl text-midnight-aubergine">🪞 Modern Witch Terms (SoftWitch Style)</h2>
        
        <div className="space-y-3">
          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">The Mirror</p>
            <p className="text-midnight-aubergine/70 text-sm">Looking inward gently; noticing your truth.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">The Signal</p>
            <p className="text-midnight-aubergine/70 text-sm">Your inner compass; the subtle direction your intuition points.</p>
          </div>

          <div className="bg-dusty-lilac/20 rounded-lg p-4">
            <p className="font-medium text-midnight-aubergine mb-1">The Glow Test</p>
            <p className="text-midnight-aubergine/70 text-sm">Does it feel warm, open, or exciting? If yes — follow it.</p>
          </div>
        </div>
      </motion.section>

      {/* Guides vs Rituals */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-glam-mauve/10 rounded-lg p-6 space-y-4"
      >
        <h2 className="font-serif text-2xl text-midnight-aubergine">🔍 Guides vs Rituals (Quick Explanation)</h2>
        
        <div className="space-y-4">
          <div>
            <p className="font-medium text-midnight-aubergine mb-2">GUIDES = Understanding</p>
            <p className="text-midnight-aubergine/70">
              They explain the moment. They give clarity, perspective, emotional intelligence, and gentle frameworks.
            </p>
            <p className="text-midnight-aubergine/70 italic">
              Guides = the why + the how to think about it.
            </p>
          </div>

          <div>
            <p className="font-medium text-midnight-aubergine mb-2">RITUALS = Doing</p>
            <p className="text-midnight-aubergine/70">
              They shift the moment. They are tiny actions that change your energy right now.
            </p>
            <p className="text-midnight-aubergine/70 italic">
              Rituals = the what to do next.
            </p>
          </div>

          <div className="text-center pt-4">
            <p className="text-midnight-aubergine/80 font-medium">Together = the SoftWitch way.</p>
            <p className="text-midnight-aubergine/70">
              A blend of understanding + action. Mind + body. Clarity + movement.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Navigation */}
      <LoreNav />
    </div>
  );
}
