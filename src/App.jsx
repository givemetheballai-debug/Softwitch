import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BirthChart from './pages/BirthChart';
import Lore from './pages/Lore';
import LoreRoots from './pages/LoreRoots';
import LoreCosmicTiming from './pages/LoreCosmicTiming';
import LoreMoonPhases from './pages/LoreMoonPhases';
import LoreRituals from './pages/LoreRituals';
import LoreGuides from './pages/LoreGuides';
import LoreInnerTools from './pages/LoreInnerTools';
import LoreSpells from './pages/LoreSpells';
import LoreSolstice from './pages/LoreSolstice';
import LoreGlossary from './pages/LoreGlossary';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/birth-chart" element={<BirthChart />} />
            <Route path="/lore" element={<Lore />} />
            <Route path="/lore/roots" element={<LoreRoots />} />
            <Route path="/lore/cosmic-timing" element={<LoreCosmicTiming />} />
            <Route path="/lore/moon-phases" element={<LoreMoonPhases />} />
            <Route path="/lore/rituals" element={<LoreRituals />} />
            <Route path="/lore/guides" element={<LoreGuides />} />
            <Route path="/lore/inner-tools" element={<LoreInnerTools />} />
            <Route path="/lore/spells" element={<LoreSpells />} />
            <Route path="/lore/solstice" element={<LoreSolstice />} />
            <Route path="/lore/glossary" element={<LoreGlossary />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
