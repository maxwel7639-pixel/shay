import Logo from './Logo';
import { WhatsAppIcon, InstagramIcon, PinIcon } from './Icons';
import {
  whatsappLink,
  WHATSAPP_DISPLAY,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  CIDADE,
  ESTADO,
} from '@/lib/site';
import styles from './Footer.module.css';

const ANO = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.marca}>
          <Logo size="lg" />
          <p className={styles.tagline}>Especialista em terapias naturais relaxantes</p>
          <p className={styles.pessoa}>Shauany Oliveira · Massoterapeuta</p>
        </div>

        <nav className={styles.colunas} aria-label="Rodapé">
          <div className={styles.coluna}>
            <h2 className={styles.colunaTitulo}>Navegar</h2>
            <a href="#sobre">Sobre a Shay</a>
            <a href="#servicos">Serviços</a>
            <a href="#acrescimos">Acréscimos</a>
            <a href="#pagamento">Pagamento</a>
            <a href="#espaco">O espaço</a>
          </div>

          <div className={styles.coluna}>
            <h2 className={styles.colunaTitulo}>Contato</h2>
            <a
              href={whatsappLink('Olá, Shay! Vim pelo site do MS SPA.')}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.comIcone}
            >
              <WhatsAppIcon size={17} />
              {WHATSAPP_DISPLAY}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.comIcone}
            >
              <InstagramIcon size={17} />
              @{INSTAGRAM_HANDLE}
            </a>
            <span className={styles.comIcone}>
              <PinIcon size={17} />
              {CIDADE} — {ESTADO}
            </span>
          </div>
        </nav>
      </div>

      <div className={`container ${styles.base}`}>
        <p>© {ANO} MS SPA · Todos os direitos reservados</p>
        <p className={styles.credito}>
          Site por{' '}
          <a href="https://mxdigital.com.br" target="_blank" rel="noopener noreferrer">
            MX Digital
          </a>
        </p>
      </div>
    </footer>
  );
}
