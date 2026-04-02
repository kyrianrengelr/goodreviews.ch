import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logo}>
          good.<span className={styles.logoSuffix}>reviews</span>
        </div>
        <div className={styles.copyright}>{t('footer.copyright')}</div>
      </div>
      <div className={styles.legal}>
        <Link to="/privacy-policy" className={styles.legalLink}>{t('footer.privacy')}</Link>
        <Link to="/terms-of-use" className={styles.legalLink}>{t('footer.terms')}</Link>
        <Link to="/google-api-disclosure" className={styles.legalLink}>{t('footer.googleApi')}</Link>
      </div>
    </footer>
  );
}

export default Footer;
