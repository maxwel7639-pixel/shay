import Image from 'next/image';
import Reveal from './Reveal';
import Button from './Button';
import Lotus from './Lotus';
import { whatsappLink } from '@/lib/site';
import styles from './CtaFinal.module.css';

export default function CtaFinal() {
  return (
    <section className={styles.secao} id="agendar">
      <div className={styles.fundo}>
        <Image
          src="/img/cta-logo.webp"
          alt=""
          fill
          sizes="100vw"
          className={styles.img}
          loading="lazy"
          aria-hidden="true"
        />
        <div className={styles.veu} aria-hidden="true" />
      </div>

      <div className={`container ${styles.conteudo}`}>
        <Reveal>
          <Lotus size={44} className={styles.lotus} strokeWidth={1.2} />

          <p className={styles.script}>Seu corpo merece essa pausa</p>

          <h2 className={styles.titulo}>
            Vamos marcar
            <span className={styles.enfase}> o seu horário?</span>
          </h2>

          <p className={styles.texto}>
            Me conta o que você está sentindo e quando pode vir. Eu te ajudo a escolher
            o protocolo e passo os valores na hora.
          </p>

          <Button
            href={whatsappLink(
              'Olá, Shay! Vim pelo site do MS SPA e quero agendar meu horário.'
            )}
            size="lg"
            className={styles.botao}
          >
            Agendar no WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
