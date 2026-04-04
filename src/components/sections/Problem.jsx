import { useTranslation } from 'react-i18next';
import styles from './Problem.module.css';

function Problem() {
  const { t } = useTranslation();

  return (
    <section id="problem" className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.title}>{t('problem.title')}</div>

        <div className={styles.statsContainer}>
          <div className={styles.statBlock}>
            <div className={styles.statNumber}>{t('problem.stat1Number')}<sup className={styles.sup}>²</sup></div>
            <div className={styles.statText}>{t('problem.stat1Text')}</div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.statBlock}>
            <div className={styles.statNumber}>
              <span className={styles.bigNumber}>{t('problem.stat2Number1')}</span>{' '}
              <span className={styles.statMiddle}>{t('problem.stat2Middle')}</span>{' '}
              <span className={styles.bigNumber}>{t('problem.stat2Number2')}</span><sup className={styles.sup}>³</sup>
            </div>
            <div className={styles.statText}>{t('problem.stat2Text')}</div>
          </div>
        </div>

        <div className={styles.source}>
          ¹ ² ³ Source :{' '}
          <a
            href="https://www.sciencedirect.com/science/article/abs/pii/S0747563221002351"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sourceLink}
          >
            Université Laval, Canada
          </a>
        </div>
      </div>
    </section>
  );
}

export default Problem;
