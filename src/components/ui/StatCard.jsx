import { useTranslation } from 'react-i18next';
import styles from './StatCard.module.css';

function StatCard({ numberKey, labelKey }) {
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      <div className={styles.number}>{t(numberKey)}</div>
      <div className={styles.label}>{t(labelKey)}</div>
    </div>
  );
}

export default StatCard;
