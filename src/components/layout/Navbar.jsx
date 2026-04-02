import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { scrollToSection } from '../../utils/scrollUtils';
import styles from './Navbar.module.css';

const LOGIN_URL = 'https://goodreviews.app/login';
const CALENDLY_URL = 'https://calendly.com/kyrian-goodreviews/appel';

function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleHomeClick = () => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.navbar} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.bar}>
        <div className={styles.logo} onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
          good.
        </div>
        <div className={styles.rightSection}>
          <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className={styles.loginBtn}>{t('nav.login')}</a>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={styles.bookBtn}>{t('nav.bookCall')}</a>
          <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileLangTop}>
            <LanguageSwitcher />
          </div>
          <button className={styles.mobileLink} onClick={handleHomeClick}>{t('nav.home')}</button>
          <button className={styles.mobileLink} onClick={() => handleNavClick('problem')}>{t('nav.problem')}</button>
          <button className={styles.mobileLink} onClick={() => handleNavClick('solution')}>{t('nav.solution')}</button>
          <button className={styles.mobileLink} onClick={() => handleNavClick('results')}>{t('nav.results')}</button>
          <button className={styles.mobileLink} onClick={() => handleNavClick('about')}>{t('nav.about')}</button>
          <button className={styles.mobileLink} onClick={() => handleNavClick('contact')}>{t('nav.contact')}</button>
          <div className={styles.mobileActions}>
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className={styles.mobileLoginBtn}>{t('nav.login')}</a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={styles.mobileBookBtn}>{t('nav.bookCall')}</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
