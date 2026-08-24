import Lotus from './Lotus';
import styles from './Logo.module.css';

export default function Logo({ size = 'md', className = '' }) {
  return (
    <span className={`${styles.logo} ${styles[size]} ${className}`}>
      <span className={styles.words}>
        <span className={styles.line}>MS</span>
        <span className={styles.line}>SPA</span>
      </span>
      <Lotus className={styles.lotus} size="1em" strokeWidth={1.5} />
      <span className="srOnly">MS SPA</span>
    </span>
  );
}
