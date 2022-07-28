import { Routes, Route } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import HomePage from 'pages/HomePage/HomePage';
import CasesBlogPage from 'pages/CasesBlogPage/CasesBlogPage';
import AboutContactPage from 'pages/AboutContactPage/AboutContactPage';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutContactPage />} />
        <Route path="/cases" element={<CasesBlogPage />} />
        <Route path="/blog" element={<CasesBlogPage />} />
        <Route path="/contact" element={<AboutContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
