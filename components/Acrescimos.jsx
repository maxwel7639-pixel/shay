import Image from 'next/image';
import Reveal from './Reveal';
import Button from './Button';
import { PetalIcon, SparkIcon } from './Icons';
import { ACRESCIMOS, whatsappLink } from '@/lib/site';
import styles from './Acrescimos.module.css';

export default function Acrescimos() {
  return (
    <section className="section" id="acrescimos">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.colTexto}>
          <p className={styles.eyebrow}>
            <span className={styles.tracinho} aria-hidden="true" />
            Acréscimos
          </p>

          <h2 className={styles.titulo}>
            Monte a sessão
            <span className={styles.enfase}> do seu jeito</span>
          </h2>

          <p className={styles.intro}>
            Qualquer protocolo do catálogo aceita acréscimos. Dá para somar uma técnica
            específica para uma queixa sua, ou simplesmente estender o tempo de cuidado.
          </p>

          <ul className={styles.lista}>
            {ACRESCIMOS.map((item) => (
              <li key={item} className={styles.itemLista}>
                <PetalIcon size={15} className={styles.petala} />
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.aviso}>
            <SparkIcon size={20} className={styles.avisoIcone} />
            <p>
              <strong>A partir de 2 acréscimos você tem desconto.</strong> Os valores
              dos acréscimos eu passo junto com o do protocolo, no WhatsApp.
            </p>
          </div>

          <Button
            href={whatsappLink('Olá, Shay! Quero montar uma sessão com acréscimos. Pode me passar as opções?')}
            variant="outline"
            className={styles.botao}
          >
            Montar minha sessão
          </Button>
        </Reveal>

        <Reveal className={styles.colFoto} delay={120}>
          <div className={styles.molduraFoto}>
            <Image
              src="/img/detalhe-bandeja.webp"
              alt="Bandeja dourada com sais de banho, óleos e toalhas do MS SPA"
              width={527}
              height={811}
              sizes="(min-width: 900px) 420px, 88vw"
              className={styles.foto}
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
