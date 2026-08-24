'use client';

import { useEffect, useState } from 'react';
import { WhatsAppIcon } from './Icons';
import { whatsappLink } from '@/lib/site';
import styles from './WhatsAppFloat.module.css';

/* Botão fixo, presente em todas as seções (padrão MX).
   Aparece depois do hero para não competir com o CTA principal. */
export default function WhatsAppFloat() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={whatsappLink('Olá, Shay! Vim pelo site do MS SPA e quero agendar um horário.')}
      className={`${styles.fab} ${visivel ? styles.visivel : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
    >
      <WhatsAppIcon size={26} className={styles.icone} />
      <span className={styles.rotulo}>Agendar</span>
    </a>
  );
}
