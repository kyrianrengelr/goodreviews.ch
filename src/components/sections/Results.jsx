import { useTranslation } from 'react-i18next';
import ResultCard from '../ui/ResultCard';
import Button from '../ui/Button';
import results from '../../data/results';
import styles from './Results.module.css';

const CALENDLY_URL = 'https://calendly.com/kyrian-goodreviews/appel';

function Results() {
  const { t } = useTranslation();

  return (
    <section id="results" className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t('results.title')}</h2>
        <div className={styles.list}>
          {results.map((result) => (
            <ResultCard
              key={result.id}
              name={result.name}
              type={result.type}
              noteIncrease={result.noteIncrease}
              reviewsIncrease={result.reviewsIncrease}
            />
          ))}
        </div>
        <div className={styles.ctaWrapper}>
          <Button href={CALENDLY_URL}>{t('results.cta')}</Button>
        </div>
      </div>
    </section>
  );
}

export default Results;
