import { useTranslation } from 'react-i18next';
import styles from './Trust.module.css';

function Trust() {
  const { t } = useTranslation();

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.title}>{t('trust.title')}</div>
        <div className={styles.logos}>
          <div className={styles.logoItem}>BURGER KING</div>
          <div className={styles.logoItem}>Logo</div>
          <div className={styles.logoItem}>Logo</div>
          <div className={styles.logoItem}>Logo</div>
          <div className={styles.logoItem}>Logo</div>
        </div>
      </div>
    </section>
  );
}

export default Trust;
