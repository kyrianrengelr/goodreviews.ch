import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import Solution from '../components/sections/Solution';
import Results from '../components/sections/Results';
import Trust from '../components/sections/Trust';
import About from '../components/sections/About';
import Footer from '../components/layout/Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Results />
      <Trust />
      <About />
      <Footer />
    </>
  );
}

export default HomePage;
