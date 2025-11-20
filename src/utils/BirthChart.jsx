import { motion } from 'framer-motion';
import { useState } from 'react';
import { calculateBirthChart } from '../utils/zodiacCalculator';

export default function BirthChart() {
  const [birthData, setBirthData] = useState({
    date: '',
    time: '',
    location: ''
  });
  const [coords, setCoords] = useState(null);
  const [result, setResult] = useState(null);
  const [calculating, setCalculating] = useState(false);

  // Geocode location to get lat/long
  const geocodeLocation = async (locationString) => {
    if (!locationString) return null;
    
    try {
      // Use OpenStreetMap Nominatim API (free, no key needed)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationString)}&format=json&limit=1`
      );
      const data = await response.json();
      
      if (data && data.length > 0) {
        return {
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon)
        };
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCalculating(true);
    
    try {
      // Get coordinates if location provided
      let location = null;
      if (birthData.location && birthData.time) {
        location = await geocodeLocation(birthData.location);
        setCoords(location);
      }
      
      // Calculate birth chart
      const birthDate = new Date(birthData.date);
      const chart = calculateBirthChart(
        birthDate,
        birthData.time || '12:00',
        location
      );
      
      setResult(chart);
    } catch (error) {
      console.error('Calculation error:', error);
      alert('Error calculating birth chart. Please check your inputs.');
    } finally {
      setCalculating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="y2k-hero"
      >
        <h1>Your Birth Chart ✨</h1>
        <p>Cosmic blueprints decoded 🌙</p>
      </motion.div>

      {/* Explainer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="cosmic-snapshot-y2k"
      >
        <div className="snapshot-content">
          <p className="snapshot-details" style={{ marginBottom: '1rem' }}>
            <strong>Just birthday?</strong> You'll get your Sun sign (your core vibe).
          </p>
          <p className="snapshot-details">
            <strong>Want your full Big 3?</strong> Add birth time + location for accurate Moon and Rising signs.
          </p>
        </div>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="neon-card"
      >
        <h3>Enter Your Info</h3>
        <form onSubmit={handleSubmit} className="space-y-6" style={{ marginTop: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#000' }}>
              Birth Date *
            </label>
            <input
              type="date"
              value={birthData.date}
              onChange={(e) => setBirthData({...birthData, date: e.target.value})}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '15px',
                border: '3px solid #ff00ff',
                fontSize: '1rem',
                background: 'white'
              }}
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#000' }}>
              Birth Time (optional - for accurate Moon & Rising)
            </label>
            <input
              type="time"
              value={birthData.time}
              onChange={(e) => setBirthData({...birthData, time: e.target.value})}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '15px',
                border: '3px solid #00ffff',
                fontSize: '1rem',
                background: 'white'
              }}
            />
            <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: '#000', opacity: 0.7 }}>
              Without time, we'll use noon as default
            </p>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#000' }}>
              Birth Location (optional - for accurate Rising)
            </label>
            <input
              type="text"
              value={birthData.location}
              onChange={(e) => setBirthData({...birthData, location: e.target.value})}
              placeholder="e.g. Cincinnati, Ohio"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '15px',
                border: '3px solid #00ff88',
                fontSize: '1rem',
                background: 'white'
              }}
            />
            <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: '#000', opacity: 0.7 }}>
              City, State or City, Country works
            </p>
          </div>

          <button
            type="submit"
            disabled={calculating}
            style={{
              width: '100%',
              background: calculating ? '#666' : 'linear-gradient(135deg, #ff00ff 0%, #00ff88 100%)',
              color: 'white',
              padding: '16px',
              borderRadius: '25px',
              border: '3px solid white',
              fontWeight: 700,
              fontSize: '1.2rem',
              cursor: calculating ? 'not-allowed' : 'pointer',
              boxShadow: '0 0 30px rgba(255, 0, 255, 0.5)'
            }}
            className={calculating ? '' : 'hover:scale-105 transition-transform'}
          >
            {calculating ? 'Calculating... ✨' : 'Calculate My Chart 🌙'}
          </button>
        </form>
      </motion.div>

      {/* Results */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Big 3 Display */}
          <div className="game-card">
            <h3 style={{ marginBottom: '2rem' }}>Your Big 3 ✨</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div style={{ 
                textAlign: 'center', 
                padding: '1.5rem', 
                background: 'rgba(255,255,255,0.95)', 
                borderRadius: '20px',
                border: '3px solid #ff00ff'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{result.sun.symbol}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#000', fontFamily: 'Fredoka' }}>
                  {result.sun.name}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#ff00ff', fontWeight: 600, marginTop: '0.5rem' }}>
                  Sun Sign
                </div>
              </div>

              <div style={{ 
                textAlign: 'center', 
                padding: '1.5rem', 
                background: 'rgba(255,255,255,0.95)', 
                borderRadius: '20px',
                border: '3px solid #00ffff'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{result.moon.symbol}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#000', fontFamily: 'Fredoka' }}>
                  {result.moon.name}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#00ffff', fontWeight: 600, marginTop: '0.5rem' }}>
                  Moon Sign
                </div>
              </div>

              <div style={{ 
                textAlign: 'center', 
                padding: '1.5rem', 
                background: 'rgba(255,255,255,0.95)', 
                borderRadius: '20px',
                border: '3px solid #00ff88'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{result.rising.symbol}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#000', fontFamily: 'Fredoka' }}>
                  {result.rising.name}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#00ff88', fontWeight: 600, marginTop: '0.5rem' }}>
                  Rising Sign
                </div>
              </div>
            </div>
          </div>

          {/* Sun Description */}
          <div className="polka-box-y2k">
            <h3>🌞 Your Sun (Your Core Energy)</h3>
            <div style={{ marginTop: '1rem', color: '#000', fontWeight: 600, lineHeight: 1.6 }}>
              <p style={{ background: 'rgba(255,255,255,0.9)', padding: '15px', borderRadius: '15px' }}>
                Your Sun is your headline energy — the vibe you naturally operate from before the world tells you who to be. It's not destiny, it's your default setting. This is your posture toward life, the flavor of your confidence, the energy you radiate even on autopilot. Your Sun sign shows where you shine, what feels natural, and the kind of magic you bring without even trying.
              </p>
            </div>
          </div>

          {/* Moon Description */}
          <div className="magic-box-y2k">
            <h3>🌙 Your Moon (Your Emotional Style)</h3>
            <div style={{ marginTop: '1rem', lineHeight: 1.6 }}>
              <p style={{ color: 'white' }}>
                Your Moon is your inner world — the part of you that only comes out around best friends, late-night thoughts, or when you need a recharge. It's how you process feelings, handle mood swings, and reset your internal energy. Think of it as your emotional operating system: private, intuitive, instinctive. Your Moon shows what comforts you, what triggers you, and what helps you feel grounded again.
              </p>
            </div>
          </div>

          {/* Rising Description */}
          <div className="neon-card">
            <h3>⬆️ Your Rising (Your Social Vibe)</h3>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ color: '#000', fontWeight: 600, background: 'rgba(255,255,255,0.9)', padding: '15px', borderRadius: '15px', lineHeight: 1.6 }}>
                Your Rising sign is your whole first-impression aura — the energy people pick up before they know anything real about you. It's your social posture, your vibe at the door, your "this is how I show up in the world" costume. Not fake, not curated, just the version of you that the universe installed as your default front-facing interface.
              </p>
            </div>
            {!coords && birthData.time && (
              <p style={{ 
                marginTop: '1rem', 
                fontSize: '0.875rem', 
                color: '#000',
                fontStyle: 'italic',
                background: 'rgba(255,255,255,0.7)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                Note: Rising sign is approximate without birth location
              </p>
            )}
          </div>

          {/* Future Vision */}
          <div className="cosmic-snapshot-y2k">
            <h2>The Vision 🌈</h2>
            <div className="snapshot-content">
              <p className="snapshot-details">
                Your birth chart is the foundation of your SoftWitch profile. Eventually, it'll power personalized experiences across all the tools — shopping recs, travel suggestions, emotional support, all aligned with your energy.
              </p>
              <p className="snapshot-details" style={{ marginTop: '1rem' }}>
                For now: save this, screenshot it, come back to it. This is you, cosmically decoded.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
