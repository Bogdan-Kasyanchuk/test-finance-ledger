import { Routes, Route } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import HomePage from 'pages/HomePage/HomePage';
import CasesBlogPage from 'pages/CasesBlogPage/CasesBlogPage';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cases" element={<CasesBlogPage />} />
        <Route path="/blog" element={<CasesBlogPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
