'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import Button from './Button';
import { whatsappLink } from '@/lib/site';
import styles from './Header.module.css';

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#acrescimos', label: 'Acréscimos' },
  { href: '#espaco', label: 'O espaço' },
  { href: '#localizacao', label: 'Onde estamos' },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [aberto]);

  return (
    /* com o menu aberto o header também vai para o modo sólido,
       senão o X e o logo ficam claros sobre o painel creme */
    <header className={`${styles.header} ${solid || aberto ? styles.solid : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#topo" className={styles.brand} aria-label="MS SPA — início">
          <Logo size="sm" />
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.cta}>
          <Button
            href={whatsappLink('Olá, Shay! Vim pelo site e quero agendar um horário.')}
            size="sm"
          >
            Agendar
          </Button>
        </div>

        <button
          className={styles.toggle}
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className={`${styles.bar} ${aberto ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${aberto ? styles.barHide : ''}`} />
          <span className={`${styles.bar} ${aberto ? styles.barBottom : ''}`} />
        </button>
      </div>

      {/* escurece o resto da página para o painel não competir com o hero */}
      <div
        className={`${styles.overlay} ${aberto ? styles.overlayVisivel : ''}`}
        onClick={() => setAberto(false)}
        aria-hidden="true"
      />

      <div
        id="menu-mobile"
        className={`${styles.painel} ${aberto ? styles.painelAberto : ''}`}
        hidden={!aberto}
      >
        <nav aria-label="Navegação mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.linkMobile}
              onClick={() => setAberto(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button
          href={whatsappLink('Olá, Shay! Vim pelo site e quero agendar um horário.')}
          className={styles.btnMobile}
          onClick={() => setAberto(false)}
        >
          Agendar no WhatsApp
        </Button>
      </div>
    </header>
  );
}
