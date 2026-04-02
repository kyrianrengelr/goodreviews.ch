import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { scrollToSection } from '../../utils/scrollUtils';
import styles from './Navbar.module.css';

function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.bar}>
        <div className={styles.logo}>
          {t('nav.logo')}<span className={styles.logoSuffix}>{t('nav.logoSuffix')}</span>
        </div>
        <div className={styles.desktopNav}>
          <button className={styles.navLink} onClick={() => handleNavClick('problem')}>{t('nav.problem')}</button>
          <button className={styles.navLink} onClick={() => handleNavClick('solution')}>{t('nav.solution')}</button>
          <button className={styles.navLink} onClick={() => handleNavClick('results')}>{t('nav.results')}</button>
          <button className={styles.navLink} onClick={() => handleNavClick('about')}>{t('nav.about')}</button>
          <LanguageSwitcher />
        </div>
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.mobileLink} onClick={() => handleNavClick('problem')}>{t('nav.problem')}</button>
          <button className={styles.mobileLink} onClick={() => handleNavClick('solution')}>{t('nav.solution')}</button>
          <button className={styles.mobileLink} onClick={() => handleNavClick('results')}>{t('nav.results')}</button>
          <button className={styles.mobileLink} onClick={() => handleNavClick('about')}>{t('nav.about')}</button>
          <div className={styles.mobileLangSwitcher}>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
