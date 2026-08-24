import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { CardIcon, CashIcon, PixIcon } from './Icons';
import { PAGAMENTOS } from '@/lib/site';
import styles from './Pagamento.module.css';

const ICONES = [CardIcon, CashIcon, PixIcon];

export default function Pagamento() {
  return (
    <section className={`section ${styles.secao}`} id="pagamento">
      <div className="container">
        <SectionHead
          eyebrow="Formas de pagamento"
          titulo="Facilidade para"
          enfase="cuidar de você"
        />

        <ul className={styles.grid}>
          {PAGAMENTOS.map((p, i) => {
            const Icone = ICONES[i];
            return (
              <Reveal as="li" key={p.titulo} delay={i * 100} className={styles.item}>
                <div className={styles.card}>
                  <span className={styles.wrapIcone}>
                    <Icone size={26} />
                  </span>
                  <h3 className={styles.titulo}>{p.titulo}</h3>
                  <p className={styles.detalhe}>{p.detalhe}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className={styles.obs}>
          <p>
            O pagamento é feito antes ou depois da sessão, ainda no espaço.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
