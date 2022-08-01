import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import About from 'components/About/About';
import Cases from 'components/Cases/Cases';
import Blog from 'components/Blog/Blog';
import Team from 'components/Team/Team';
import RequestCallback from 'components/RequestCallback/RequestCallback';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Cases />
        <Blog />
        <Team />
        <RequestCallback />
      </main>
      <Footer />
    </>
  );
}

export default App;
