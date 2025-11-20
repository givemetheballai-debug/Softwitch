import { motion, AnimatePresence } from 'framer-motion';
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
  const [formCollapsed, setFormCollapsed] = useState(false);

  // Geocode location to get lat/long
  const geocodeLocation = async (locationString) => {
    if (!locationString) return null;
    
    try {
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
      let location = null;
      if (birthData.location && birthData.time) {
        location = await geocodeLocation(birthData.location);
        setCoords(location);
      }
      
      const birthDate = new Date(birthData.date);
      const chart = calculateBirthChart(
        birthDate,
        birthData.time || '12:00',
        location
      );
      
      setResult(chart);
      setFormCollapsed(true);
    } catch (error) {
      console.error('Calculation error:', error);
      alert('Error calculating birth chart. Please check your inputs.');
    } finally {
      setCalculating(false);
    }
  };

  const handleReset = () => {
    setBirthData({ date: '', time: '', location: '' });
    setResult(null);
    setCoords(null);
    setFormCollapsed(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="y2k-hero"
        style={{ padding: '30px 20px', marginBottom: '30px' }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Your Birth Chart ✨</h1>
        <p style={{ fontSize: '1rem' }}>Decode your cosmic blueprint 🌙</p>
      </motion.div>

      {/* Form - Collapsible */}
      <AnimatePresence>
        {!formCollapsed ? (
          <motion.div
            initial={{ opacity: 0, height: 'auto' }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="neon-card"
            style={{ padding: '25px' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Calculate Your Chart</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#000', fontSize: '0.9rem' }}>
                  Birth Date *
                </label>
                <input
                  type="date"
                  value={birthData.date}
                  onChange={(e) => setBirthData({...birthData, date: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '12px',
                    border: '3px solid #ff00ff',
                    fontSize: '1rem',
                    background: 'white',
                    color: '#000'
                  }}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#000', fontSize: '0.9rem' }}>
                  Birth Time (optional)
                </label>
                <input
                  type="time"
                  value={birthData.time}
                  onChange={(e) => setBirthData({...birthData, time: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '12px',
                    border: '3px solid #00ffff',
                    fontSize: '1rem',
                    background: 'white',
                    color: '#000'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#000', fontSize: '0.9rem' }}>
                  Birth Location (optional)
                </label>
                <input
                  type="text"
                  value={birthData.location}
                  onChange={(e) => setBirthData({...birthData, location: e.target.value})}
                  placeholder="City, State or City, Country"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '12px',
                    border: '3px solid #00ff88',
                    fontSize: '1rem',
                    background: 'white',
                    color: '#000'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={calculating}
                style={{
                  width: '100%',
                  background: calculating ? '#666' : 'linear-gradient(135deg, #ff00ff 0%, #00ff88 100%)',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '20px',
                  border: '3px solid white',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  cursor: calculating ? 'not-allowed' : 'pointer',
                  marginTop: '10px'
                }}
                className={calculating ? '' : 'hover:scale-105 transition-transform'}
              >
                {calculating ? 'Calculating... ✨' : 'Calculate My Chart 🌙'}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              background: 'linear-gradient(135deg, #ffd700 0%, #ff1493 50%, #00ffff 100%)',
              padding: '15px',
              borderRadius: '20px',
              border: '4px solid #fff',
              textAlign: 'center'
            }}
          >
            <button
              onClick={handleReset}
              style={{
                background: 'white',
                color: '#ff00ff',
                padding: '10px 25px',
                borderRadius: '15px',
                border: '3px solid #ff00ff',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer'
              }}
              className="hover:scale-105 transition-transform"
            >
              Calculate Again 🔄
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Always-Visible Descriptions */}
      <div className="space-y-4">
        <h2 className="section-title-y2k" style={{ fontSize: '2rem', marginBottom: '20px' }}>What Your Big 3 Means</h2>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #ff1493 0%, #ffd700 50%, #00ff00 100%)',
          padding: '20px',
          borderRadius: '20px',
          border: '4px solid #fff'
        }}>
          <h3 style={{ fontFamily: 'Fredoka', fontSize: '1.3rem', color: '#000', marginBottom: '10px' }}>
            🌞 Your Sun (Your Core Energy)
          </h3>
          <p style={{ color: '#000', fontWeight: 600, lineHeight: 1.5, fontSize: '0.95rem' }}>
            Your Sun is your headline energy — the vibe you naturally operate from before the world tells you who to be. It's not destiny, it's your default setting.
          </p>
        </div>

        <div style={{ 
          background: 'linear-gradient(135deg, #ff00ff 0%, #00d4ff 100%)',
          padding: '20px',
          borderRadius: '20px',
          border: '4px solid #fff'
        }}>
          <h3 style={{ fontFamily: 'Fredoka', fontSize: '1.3rem', color: 'white', marginBottom: '10px' }}>
            🌙 Your Moon (Your Emotional Style)
          </h3>
          <p style={{ color: 'white', fontWeight: 600, lineHeight: 1.5, fontSize: '0.95rem' }}>
            Your Moon is your inner world — the part of you that only comes out around best friends, late-night thoughts, or when you need a recharge. Think of it as your emotional operating system.
          </p>
        </div>

        <div style={{ 
          background: 'linear-gradient(135deg, #00ff88 0%, #00d4ff 50%, #ff00ff 100%)',
          padding: '20px',
          borderRadius: '20px',
          border: '4px solid #fff'
        }}>
          <h3 style={{ fontFamily: 'Fredoka', fontSize: '1.3rem', color: '#000', marginBottom: '10px' }}>
            ⬆️ Your Rising (Your Social Vibe)
          </h3>
          <p style={{ color: '#000', fontWeight: 600, lineHeight: 1.5, fontSize: '0.95rem' }}>
            Your Rising sign is your whole first-impression aura — the energy people pick up before they know anything real about you. It's your social posture, your vibe at the door.
          </p>
        </div>
      </div>

      {/* Results */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
          style={{ marginTop: '40px' }}
        >
          <h2 className="section-title-y2k" style={{ fontSize: '2rem', marginBottom: '20px' }}>Your Cosmic Profile</h2>
          
          {/* Big 3 Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
            <div style={{ 
              textAlign: 'center', 
              padding: '20px', 
              background: 'rgba(255,255,255,0.95)', 
              borderRadius: '20px',
              border: '4px solid #ff00ff'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '5px' }}>{result.sun.symbol}</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#000', fontFamily: 'Fredoka' }}>
                {result.sun.name}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#ff00ff', fontWeight: 600, marginTop: '5px' }}>
                Sun Sign
              </div>
            </div>

            <div style={{ 
              textAlign: 'center', 
              padding: '20px', 
              background: 'rgba(255,255,255,0.95)', 
              borderRadius: '20px',
              border: '4px solid #00ffff'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '5px' }}>{result.moon.symbol}</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#000', fontFamily: 'Fredoka' }}>
                {result.moon.name}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#00ffff', fontWeight: 600, marginTop: '5px' }}>
                Moon Sign
              </div>
            </div>

            <div style={{ 
              textAlign: 'center', 
              padding: '20px', 
              background: 'rgba(255,255,255,0.95)', 
              borderRadius: '20px',
              border: '4px solid #00ff88'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '5px' }}>{result.rising.symbol}</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#000', fontFamily: 'Fredoka' }}>
                {result.rising.name}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#00ff88', fontWeight: 600, marginTop: '5px' }}>
                Rising Sign
              </div>
            </div>
          </div>

          {!coords && birthData.time && (
            <p style={{ 
              textAlign: 'center',
              fontSize: '0.875rem', 
              color: 'white',
              fontStyle: 'italic',
              background: 'rgba(255,255,255,0.1)',
              padding: '10px',
              borderRadius: '10px'
            }}>
              Note: Rising sign is approximate without birth location
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}
