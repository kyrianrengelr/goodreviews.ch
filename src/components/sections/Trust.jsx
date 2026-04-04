import { useTranslation } from 'react-i18next';
import styles from './Trust.module.css';

const logos = [
  { src: 'Logos_trust/burger-king.webp', alt: 'Burger King', url: 'https://www.burger-king.ch/fr/' },
  { src: 'Logos_trust/agora.png', alt: 'Agora', url: 'https://agoramurten.ch/' },
  { src: 'Logos_trust/brasserie-du-cercle.png', alt: 'Brasserie du Cercle', url: 'https://labrasserieducercle.ch/' },
  { src: 'Logos_trust/qr-group.png', alt: 'QR Group', url: 'https://qrgroup.ch/indexFR' },
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
            <a key={logo.alt} href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={`${base}${logo.src}`} alt={logo.alt} className={styles.logoItem} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;
