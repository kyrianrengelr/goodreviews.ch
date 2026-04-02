import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';

function Hero() {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
    <section className={styles.hero}>
      <div className={styles.text}>
        {t('hero.line1')}{' '}
        <span className={styles.highlight}>{t('hero.highlight')}</span>{' '}
        {t('hero.line2')}
        <span className={styles.accent}>{t('hero.accent')}</span>
        {t('hero.line3')}
      </div>
    </section>
    </div>
  );
}

export default Hero;
