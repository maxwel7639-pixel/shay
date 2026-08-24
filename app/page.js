import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Servicos from '@/components/Servicos';
import Acrescimos from '@/components/Acrescimos';
import Pagamento from '@/components/Pagamento';
import Espaco from '@/components/Espaco';
import Localizacao from '@/components/Localizacao';
import CtaFinal from '@/components/CtaFinal';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

import {
  SERVICOS,
  CIDADE,
  ESTADO,
  WHATSAPP_NUMBER,
  INSTAGRAM_URL,
} from '@/lib/site';

/* Dados estruturados — ajuda o Google a entender que é um negócio local
   mesmo sem o Google Meu Negócio configurado ainda. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'MS SPA',
  description:
    'Espaço de massoterapia e terapias naturais em Catolé do Rocha, PB. Massagem relaxante, drenagem linfática, ventosaterapia e terapias corporais.',
  image: 'https://msspa.vercel.app/img/og.jpg',
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: CIDADE,
    addressRegion: ESTADO,
    addressCountry: 'BR',
  },
  sameAs: [INSTAGRAM_URL],
  founder: { '@type': 'Person', name: 'Shauany Oliveira', jobTitle: 'Massoterapeuta' },
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catálogo MS SPA',
    itemListElement: SERVICOS.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.nome,
        description: s.descricao,
      },
    })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Acrescimos />
        <Pagamento />
        <Espaco />
        <Localizacao />
        <CtaFinal />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
