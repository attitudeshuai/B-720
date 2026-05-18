import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GoodThings from './pages/GoodThings';
import DeclutterGuide from './pages/DeclutterGuide';
import Favorites from './pages/Favorites';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/good-things" element={<GoodThings />} />
          <Route path="/declutter" element={<DeclutterGuide />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
