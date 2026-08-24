import Reveal from './Reveal';
import styles from './SectionHead.module.css';

export default function SectionHead({ eyebrow, titulo, enfase, texto, centro = true }) {
  return (
    <Reveal className={`${styles.head} ${centro ? styles.centro : ''}`}>
      {eyebrow && (
        <p className={styles.eyebrow}>
          <span className={styles.tracinho} aria-hidden="true" />
          {eyebrow}
          <span className={styles.tracinho} aria-hidden="true" />
        </p>
      )}
      <h2 className={styles.titulo}>
        {titulo}
        {enfase && <span className={styles.enfase}> {enfase}</span>}
      </h2>
      {texto && <p className={styles.texto}>{texto}</p>}
    </Reveal>
  );
}
