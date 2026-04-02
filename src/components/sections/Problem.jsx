import { useTranslation } from 'react-i18next';
import styles from './Problem.module.css';

function Problem() {
  const { t } = useTranslation();

  return (
    <section id="problem" className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.title}>{t('problem.title')}</div>

        <div className={styles.statBlock}>
          <div className={styles.statNumber}>{t('problem.stat1Number')}</div>
          <div className={styles.statText}>{t('problem.stat1Text')}</div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.statBlock}>
          <div className={styles.statNumber}>
            <span className={styles.bigNumber}>{t('problem.stat2Number1')}</span>{' '}
            <span className={styles.statMiddle}>{t('problem.stat2Middle')}</span>{' '}
            <span className={styles.bigNumber}>{t('problem.stat2Number2')}</span>
          </div>
          <div className={styles.statText}>{t('problem.stat2Text')}</div>
        </div>
      </div>
    </section>
  );
}

export default Problem;
