import Image from 'next/image';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import Lotus from './Lotus';
import { ClockIcon, ArrowIcon, WhatsAppIcon } from './Icons';
import { SERVICOS, whatsappLink } from '@/lib/site';
import styles from './Servicos.module.css';

export default function Servicos() {
  return (
    <section className={`section ${styles.secao}`} id="servicos">
      <div className="container">
        <SectionHead
          eyebrow="Catálogo MS SPA"
          titulo="Protocolos pensados para"
          enfase="o seu corpo"
          texto="Cada terapia tem duração, técnica e indicação próprias. Me conte o que você está sentindo e eu te ajudo a escolher — os valores eu passo direto no WhatsApp."
        />

        <ul
          className={styles.grid}
          tabIndex={0}
          role="list"
          aria-label="Catálogo de terapias — deslize para ver todas"
        >
          {SERVICOS.map((s, i) => (
            <Reveal
              as="li"
              key={s.slug}
              delay={(i % 3) * 90}
              className={`${styles.item} ${s.destaque ? styles.itemDestaque : ''}`}
            >
              <article className={styles.card}>
                <div className={styles.wrapFoto}>
                  <Image
                    src={s.img}
                    alt={s.alt}
                    width={620}
                    height={775}
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 88vw"
                    className={styles.foto}
                    loading="lazy"
                  />
                  {s.destaque && <span className={styles.fita}>Mais completo</span>}
                </div>

                <div className={styles.corpo}>
                  <div className={styles.meta}>
                    <span className={styles.duracao}>
                      <ClockIcon size={15} />
                      {s.duracao}
                    </span>
                    {s.tag && <span className={styles.tag}>{s.tag}</span>}
                  </div>

                  <h3 className={styles.nome}>{s.nome}</h3>
                  <p className={styles.descricao}>{s.descricao}</p>

                  <a
                    className={styles.link}
                    href={whatsappLink(
                      `Olá, Shay! Quero saber mais sobre a ${s.nome} (${s.duracao}) e consultar os valores.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar valores
                    <ArrowIcon size={17} className={styles.seta} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal as="li" className={`${styles.item} ${styles.itemConvite}`}>
            <a
              className={styles.convite}
              href={whatsappLink(
                'Olá, Shay! Vi o catálogo no site e não sei qual terapia escolher. Pode me ajudar?'
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Lotus size={38} className={styles.conviteLotus} strokeWidth={1.2} />
              <h3 className={styles.conviteTitulo}>Não sabe qual escolher?</h3>
              <p className={styles.conviteTexto}>
                Me descreve o que está te incomodando — dor nas costas, inchaço,
                cansaço, estresse — que eu indico o protocolo certo e passo o valor.
              </p>
              <span className={styles.conviteAcao}>
                <WhatsAppIcon size={18} />
                Falar com a Shay
              </span>
            </a>
          </Reveal>
        </ul>

        <p className={styles.dica} aria-hidden="true">
          Deslize para ver todas
          <ArrowIcon size={15} className={styles.dicaSeta} />
        </p>

      </div>
    </section>
  );
}
