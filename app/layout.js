import { Cinzel, Cormorant_Garamond, Italianno, Jost } from 'next/font/google';
import './globals.css';
import { SITE_URL } from '@/lib/site';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-logo',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const italianno = Italianno({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'MS SPA — Massoterapia e Terapias Naturais | Catolé do Rocha, PB',
  description:
    'Espaço de massoterapia da Shauany Oliveira em Catolé do Rocha (PB). Massagem relaxante, drenagem linfática, ventosaterapia e terapias corporais com fundamento técnico. Agende pelo WhatsApp.',
  keywords: [
    'massoterapia Catolé do Rocha',
    'drenagem linfática Catolé do Rocha',
    'massagem relaxante Paraíba',
    'ventosaterapia',
    'massagem gestante',
    'MS SPA',
  ],
  authors: [{ name: 'Shauany Oliveira' }],
  openGraph: {
    title: 'MS SPA — Especialista em terapias naturais relaxantes',
    description:
      'Massagem relaxante, drenagem linfática, ventosaterapia e terapias corporais em Catolé do Rocha, PB.',
    url: '/',
    siteName: 'MS SPA',
    locale: 'pt_BR',
    type: 'website',
    images: [
      { url: '/img/og.jpg', width: 1200, height: 630, alt: 'MS SPA — especialista em terapias naturais relaxantes' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MS SPA — Especialista em terapias naturais relaxantes',
    description: 'Massoterapia e terapias naturais em Catolé do Rocha, PB.',
    images: ['/img/og.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FDFAF4',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${cormorant.variable} ${italianno.variable} ${jost.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
