# Espaço Granjear — site institucional

Landing page estática (HTML + CSS + JS puro, sem build e sem dependências).

    index.html                    página única
    css/style.css                 design tokens + layout
    js/main.js                    especialidades, gráfico, contadores, menu, form
    assets/img/                   logos (PNG + WebP)
    assets/fotos/                 fotos liberadas de ambientes e fundadoras
    assets/doc/                   apresentação institucional em PDF
    politica-de-privacidade.html
    termos-de-uso.html
    LANDING_PAGE_ESPACO_GRANJEAR.md   especificação (v3)
    DEPOIMENTOS_E_PESQUISA.md         INTERNO — dados de famílias, não publicar
    doc/                          material de origem (NFs, prints) — NÃO publicar

## Rodar localmente

    python -m http.server 8790

Abra http://localhost:8790

## Aplicado na v3 (24/09/2026)

- WhatsApp real em todo o site: **(21) 96653-7491** (atendimento).
  Parcerias vão para Janaina (21) 96576-1883 e Vivian (21) 98171-6742.
- Endereços completos com CEP nas 4 unidades + selos (convênios, acessível,
  sem estacionamento, particular só em Xerém).
- Convênios publicados: Assim Saúde, Petrobras e AMEP Saúde. Também reembolso.
- Indicadores do hero e de parcerias passaram a usar os números da clínica
  toda (56 profissionais · 8 especialidades · 4 unidades · desde 2016).
  Os números de Botafogo ficaram só em Parcerias, com legenda de escopo.
- Galeria, card de atendimento em dupla e fotos das fundadoras com fotos reais
  (WebP + JPEG de reserva, `loading="lazy"`).
- Nova seção **Depoimentos** com 4 bilhetes editados + faixa da pesquisa
  (89% indicariam, 92% satisfeitas, 100% avaliam os profissionais bem).
- FAQ ganhou "terapia individual", "mesmo terapeuta" e "estacionamento" —
  as 3 dúvidas que mais apareceram na pesquisa de satisfação.
- Botão **Baixar apresentação institucional (PDF)** em Parcerias.
- Rodapé: e-mail real, Instagram @espacogranjear, RT com CRFa, razão social e CNPJ.
- JSON-LD com legalName, taxID, foundingDate, telefone, sameAs, convênios e
  endereços com CEP.
- SEO (25/09/2026): canônico corrigido para `https://www.espacogranjear.com.br/`
  (antes apontava para `espacogranjear.com`, domínio inexistente, o que impedia
  a indexação). JSON-LD virou `@graph` (MedicalOrganization + 4 MedicalClinic),
  `robots.txt` e `sitemap.xml` adicionados. Ao criar páginas novas, incluir no sitemap.

## PENDÊNCIAS ANTES DE PUBLICAR

### 1. Bloqueante
- **Registrar o domínio** `espacogranjear.com` (+ `.com.br` no Registro.br).
  Depois trocar o Gmail por `contato@` e `parcerias@`.
- **Autorização por escrito** das famílias dos 4 depoimentos publicados +
  aprovação da Responsável Técnica nos textos.
- Confirmar o **mês e a unidade** da pesquisa de satisfação (hoje o site diz
  só "2026"; a legenda precisa do mês).

### 2. Confirmar com a clínica
- Qual fundadora recebe o formulário de parcerias (hoje vai para a Janaina).
- Se o download do PDF é aberto ou só sob solicitação.
- Significado de "CCB" nos registros da Vivian (foi removido do site por ora).
- Logo em vetor (.svg/.ai/.pdf) para favicon, versão negativa e OG image.
- Contagem de profissionais por especialidade.

### 3. Fotos que ainda faltam
Fachada real das 4 unidades, sala de Fonoaudiologia, atendimento em dupla,
equipe reunida e recepção de Xerém. As fotos com pessoas identificáveis
(`requer-autorizacao/` na pasta Atualizações) **não** foram publicadas — só
entram com termo assinado. O render da fachada de Xerém também ficou fora:
é imagem gerada, não foto.

### 4. Formulário de parceria
Hoje abre o WhatsApp com os dados preenchidos. Para gravar leads de verdade,
trocar o handler de submit por um POST para Formspree, Netlify Forms ou n8n.

### 5. Analytics
GA4 e Meta Pixel não instalados. A clínica vai rodar anúncios pagos, então é
pré-requisito — junto com banner de consentimento (LGPD).

## Indicadores — como atualizar

Revisão a cada 3 meses. Próxima: **dezembro/2026**. Aparecem em:

1. `js/main.js` → array `ATENDIMENTOS_2026` (gráfico de barras)
2. `index.html` → `data-count` nos `.stat-box`, `.growth-highlight` e `.survey-item`
3. `index.html` → tabela `.growth-table` (por especialidade)
4. `index.html` → `.hero-proof` (números da clínica toda)

Consolidado da clínica: 56 profissionais, 8 especialidades, 4 unidades, 2016.
Botafogo (ago/2026): 2.801 atendimentos/mês, 22 profissionais, 80% de ocupação.

Dados financeiros (faturamento por NF) foram deliberadamente deixados FORA
do site — pertencem ao material comercial fechado.

## Parceiros

A clínica autorizou citar **apenas os nomes**, sem logo: Rede Rio de Medicina
(Grupo Assim), Assim Medical e Centro Médico Amiu. Não há autorização formal
para uso de marca.

## Acessibilidade

- Contraste AA, foco visível, skip link
- Menu mobile fecha com Esc e devolve o foco ao botão
- `prefers-reduced-motion` respeitado (gráfico e contadores renderizam estáticos)
- Sem scroll horizontal em 375 / 768 / 1024 / 1440px (testado)
- Fotos com `alt` descritivo; nenhum rosto de paciente publicado
- Schema.org MedicalClinic + FAQPage
