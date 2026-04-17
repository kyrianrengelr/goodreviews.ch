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
    document.title = "Good Reviews — Boostez votre note Google | Gestion d'avis pour restaurants & commerces en Suisse";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Good Reviews accompagne les restaurants, commerces et groupes en Suisse pour récolter plus d'avis Google positifs et améliorer leur note. +60 établissements accompagnés, +12.9% de note moyenne. Prenez rendez-vous dès aujourd'hui.");
  }, []);

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
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Results />
        <Trust />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
