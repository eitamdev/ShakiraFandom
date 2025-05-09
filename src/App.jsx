import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './components/About';
import Discography from './components/Discography';
import MapView from './components/MapView';
import Timeline from './components/Timeline';
import Shakira360 from './components/Shakira360';
import DiscordCommunity from './components/DiscordCommunity';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">🌟 Shakira</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>À propos</NavLink>
          <NavLink to="/discography" onClick={closeMenu}>Discographie</NavLink>
          <NavLink to="/map" onClick={closeMenu}>Carte</NavLink>
          <NavLink to="/timeline" onClick={closeMenu}>Timeline</NavLink>
          <NavLink to="/shakira360" onClick={closeMenu}>Anecdotes</NavLink>
          <NavLink to="/discord" onClick={closeMenu}>Discord</NavLink>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/shakira360" element={<Shakira360 />} />
          <Route path="/discord" element={<DiscordCommunity />} />
        </Routes>
      </main>
    </>
  );
}
