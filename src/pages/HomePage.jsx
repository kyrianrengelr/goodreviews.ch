import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import Solution from '../components/sections/Solution';
import Results from '../components/sections/Results';
import Trust from '../components/sections/Trust';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import { scrollToSection } from '../utils/scrollUtils';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
    }
  }, [location.state]);

  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Results />
      <Trust />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
