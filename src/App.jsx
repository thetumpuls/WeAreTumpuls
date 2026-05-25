import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import PriceList from './pages/PriceList';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/work.html" element={<Work />} />
          <Route path="/work.html/:id" element={<ProjectDetail />} />
          <Route path="/price-list.html" element={<PriceList />} />
          <Route path="/contact.html" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
