import { useTranslation } from 'react-i18next';
import styles from './Solution.module.css';

function Solution() {
  const { t } = useTranslation();

  return (
    <section id="solution" className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.title}>{t('solution.title')}</div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.stepTitle}>{t('solution.step1Title')}</div>
            <div className={styles.stepText}>
              {t('solution.step1Text1')}
              <br /><br />
              {t('solution.step1Text2Prefix')}<span className={styles.bold}>{t('solution.step1Text2Bold')}</span>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.stepTitle}>
              {t('solution.step2Title1')}<br />
              {t('solution.step2Title2')}
            </div>

            <div className={styles.subSections}>
              <div className={styles.subSection}>
                <div className={styles.subTitle}>{t('solution.measureTitle')}</div>
                <div className={styles.subText}>
                  {t('solution.measureText1')}<br />
                  {t('solution.measureText2')}
                  <br /><br />
                  {t('solution.measureText3')}
                </div>
              </div>

              <div className={styles.subSection}>
                <div className={styles.subTitle}>{t('solution.compareTitle')}</div>
                <div className={styles.subText}>{t('solution.compareText')}</div>
              </div>

              <div className={styles.subSectionLast}>
                <div className={styles.subTitle}>{t('solution.progressTitle')}</div>
                <div className={styles.subText}>
                  {t('solution.progressText1')}<br />
                  <span className={styles.bold}>{t('solution.progressText2')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
