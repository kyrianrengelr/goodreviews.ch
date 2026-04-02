import styles from './Button.module.css';

function Button({ children, href, onClick }) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.button}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
