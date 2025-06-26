import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CurhatForm from './pages/CurhatForm';
import Schedule from './pages/Schedule';
import Team from './pages/Team';
import Content from './pages/Content';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/curhat" element={<CurhatForm />} />
          <Route path="/jadwal" element={<Schedule />} />
          <Route path="/tim" element={<Team />} />
          <Route path="/konten" element={<Content />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
