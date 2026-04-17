import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import GoogleApiDisclosure from './pages/GoogleApiDisclosure';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HtmlLangUpdater() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const updateLang = () => {
      document.documentElement.lang = i18n.language || 'fr';
    };
    updateLang();
    i18n.on('languageChanged', updateLang);
    return () => i18n.off('languageChanged', updateLang);
  }, [i18n]);

  return null;
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <HtmlLangUpdater />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/google-api-disclosure" element={<GoogleApiDisclosure />} />
      </Routes>
    </Router>
  );
}

export default App;
