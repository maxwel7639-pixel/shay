import Reveal from './Reveal';
import Button from './Button';
import { PinIcon, WhatsAppIcon, ClockIcon } from './Icons';
import { CIDADE, ESTADO, ENDERECO, WHATSAPP_DISPLAY, whatsappLink } from '@/lib/site';
import styles from './Localizacao.module.css';

export default function Localizacao() {
  return (
    <section className={`section ${styles.secao}`} id="localizacao">
      <div className={`container ${styles.wrap}`}>
        <Reveal className={styles.card}>
          <p className={styles.eyebrow}>
            <span className={styles.tracinho} aria-hidden="true" />
            Onde estamos
            <span className={styles.tracinho} aria-hidden="true" />
          </p>

          <h2 className={styles.titulo}>
            {CIDADE}, <span className={styles.enfase}>{ESTADO}</span>
          </h2>

          <ul className={styles.infos}>
            <li>
              <PinIcon size={22} className={styles.icone} />
              <div>
                <h3 className={styles.infoTitulo}>Endereço</h3>
                {/* Quando o endereço for confirmado, é só preencher ENDERECO em lib/site.js */}
                <p className={styles.infoTexto}>
                  {ENDERECO ?? (
                    <>
                      Atendimento com hora marcada em {CIDADE} — {ESTADO}. Envio o
                      endereço completo e as orientações de chegada assim que a gente
                      confirma o seu horário.
                    </>
                  )}
                </p>
              </div>
            </li>

            <li>
              <ClockIcon size={22} className={styles.icone} />
              <div>
                <h3 className={styles.infoTitulo}>Horários</h3>
                <p className={styles.infoTexto}>
                  Agenda por horário marcado, um atendimento por vez. Me chama que eu te
                  mostro os próximos horários livres.
                </p>
              </div>
            </li>

            <li>
              <WhatsAppIcon size={22} className={styles.icone} />
              <div>
                <h3 className={styles.infoTitulo}>Contato direto</h3>
                <p className={styles.infoTexto}>
                  <a
                    href={whatsappLink('Olá, Shay! Vim pelo site e quero saber os horários disponíveis.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.telefone}
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </p>
              </div>
            </li>
          </ul>

          <Button
            href={whatsappLink(
              `Olá, Shay! Vim pelo site do MS SPA. Pode me passar o endereço e os horários disponíveis?`
            )}
            className={styles.botao}
          >
            Pedir endereço e horários
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
