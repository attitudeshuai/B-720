import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GoodThings from './pages/GoodThings';
import DeclutterGuide from './pages/DeclutterGuide';
import Favorites from './pages/Favorites';
import { FavoritesProvider } from './contexts/FavoritesContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/good-things" element={<GoodThings />} />
            <Route path="/declutter" element={<DeclutterGuide />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Layout>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App
