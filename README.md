# MS SPA — site

Landing page de apresentação e agendamento do **MS SPA**, espaço de massoterapia
e terapias naturais da Shauany Oliveira (Shay) em Catolé do Rocha, PB.

Stack: **Next.js (App Router) + CSS Modules**, deploy na Vercel. Sem dependências
de UI — tudo é CSS próprio sobre um conjunto de tokens.

## Rodar local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Identidade visual

A paleta não foi inventada: foi **medida das peças reais da marca** (catálogo,
letreiro dourado do espaço e posts do Instagram) com amostragem de cor.

| Token | Cor | Onde apareceu no material dela |
|---|---|---|
| `--gold-500` | `#BE9E37` | dourado dos títulos do catálogo |
| `--gold-600` | `#A9882B` | sombra do dourado, letreiro da parede |
| `--gold-400` | `#C9A961` | dourado claro, detalhes e hover |
| `--cream-200` | `#F5EBD8` | fundo creme das artes |
| `--espresso` | `#2E2013` | café escuro dos textos |

Regra de contraste: **dourado claro nunca vira texto pequeno.** Textos em dourado
usam `--gold-700` (`#8A6E1E`, 4.66:1 sobre o creme); os tons mais claros ficam em
superfícies, linhas e ícones.

**Tipografia**
- `Cinzel` — logotipo "MS SPA" (bate com o letreiro dourado do espaço)
- `Cormorant Garamond` — títulos
- `Italianno` — o "Bem-vinda" manuscrito
- `Jost` — corpo de texto

## Onde mexer

| O quê | Arquivo |
|---|---|
| WhatsApp, Instagram, cidade, endereço | `lib/site.js` |
| Serviços (nome, duração, texto, foto) | `lib/site.js` → `SERVICOS` |
| Acréscimos e formas de pagamento | `lib/site.js` |
| Cores, espaçamentos, fontes | `app/globals.css` |
| Dados estruturados (SEO local) | `app/page.js` |

Todo CTA aponta para `whatsappLink()`, que monta o link a partir de
`WHATSAPP_NUMBER` — trocar o número num lugar só atualiza os 18 links do site.

## Pendências

- [ ] **Endereço exato.** `ENDERECO` em `lib/site.js` está `null`. Enquanto for
      nulo, a seção de localização mostra a cidade e diz que o endereço completo
      vai na confirmação do agendamento. Basta preencher a string para o texto
      real aparecer no lugar.
- [ ] Google Meu Negócio não configurado. O JSON-LD `HealthAndBeautyBusiness`
      em `app/page.js` já declara o negócio; quando o GMN existir, vale adicionar
      `hasMap` e as coordenadas.

## Imagens

Em `public/img/`, geradas a partir do material que a Shay enviou (fotos do
espaço, do atendimento e do catálogo). Todas em WebP — o conjunto todo tem
menos de 400 KB. Nenhuma foto se repete entre seções; onde o catálogo trazia a
mesma cena em dois serviços, os recortes foram feitos com enquadramentos
diferentes (plano aberto x fechado) para os cartões não parecerem duplicados.

## Decisões que valem saber

- **Carrossel no mobile.** Os 7 cartões empilhados davam quase 7 telas de
  rolagem. Viraram um carrossel com `scroll-snap` abaixo de 640px (e grade de 3
  colunas acima disso), o que cortou a página de 15.240px para 9.528px.
- **Preços fora do site.** A pedido dela, nenhum valor é publicado — todo cartão
  leva para o WhatsApp com o serviço já escrito na mensagem.
- **Animação de entrada à prova de falha.** O `.reveal` só esconde o conteúdo
  dentro de `@media (scripting: enabled)`. Sem JS, o texto nasce visível.
