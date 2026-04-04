import { useTranslation } from 'react-i18next';
import styles from './ResultCard.module.css';

function ResultCard({ name, type, noteIncrease, reviewsIncrease }) {
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.type}>{type}</div>
      </div>
      <div className={styles.values}>
        <span className={styles.green}>{noteIncrease}</span>
        <span className={styles.label}>Note Google</span>
        <span className={styles.green}>{reviewsIncrease}</span>
        <span className={styles.label}>Avis/mois</span>
      </div>
    </div>
  );
}

export default ResultCard;
