import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import StatCard from '../ui/StatCard';
import Button from '../ui/Button';
import stats from '../../data/stats';
import styles from './About.module.css';

const CALENDLY_URL = 'https://calendly.com/kyrian-goodreviews/appel';

function About() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.title}>{t('about.title')}</div>

        <div className={styles.aboutContent}>
        <img src="/Photo_fondateur.JPG" alt="Kyrian, fondateur de Good Reviews" className={styles.photo} />

        <div className={styles.textBlock}>
        <div className={`${styles.textContainer} ${expanded ? styles.expanded : ''}`}>
          <div className={styles.text}>
            {t('about.text1')}
            <br /><br />
            {t('about.text2')}
            <br /><br />
            {t('about.text3')}
            <br /><br />
            {t('about.text4')}
            <br /><br />
            {t('about.text5')}
            <br /><br />
            <span className={styles.signature}>{t('about.signature')}</span>
          </div>
          {!expanded && <div className={styles.fadeOut}></div>}
        </div>

        <button className={styles.readMore} onClick={() => setExpanded(!expanded)}>
          {expanded ? t('about.readLess') : t('about.readMore')}
        </button>
        </div>
        </div>

        <div className={styles.statsRow}>
          {stats.map((stat) => (
            <StatCard key={stat.id} numberKey={stat.numberKey} labelKey={stat.labelKey} />
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Button href={CALENDLY_URL}>{t('about.cta')}</Button>
        </div>
      </div>
    </section>
  );
}

export default About;
