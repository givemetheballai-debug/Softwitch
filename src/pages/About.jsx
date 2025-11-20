import { motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="y2k-hero"
      >
        <h1>About SoftWitch</h1>
        <p>Magic for people who also love memes ✨</p>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="neon-card"
      >
        <h3>⭐️ Hi, I'm Jamie.</h3>
        <div className="space-y-4">
          <p>
            I've always been into magic — the practical kind. The kind that shows up in tiny rituals, pattern recognition, energy shifts, and those moments where something just clicks. I love astrology, self-help, personality frameworks, and any tool that helps me understand myself (and everyone else) a little better.
          </p>
          <p>
            Professionally, I'm a writer, product strategist, and AI builder. I make playful tools, games, and mini-experiments across astrology, culture, tech, and women's sports. Basically: if it blends vibes, strategy, data, and storytelling, I'm in. AI lets me build fast, break things, and bring ideas to life at a speed that feels magic-adjacent.
          </p>
          <p>
            <strong>SoftWitch is where all of that collides.</strong>
          </p>
          <p>
            It's practical magic meets modern design. Astrology with personality. Self-reflection that feels fun, not heavy.
          </p>
          <p>
            A cosmic corner of the internet for people who like magic… but also like memes, nostalgia, and a good personality test.
          </p>
        </div>
      </motion.div>

      {/* My Magic Side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="game-card"
      >
        <h3>🌙 My Magic Side (The Real Story)</h3>
        <div className="space-y-4">
          <p>
            I host solstice and equinox parties. I give my friends tarot cards and witchy gifts. I live for a full-moon moment. And I'm proudly, deeply in my Aquarius energy — curious, mystical, slightly chaotic, always experimenting.
          </p>
          <p>
            <strong>SoftWitch is basically the website version of all of that.</strong>
          </p>
        </div>
      </motion.div>

      {/* What SoftWitch Is */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="polka-box-y2k"
      >
        <h3>🔮 What SoftWitch Is</h3>
        <div className="space-y-4">
          <p>A playful experiment in:</p>
          <ul style={{ color: '#000', fontWeight: 600, listStyle: 'none', paddingLeft: 0 }}>
            <li>✨ Astrology</li>
            <li>🌙 Practical magic</li>
            <li>💫 Self-help</li>
            <li>🎮 Intuitive tools</li>
            <li>🌈 Cosmic vibes with millennial humor</li>
          </ul>
          <p>
            Tiny rituals, cosmic cheat codes, grounding moments, personality insights — all wrapped in a fun, nostalgic aesthetic.
          </p>
          <p>
            <strong>It's magic for people who want clarity and color. Intuition with a sense of humor. A little witchy, a lot relatable.</strong>
          </p>
        </div>
      </motion.div>

      {/* The Vision */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="magic-box-y2k"
      >
        <h3>🌈 The Vision</h3>
        <div className="space-y-4">
          <p>
            SoftWitch is growing into a full cosmic universe. I'll keep adding more fun tools and games.
          </p>
          <p>
            Right now, it's a hub of tools for release, reflection, play, and self-discovery.
          </p>
          <p>
            <strong>For now: Explore. Play. See what resonates.</strong>
          </p>
        </div>
      </motion.div>

      {/* Privacy & Terms Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <div className="flex gap-6 justify-center text-sm flex-wrap">
          <button
            onClick={() => setShowPrivacy(true)}
            style={{ color: '#00ff88', fontWeight: 600, textDecoration: 'underline' }}
            className="hover:opacity-80 transition-opacity"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setShowTerms(true)}
            style={{ color: '#00ff88', fontWeight: 600, textDecoration: 'underline' }}
            className="hover:opacity-80 transition-opacity"
          >
            Terms & Conditions
          </button>
        </div>
      </motion.div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setShowPrivacy(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="cosmic-snapshot-y2k max-w-2xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Privacy Policy 🔒</h2>
            <div className="snapshot-content space-y-4">
              <p className="snapshot-date">Last Updated: November 2025</p>
              
              <div className="snapshot-details space-y-4">
                <p>
                  <strong>The short version:</strong> We respect your privacy. We don't sell your data. We don't do anything weird.
                </p>

                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>What We Collect</h3>
                  <p>
                    When you use SoftWitch tools (like birth chart calculators or interactive games), we might collect:
                  </p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Birth data you enter (date, time, location)</li>
                    <li>Basic analytics (how you use the site, what's popular)</li>
                    <li>Any info you voluntarily share</li>
                  </ul>
                </div>

                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>What We Don't Do</h3>
                  <ul style={{ marginLeft: '1.5rem' }}>
                    <li>Sell your data to third parties</li>
                    <li>Share your birth chart info with anyone</li>
                    <li>Send you spam (unless you ask for it)</li>
                    <li>Track you across the internet like a creep</li>
                  </ul>
                </div>

                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Cookies & Analytics</h3>
                  <p>
                    We use standard analytics tools (like Google Analytics) to understand how people use the site. This helps us make it better. You can disable cookies in your browser if you want.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Changes</h3>
                  <p>
                    We might update this policy as we add new features. We'll post updates here with a new date.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowPrivacy(false)}
                style={{
                  background: 'linear-gradient(135deg, #ff00ff 0%, #00ff88 100%)',
                  color: 'white',
                  padding: '12px 30px',
                  borderRadius: '25px',
                  border: '3px solid white',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  marginTop: '1rem'
                }}
                className="hover:scale-105 transition-transform"
              >
                Got it ✨
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setShowTerms(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="cosmic-snapshot-y2k max-w-2xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Terms & Conditions 📜</h2>
            <div className="snapshot-content space-y-4">
              <p className="snapshot-date">Last Updated: November 2025</p>
              
              <div className="snapshot-details space-y-4">
                <p>
                  <strong>Welcome to SoftWitch!</strong> By using this site, you agree to these terms. They're written in plain English because legal jargon is exhausting.
                </p>

                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>The Basics</h3>
                  <p>
                    SoftWitch is a collection of playful tools for self-reflection, astrology, and cosmic fun. It's entertainment and self-exploration — not medical advice, therapy, or fortune-telling.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>What You Can Do</h3>
                  <ul style={{ marginLeft: '1.5rem' }}>
                    <li>Use the tools for personal fun and insight</li>
                    <li>Share results on social media</li>
                    <li>Enjoy the vibes</li>
                  </ul>
                </div>

                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>What You Can't Do</h3>
                  <ul style={{ marginLeft: '1.5rem' }}>
                    <li>Copy or steal our content, code, or designs</li>
                    <li>Use the site for anything illegal or harmful</li>
                    <li>Reverse engineer our tools</li>
                    <li>Spam, hack, or break things</li>
                  </ul>
                </div>

                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Disclaimers (The Legal Stuff)</h3>
                  <p>
                    SoftWitch is for entertainment and self-reflection. We're not doctors, therapists, or psychics. Don't make major life decisions based solely on what you find here. Use your judgment.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    We provide tools "as is" — we're not liable if something breaks, if you misinterpret your birth chart, or if Mercury actually was in retrograde when you made that bad decision.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Intellectual Property</h3>
                  <p>
                    All content on SoftWitch (text, design, tools, vibes) is owned by Jamie Williams / SoftWitch unless stated otherwise. Don't steal our stuff.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Changes</h3>
                  <p>
                    We can update these terms as the site evolves. Continued use means you accept the new terms.
                  </p>
                </div>

                <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                  Thanks for being here. Now go explore some magic. ✨
                </p>
              </div>

              <button
                onClick={() => setShowTerms(false)}
                style={{
                  background: 'linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)',
                  color: 'white',
                  padding: '12px 30px',
                  borderRadius: '25px',
                  border: '3px solid white',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  marginTop: '1rem'
                }}
                className="hover:scale-105 transition-transform"
              >
                Got it 🌙
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
