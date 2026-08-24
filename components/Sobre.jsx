import Image from 'next/image';
import Reveal from './Reveal';
import Button from './Button';
import Lotus from './Lotus';
import { whatsappLink, INSTAGRAM_URL } from '@/lib/site';
import styles from './Sobre.module.css';

export default function Sobre() {
  return (
    <section className="section" id="sobre">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.colFoto}>
          <div className={styles.molduraFoto}>
            <Image
              src="/img/shay-retrato.webp"
              alt="Shauany Oliveira no espaço do MS SPA"
              width={523}
              height={716}
              sizes="(min-width: 900px) 440px, 88vw"
              className={styles.foto}
            />
          </div>
          <span className={styles.selo} aria-hidden="true">
            <Lotus size={22} strokeWidth={1.4} />
          </span>
        </Reveal>

        <Reveal className={styles.colTexto} delay={120}>
          <p className={styles.eyebrow}>
            <span className={styles.tracinho} aria-hidden="true" />
            Quem cuida de você
          </p>

          <h2 className={styles.titulo}>
            Me chamo <span className={styles.enfase}>Shay</span>
          </h2>

          <p className={styles.paragrafo}>
            Sou massoterapeuta especializada em terapias naturais relaxantes e estou
            me graduando em <strong>Fisioterapia</strong>. Trabalho com massagens
            relaxantes corporais, faciais, capilares e podais — sempre partindo do que
            o seu corpo está pedindo naquele dia.
          </p>

          <p className={styles.paragrafo}>
            É esse fundamento técnico que muda a conversa: aqui a sessão não é só um
            momento agradável, é um protocolo pensado para a sua anatomia, com técnicas
            seguras e um ritmo que respeita a individualidade de cada corpo.
          </p>

          <ul className={styles.pilares}>
            <li>
              <span className={styles.pilarNum}>01</span>
              <div>
                <h3 className={styles.pilarTitulo}>Avaliação antes do toque</h3>
                <p className={styles.pilarTexto}>
                  Cada atendimento começa entendendo suas queixas, sua rotina e o que
                  você espera da sessão.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.pilarNum}>02</span>
              <div>
                <h3 className={styles.pilarTitulo}>Técnica com base clínica</h3>
                <p className={styles.pilarTexto}>
                  Drenagem, liberação miofascial e ventosaterapia aplicadas com critério —
                  não no improviso.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.pilarNum}>03</span>
              <div>
                <h3 className={styles.pilarTitulo}>Constância que transforma</h3>
                <p className={styles.pilarTexto}>
                  Uma sessão alivia o dia. Frequência é o que muda o tecido de verdade.
                </p>
              </div>
            </li>
          </ul>

          <div className={styles.acoes}>
            <Button
              href={whatsappLink('Olá, Shay! Quero conversar sobre qual terapia é a melhor pra mim.')}
              variant="outline"
            >
              Falar com a Shay
            </Button>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkInsta}
            >
              @shay_massoterapeuta
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
