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
        <div className={styles.value}>{noteIncrease} note</div>
        <div className={styles.value}>{reviewsIncrease} avis/mois</div>
      </div>
    </div>
  );
}

export default ResultCard;
