import Image from 'next/image';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import styles from './Espaco.module.css';

const FOTOS = [
  {
    src: '/img/espaco-recepcao.webp',
    alt: 'Recepção do MS SPA com parede verde, quadros dourados e piso marmorizado',
    legenda: 'A recepção',
    w: 521, h: 828,
  },
  {
    src: '/img/espaco-logo-parede.webp',
    alt: 'Letreiro dourado MS SPA com a flor de lótus na parede do espaço',
    legenda: 'A marca no espaço',
    w: 522, h: 795,
  },
  {
    src: '/img/espaco-maca.webp',
    alt: 'Maca preparada com manta creme e toalha bordada MS SPA',
    legenda: 'A maca preparada',
    w: 526, h: 812,
  },
];

export default function Espaco() {
  return (
    <section className="section" id="espaco">
      <div className="container">
        <SectionHead
          eyebrow="O espaço"
          titulo="Um ambiente feito para"
          enfase="desacelerar"
          texto="Atendimento individual, sem sala de espera cheia e sem pressa. Você entra, respira e o resto fica do lado de fora."
        />

        <ul
          className={styles.galeria}
          tabIndex={0}
          role="list"
          aria-label="Fotos do espaço — deslize para ver todas"
        >
          {FOTOS.map((f, i) => (
            <Reveal as="li" key={f.src} delay={i * 110} className={styles.item}>
              <figure className={styles.figura}>
                <div className={styles.wrapFoto}>
                  <Image
                    src={f.src}
                    alt={f.alt}
                    width={f.w}
                    height={f.h}
                    sizes="(min-width: 900px) 340px, (min-width: 640px) 45vw, 88vw"
                    className={styles.foto}
                    loading="lazy"
                  />
                </div>
                <figcaption className={styles.legenda}>{f.legenda}</figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
