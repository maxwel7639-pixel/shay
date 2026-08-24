/* Fonte única de verdade do site — trocar aqui reflete em todo lugar. */

/* Número confirmado na arte oficial dela: (83) 99852-7987
   -> internacional: 55 83 99852-7987 = 5583998527987 */
export const WHATSAPP_NUMBER = '5583998527987';
export const WHATSAPP_DISPLAY = '(83) 99852-7987';

export const INSTAGRAM_HANDLE = 'shay_massoterapeuta';
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const CIDADE = 'Catolé do Rocha';
export const ESTADO = 'PB';
/* TODO — Maxwel vai confirmar o endereço exato com a Shay.
   Enquanto isso o site informa a cidade e diz que o endereço
   completo vai na confirmação do agendamento. */
export const ENDERECO = null;

export function whatsappLink(mensagem) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}

export const SERVICOS = [
  {
    slug: 'relaxante-simples',
    nome: 'Massagem Relaxante Corporal Simples',
    duracao: '60 min',
    descricao:
      'Movimentos suaves que aliviam tensões, reduzem o estresse e trazem relaxamento profundo, acalmando a mente através dos óleos essenciais e do toque terapêutico.',
    img: '/img/servico-relaxante-simples.webp',
    alt: 'Shauany aplicando massagem relaxante corporal em ambiente com velas',
  },
  {
    slug: 'relaxante-premium',
    nome: 'Massagem Relaxante Corporal Premium',
    duracao: '120 min',
    descricao:
      'O protocolo completo: massagem manual e com aparelhos relaxantes, termoterapia na maca quentinha, ventosaterapia e pedras quentes numa só sessão.',
    img: '/img/servico-relaxante-premium.webp',
    alt: 'Sessão de massagem relaxante premium na maca do MS SPA',
    destaque: true,
  },
  {
    slug: 'drenagem',
    nome: 'Drenagem Linfática Corporal Completa',
    duracao: '1h50',
    descricao:
      'Drenagem manual associada ao calor da manta térmica para estimular a circulação, reduzir o inchaço e eliminar o excesso de líquidos, com resultado progressivo.',
    img: '/img/servico-drenagem.webp',
    alt: 'Resultado de drenagem linfática corporal no MS SPA',
    tag: 'com manta térmica',
  },
  {
    slug: 'ventosaterapia',
    nome: 'Ventosaterapia Premium',
    duracao: '40 min',
    descricao:
      'A técnica tradicional das ventosas combinada a óleos terapêuticos e aromaterapia, aliviando tensões musculares e melhorando a circulação local.',
    img: '/img/servico-ventosaterapia.webp',
    alt: 'Aplicação de ventosaterapia nas costas com óleos terapêuticos',
  },
  {
    slug: 'miofascial',
    nome: 'Liberação Miofascial Costas + Ventosaterapia',
    duracao: '1h20',
    descricao:
      'A combinação que solta a fáscia e alivia dores nas costas: liberação miofascial seguida de ventosaterapia, para mais mobilidade e sensação de leveza.',
    img: '/img/servico-miofascial.webp',
    alt: 'Liberação miofascial das costas combinada com ventosaterapia',
  },
  {
    slug: 'spa-pes',
    nome: 'Spa dos Pés Relaxante Premium',
    duracao: '40 min',
    descricao:
      'Escalda-pés com sais minerais, óleos essenciais e ervas aromáticas. Uma experiência sensorial que transforma o cuidado com os pés em momento de luxo.',
    img: '/img/servico-spa-pes.webp',
    alt: 'Escalda-pés relaxante premium sendo preparado no MS SPA',
  },
  {
    slug: 'gestante',
    nome: 'Massagem Gestante Premium',
    duracao: '1h30',
    descricao:
      'Técnicas suaves e seguras para a fase mais sensível da vida: alívio das dores nas costas, menos inchaço e um momento de conexão da mãe com o bebê.',
    img: '/img/servico-gestante.webp',
    alt: 'Massagem para gestante realizada com técnicas suaves e seguras',
  },
];

export const ACRESCIMOS = [
  'Ventosaterapia',
  'Liberação miofascial costas',
  'Massagem capilar',
  'Massagem facial',
  'Massagem com pedras quentes',
  'Escalda-pés relaxante',
  'Termoterapia relaxante (maca quentinha)',
];

export const PAGAMENTOS = [
  { titulo: 'Cartão de débito ou crédito', detalhe: 'Parcelamos em até 5x sem juros no crédito' },
  { titulo: 'Dinheiro em espécie', detalhe: 'Pagamento na hora, direto no espaço' },
  { titulo: 'Pix', detalhe: 'A forma mais rápida de confirmar o horário' },
];
