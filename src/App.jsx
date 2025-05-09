import { Routes, Route, NavLink } from 'react-router-dom';
import About from './components/About';
import Discography from './components/Discography';
import MapView from './components/MapView';
import Timeline from './components/Timeline';
import Shakira360 from './components/Shakira360';
import DiscordCommunity from './components/DiscordCommunity';

export default function App() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" end>À propos</NavLink>
        <NavLink to="/discography">Discographie</NavLink>
        <NavLink to="/map">Carte</NavLink>
        <NavLink to="/timeline">Timeline</NavLink>
        <NavLink to="/shakira360">Anecdotes, influence et citations</NavLink>
        <NavLink to="/discord">Notre Discord</NavLink>
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
