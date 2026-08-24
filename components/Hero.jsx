import Image from 'next/image';
import Logo from './Logo';
import Button from './Button';
import { PetalIcon } from './Icons';
import { whatsappLink, CIDADE, ESTADO } from '@/lib/site';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="topo">
      <div className={styles.fundo}>
        <Image
          src="/img/hero-ambiente.webp"
          alt="Sala de espera do MS SPA, com poltronas creme, espelho e escalda-pés"
          fill
          priority
          sizes="100vw"
          className={styles.img}
        />
        <div className={styles.veu} aria-hidden="true" />
      </div>

      <div className={`container ${styles.conteudo}`}>
        <Logo size="xl" className={styles.logo} />

        <p className={styles.script}>Bem-vinda</p>

        <h1 className={styles.titulo}>
          Especialista em terapias
          <span className={styles.enfase}> naturais relaxantes</span>
        </h1>

        <p className={styles.sub}>
          Massoterapia com fundamento técnico em {CIDADE}, {ESTADO}. Um espaço pensado
          para o seu corpo desacelerar — e para o cuidado durar depois que a sessão acaba.
        </p>

        <div className={styles.acoes}>
          <Button
            href={whatsappLink(
              'Olá, Shay! Vim pelo site do MS SPA e gostaria de agendar um horário.'
            )}
            size="lg"
          >
            Agendar no WhatsApp
          </Button>
          <a href="#servicos" className={styles.linkSecundario}>
            Ver o catálogo
          </a>
        </div>

        <ul className={styles.selos}>
          <li>
            <PetalIcon size={16} className={styles.petala} />
            Graduanda em Fisioterapia
          </li>
          <li>
            <PetalIcon size={16} className={styles.petala} />
            Drenagem de alta performance
          </li>
          <li>
            <PetalIcon size={16} className={styles.petala} />
            Atendimento individual
          </li>
        </ul>
      </div>

      <a href="#sobre" className={styles.rolar} aria-label="Rolar para a próxima seção">
        <span className={styles.linhaRolar} aria-hidden="true" />
      </a>
    </section>
  );
}
