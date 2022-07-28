import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import Spinner from 'components/Spinner/Spinner';
import Footer from 'components/Footer/Footer';

const HomePage = lazy(() =>
  import('pages/HomePage/HomePage' /* webpackChunkName: "Home" */),
);
const AboutContactPage = lazy(() =>
  import(
    'pages/AboutContactPage/AboutContactPage' /* webpackChunkName: "AboutContact" */
  ),
);
const CasesBlogPage = lazy(() =>
  import(
    'pages/CasesBlogPage/CasesBlogPage' /* webpackChunkName: "CasesBlog" */
  ),
);

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutContactPage />} />
          <Route path="/cases" element={<CasesBlogPage />} />
          <Route path="/blog" element={<CasesBlogPage />} />
          <Route path="/contact" element={<AboutContactPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
