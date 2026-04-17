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
        <h2 className={styles.title}>{t('trust.title')}</h2>
        <div className={styles.logos}>
          {logos.map((logo) => (
            <a key={logo.alt} href={logo.url} target="_blank" rel="noopener noreferrer" aria-label={`Visiter le site de ${logo.alt}`}>
              <img
                src={`${base}${logo.src}`}
                alt={`Logo ${logo.alt} — client de Good Reviews`}
                className={styles.logoItem}
                loading="lazy"
                width="250"
                height="60"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;
