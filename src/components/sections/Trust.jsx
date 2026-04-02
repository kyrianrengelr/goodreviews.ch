import { useTranslation } from 'react-i18next';
import styles from './Trust.module.css';

const logos = [
  { src: 'Logos_trust/burger-king.webp', alt: 'Burger King' },
  { src: 'Logos_trust/agora.png', alt: 'Agora' },
  { src: 'Logos_trust/brasserie-du-cercle.png', alt: 'Brasserie du Cercle' },
  { src: 'Logos_trust/qr-group.png', alt: 'QR Group' },
];

function Trust() {
  const { t } = useTranslation();
  const base = import.meta.env.BASE_URL;

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.title}>{t('trust.title')}</div>
        <div className={styles.logos}>
          {logos.map((logo) => (
            <img key={logo.alt} src={`${base}${logo.src}`} alt={logo.alt} className={styles.logoItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;
