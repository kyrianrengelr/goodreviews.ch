import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.css';

const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const newErrors = {};
    if (!formData.get('firstName').trim()) newErrors.firstName = t('contact.required');
    if (!formData.get('lastName').trim()) newErrors.lastName = t('contact.required');
    if (!formData.get('email').trim()) {
      newErrors.email = t('contact.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get('email'))) {
      newErrors.email = t('contact.invalidEmail');
    }
    if (!formData.get('message').trim()) newErrors.message = t('contact.required');
    if (!formData.get('consent')) newErrors.consent = t('contact.required');
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.wrapper}>
      <div className={styles.bottomBg}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t('contact.title')}</h2>

        <div className={styles.content}>
          <div className={styles.coordBlock}>
            <div className={styles.coordTitle}>{t('contact.coordTitle')}</div>
            <a href={`mailto:${t('contact.coordEmail')}`} className={styles.coordEmail}>
              {t('contact.coordEmail')}
            </a>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Honeypot anti-spam */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

            <div className={styles.row}>
              <div className={styles.field}>
                <input type="text" name="firstName" placeholder={`${t('contact.firstName')}*`} className={styles.input} />
                {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
              </div>
              <div className={styles.field}>
                <input type="text" name="lastName" placeholder={`${t('contact.lastName')}*`} className={styles.input} />
                {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <input type="email" name="email" placeholder={`${t('contact.email')}*`} className={styles.input} />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
              <div className={styles.field}>
                <input type="tel" name="phone" placeholder={t('contact.phone')} className={styles.input} />
              </div>
            </div>

            <div className={styles.field}>
              <textarea name="message" placeholder={t('contact.message')} className={styles.textarea} rows="6"></textarea>
              {errors.message && <span className={styles.error}>{errors.message}</span>}
            </div>

            <div className={styles.consentRow}>
              <input type="checkbox" name="consent" id="consent" className={styles.checkbox} />
              <label htmlFor="consent" className={styles.consentLabel}>{t('contact.consent')}</label>
            </div>
            {errors.consent && <span className={styles.error}>{errors.consent}</span>}

            <div className={styles.submitRow}>
              <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
                {status === 'sending' ? t('contact.sending') : t('contact.send')}
              </button>
            </div>

            {status === 'success' && <div className={styles.successMsg}>{t('contact.success')}</div>}
            {status === 'error' && <div className={styles.errorMsg}>{t('contact.error')}</div>}
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Contact;
