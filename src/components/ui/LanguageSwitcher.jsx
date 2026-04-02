import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const languages = ['fr', 'en', 'de'];

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className={styles.switcher}>
      {languages.map((lng, index) => (
        <span key={lng}>
          <button
            className={`${styles.lang} ${i18n.language === lng ? styles.active : ''}`}
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lng.toUpperCase()}
          </button>
          {index < languages.length - 1 && <span className={styles.separator}>|</span>}
        </span>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
