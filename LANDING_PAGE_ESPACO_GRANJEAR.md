# Landing Page — Espaço Granjear

> Documento de especificação para criação da landing page institucional do **Espaço Granjear — Clínica Multidisciplinar**.
> Reúne identidade visual, uso do logo, arquitetura da página, conteúdo de cada seção, requisitos técnicos e pendências.

![Logo Espaço Granjear](./assets/logo-espaco-granjear.png)

---

## 1. Visão geral

| Item | Definição |
|---|---|
| **Empresa** | Espaço Granjear — Clínica Multidisciplinar |
| **Segmento** | Saúde / terapias multidisciplinares, com foco em transtornos do neurodesenvolvimento |
| **Objetivo principal** | Gerar contatos de famílias interessadas em avaliação e atendimento (WhatsApp) |
| **Objetivo secundário** | Apresentar a clínica a parceiros institucionais (operadoras, escolas, empresas, órgãos públicos) e captar propostas de parceria |
| **Conversão primária** | Clique em "Agendar acolhimento pelo WhatsApp" |
| **Conversão secundária** | Envio do formulário "Quero ser parceiro" / download da apresentação institucional em PDF |
| **Região** | Rio de Janeiro e Baixada Fluminense (Xerém, Centro de Duque de Caxias, São Cristóvão, Botafogo) |

### Públicos

1. **Famílias e responsáveis.** Pais de crianças com suspeita ou diagnóstico de TEA, TDAH, atrasos de fala e desenvolvimento, dificuldades de aprendizagem. Chegam inseguros, muitas vezes após longa espera por atendimento. Precisam de acolhimento, clareza e um próximo passo simples.
2. **Adultos e cuidadores de idosos.** Demandas de comunicação, deglutição/disfagia e condições neurológicas.
3. **Parceiros institucionais.** Operadoras de saúde, escolas, prefeituras, empresas, médicos que encaminham. Buscam organização, capacidade técnica, relatórios e confiabilidade.

A página fala primeiro com as famílias (hero, especialidades, como funciona) e tem uma seção dedicada a parceiros, com CTA próprio.

---

## 2. Logo

**Arquivo atual:** `assets/logo-espaco-granjear.png` (503 × 496 px, fundo transparente)

**Descrição:** árvore com tronco e raízes em laranja-avermelhado, que se abre em dois galhos como braços erguidos em torno de uma pequena cabeça (figura humana). A copa é formada por folhas com contorno escuro, em gradação do centro para fora: amarelo-laranja → laranja → vermelho → azul → verde. Transmite crescimento, cuidado e desenvolvimento da pessoa em sua totalidade.

### Regras de uso

- **Área de proteção:** manter ao redor do logo um espaço livre mínimo equivalente à altura de uma folha da copa (~12% da largura do logo).
- **Tamanho mínimo:** 40 px de largura em tela (favicon usa versão simplificada, ver abaixo).
- **Fundos permitidos:** branco, tons muito claros da paleta (`--mist`) e o azul-noite (`--night`). Em fundo escuro, o contorno escuro das folhas se perde, então usar a versão com contorno branco (a produzir).
- **Não fazer:** esticar ou distorcer; mudar as cores das folhas; aplicar sombra, brilho ou gradiente; colocar sobre fotos sem uma área de respiro limpa; girar.
- **Assinatura (logo + nome):** logo à esquerda, nome "Espaço Granjear" em fonte de display (peso 700) e "Clínica Multidisciplinar" abaixo, em corpo menor.

### Ativos a produzir antes do desenvolvimento

- [ ] **Vetorizar o logo em SVG.** O PNG atual veio de uma imagem de WhatsApp com fundo removido e pode ter serrilhado nas bordas quando ampliado.
- [ ] Versão **negativa** (contorno branco) para fundos escuros.
- [ ] Versão **monocromática** (uma cor) para rodapé, documentos e carimbos.
- [ ] **Favicon / ícone** simplificado: só a copa central com a figura, sem tronco, para 32 × 32 px e 180 × 180 px (Apple touch icon).
- [ ] Imagem **Open Graph** 1200 × 630 px com logo, nome e frase institucional.

---

## 3. Identidade visual

### 3.1 Conceito: "A árvore que cresce"

O logo já contém o conceito da marca: **uma pessoa no centro, sustentada por um tronco firme e rodeada por folhas de cores diferentes.** Cada cor é uma especialidade; juntas, formam a copa. A página traduz isso literalmente:

- Cada **especialidade recebe a cor de uma folha** da árvore, e essa cor se repete sempre que a especialidade aparece.
- A **folha** (forma de gota com ponta, com contorno escuro) é o elemento gráfico da marca. Aparece em marcadores, ícones, máscaras de fotos e separadores.
- O único momento de destaque é o **hero**: a copa se forma folha por folha ao carregar a página (ver 3.5). O resto da página é calmo e organizado.

### 3.2 Paleta de cores

Cores extraídas diretamente do logo:

| Token | Hex | Origem no logo | Uso |
|---|---|---|---|
| `--leaf-green` | `#55B023` | Folhas externas | Crescimento, autonomia. Fundos e ilustrações |
| `--leaf-blue` | `#078CD0` | Folhas intermediárias | Confiança, clínica. Links, elementos informativos |
| `--leaf-sun` | `#FA9512` | Folhas centrais | Acolhimento, alegria. Destaques e ilustrações |
| `--leaf-orange` | `#F96710` | Folhas centrais | Energia. Botão principal (com texto escuro) |
| `--trunk` | `#F93717` | Tronco e folhas vermelhas | Força, base. Detalhes e acentos pontuais |
| `--ink` | `#1E2327` | Contorno das folhas | Texto principal, contornos, ícones |

Cores de apoio (derivadas, para texto e fundos):

| Token | Hex | Uso |
|---|---|---|
| `--leaf-green-dark` | `#2E7D14` | Texto verde sobre branco |
| `--leaf-blue-dark` | `#05679A` | Links e texto azul sobre branco |
| `--trunk-dark` | `#C8330F` | Texto vermelho/laranja sobre branco |
| `--night` | `#1B3A4B` | Fundo escuro de seções (parceiros, rodapé) |
| `--mist` | `#F2F8FB` | Fundo claro alternativo de seções |
| `--white` | `#FFFFFF` | Fundo principal |

### 3.3 Acessibilidade de cor (contraste WCAG)

As cores vivas do logo **não passam** no contraste mínimo para texto branco pequeno. Regras:

| Combinação | Contraste | Uso permitido |
|---|---|---|
| Branco sobre `--leaf-green` | 2,76 : 1 | ❌ Nunca para texto |
| Branco sobre `--leaf-sun` | 2,24 : 1 | ❌ Nunca para texto |
| Branco sobre `--leaf-orange` | 3,01 : 1 | ⚠️ Só texto ≥ 24 px ou negrito ≥ 19 px |
| Branco sobre `--leaf-blue` | 3,70 : 1 | ⚠️ Só texto grande |
| `--ink` sobre `--leaf-orange` | 5,26 : 1 | ✅ **Botão principal** |
| `--ink` sobre `--leaf-sun` | 7,07 : 1 | ✅ Selos e destaques |
| Branco sobre `--leaf-blue-dark` | 6,15 : 1 | ✅ Botão secundário |
| Branco sobre `--night` | 11,98 : 1 | ✅ Seções escuras |
| `--ink` sobre branco | 15,85 : 1 | ✅ Texto corrido |

**Regra prática:** cores vivas = formas, folhas, ilustrações, fundos de selos com texto escuro. Texto colorido = sempre na versão `-dark`.

### 3.4 Tipografia

| Papel | Fonte | Pesos | Observação |
|---|---|---|---|
| Display / títulos | **Bricolage Grotesque** (Google Fonts) | 600, 700, 800 | Formas arredondadas e expressivas, que dialogam com as folhas do logo sem ficar infantil. Transmite calor para famílias e seriedade para parceiros |
| Texto / interface | **Figtree** (Google Fonts) | 400, 500, 600 | Sans geométrica muito legível, boa para leitura em celular |

**Escala (desktop → mobile):**

| Elemento | Desktop | Mobile | Line-height |
|---|---|---|---|
| H1 (hero) | 64 px | 38 px | 1.05 |
| H2 (seções) | 44 px | 30 px | 1.15 |
| H3 (cards) | 24 px | 20 px | 1.25 |
| Corpo | 18 px | 17 px | 1.6 |
| Pequeno | 15 px | 14 px | 1.5 |

Diretrizes:
- Largura de linha de texto corrido até **70 caracteres**.
- Títulos em **caixa de sentença** (só a primeira letra maiúscula). Sem rótulos em caixa alta acima de cada título.
- Não destacar uma única palavra do título com outra cor ou itálico. O destaque visual vem da folha e da cor da especialidade, não de truques tipográficos.

### 3.5 Forma, ícones e movimento

- **Folha:** forma base `border-radius: 0 100% 0 100%` (ou SVG próprio) com contorno `--ink` de 3 px, igual ao logo.
- **Cantos:** cards grandes com 24 px de raio, botões totalmente arredondados (pílula), campos de formulário com 12 px. Hierarquia clara: nem tudo tem o mesmo raio.
- **Ícones:** linha com traço de 2 px, cor `--ink`, pontas arredondadas (ex.: Lucide ou Phosphor "regular"). Cada especialidade tem seu ícone dentro de uma folha na cor da especialidade.
- **Fotos:** reais, da equipe e dos ambientes, com luz natural. Recorte em formato de folha em pelo menos uma foto por seção. **Nunca mostrar o rosto de pacientes** sem autorização expressa por escrito dos responsáveis. Preferir mãos, materiais terapêuticos, ambientes e crianças de costas ou fora de foco.
- **Movimento:** um único momento orquestrado no hero, com as folhas da copa surgindo de dentro para fora (amarelo → verde), em cerca de 1,2 s. Fora isso, apenas respostas a interações (abrir FAQ, expandir especialidade, foco em botões). Respeitar `prefers-reduced-motion` (sem animação, copa já completa).

### 3.6 Mapa de cores das especialidades

| Especialidade | Cor da folha |
|---|---|
| Fonoaudiologia | `--leaf-orange` |
| Psicologia | `--leaf-blue` |
| Psicopedagogia | `--leaf-sun` |
| Terapia Ocupacional | `--leaf-green` |
| Fisioterapia | `--trunk` |
| Psicomotricidade | `--leaf-green` |
| Musicoterapia | `--leaf-blue` |
| Nutrição | `--leaf-sun` |

### 3.7 Tom de voz

- **Acolhedor e claro.** Fala com pais cansados e preocupados: frases curtas, sem jargão, sem promessas.
- **Tecnicamente seguro.** Termos clínicos aparecem quando ajudam (TEA, TDAH, ABA, disfagia), sempre com explicação simples ao lado.
- **Sem promessa de cura ou resultado garantido.** Falar em desenvolvimento, autonomia, evolução acompanhada.
- **Voz ativa, verbos diretos nos botões:** "Agendar acolhimento", "Falar no WhatsApp", "Baixar apresentação", "Enviar proposta".

---

## 4. Arquitetura da página

```
┌────────────────────────────────────────────────────────────┐
│ HEADER   logo + nome | Especialidades · Como funciona ·     │
│          Unidades · Parcerias | [Agendar acolhimento]       │
├────────────────────────────────────────────────────────────┤
│ 1. HERO           texto à esquerda | copa animada à direita │
│ 2. PARA QUEM      condições atendidas (folhas/chips)        │
│ 3. ESPECIALIDADES 8 folhas coloridas, expansíveis           │
│ 4. COMO FUNCIONA  4 fases (acolher → avaliar → cuidar →     │
│                   acompanhar)                               │
│ 5. DIFERENCIAIS   6 pontos + destaque "atendimento em dupla"│
│ 6. FAMÍLIA E      duas colunas                              │
│    ESCOLA                                                   │
│ 7. UNIDADES       4 unidades + mapa                         │
│ 8. DIREÇÃO        Vivian Bighi e Janaina Moraes             │
│ 9. PARCERIAS      seção escura (--night) + formulário B2B   │
│10. FAQ            perguntas frequentes                      │
│11. CTA FINAL      "Vamos conversar sobre o seu filho?"      │
├────────────────────────────────────────────────────────────┤
│ FOOTER   logo · contatos · unidades · RT · redes · LGPD     │
└────────────────────────────────────────────────────────────┘
[botão flutuante WhatsApp em todas as telas]
```

Alinhamento geral: **à esquerda**, em grid de 12 colunas (largura máxima 1200 px). Só o CTA final é centralizado.

---

## 5. Conteúdo por seção

### Header (fixo)

- Logo + "Espaço Granjear" (em mobile, só logo).
- Links âncora: Especialidades · Como funciona · Unidades · Parcerias.
- Botão: **Agendar acolhimento** (`--leaf-orange` com texto `--ink`).
- Mobile: menu hambúrguer + botão de WhatsApp visível.

### 1. Hero

**Layout:**
```
┌───────────────────────────────┬─────────────────────────┐
│ Cuidado integrado para         │                         │
│ desenvolver habilidades,       │      [copa da árvore    │
│ ampliar possibilidades e       │       formando-se       │
│ transformar vidas.             │       folha a folha]    │
│                                │                         │
│ Clínica multidisciplinar para  │                         │
│ crianças, adolescentes e       │                         │
│ adultos, com foco em autismo,  │                         │
│ TDAH e desenvolvimento.        │                         │
│                                │                         │
│ [Agendar acolhimento] [Sou uma │                         │
│                       instituição]                       │
│ Xerém · Duque de Caxias · São  │                         │
│ Cristóvão · Botafogo           │                         │
└───────────────────────────────┴─────────────────────────┘
```

- **H1:** Cuidado integrado para desenvolver habilidades, ampliar possibilidades e transformar vidas.
- **Subtítulo:** Clínica multidisciplinar para crianças, adolescentes e adultos, com atuação especial em autismo, TDAH, atrasos de fala e desenvolvimento.
- **CTA primário:** Agendar acolhimento → WhatsApp com mensagem pré-preenchida ("Olá! Gostaria de agendar um acolhimento no Espaço Granjear.").
- **CTA secundário:** Sou uma instituição → rola até a seção Parcerias.
- **Linha de apoio:** as quatro unidades.
- **Visual:** ilustração SVG da copa animada, baseada no logo vetorizado. Em mobile, a copa fica acima do texto e menor.

### 2. Para quem é o Espaço Granjear

- **H2:** Atendemos cada pessoa no seu ritmo
- **Texto:** Mais do que terapias isoladas, olhamos para o paciente por inteiro: suas necessidades clínicas, familiares, escolares e sociais.
- **Chips em formato de folha:**
  Transtorno do Espectro Autista (TEA) · TDAH · Atrasos no desenvolvimento infantil · Atrasos de fala e linguagem · Transtornos da comunicação · Dificuldades de aprendizagem · Dificuldades de interação social · Alterações sensoriais e motoras · Paralisia cerebral · Síndromes e condições neurológicas · Disfagia e alterações de deglutição · Necessidades clínicas complexas
- **Faixa etária (três blocos):**
  - **Primeira infância:** estimulação precoce e atrasos no desenvolvimento.
  - **Crianças e adolescentes:** TEA, TDAH, aprendizagem, linguagem.
  - **Adultos e idosos:** comunicação, alimentação, deglutição e condições neurológicas.

### 3. Especialidades

- **H2:** Oito especialidades, um só plano de cuidado
- **Componente:** grid de 8 folhas (4 × 2 no desktop, 2 × 4 no tablet, lista no mobile). Cada folha mostra ícone, nome e uma frase. Ao clicar ou tocar, expande a lista completa de áreas de atuação.

| Especialidade | Frase curta | Áreas (ao expandir) |
|---|---|---|
| **Fonoaudiologia** | Fala, linguagem, comunicação e deglutição. | Desenvolvimento da fala e da linguagem; comunicação funcional; linguagem receptiva e expressiva; articulação; motricidade orofacial; comunicação alternativa e aumentativa; atenção e memória auditiva; processamento auditivo; alimentação e deglutição; disfagia infantil, adulta e em idosos; orientação familiar e escolar |
| **Psicologia** | Emoções, comportamento e habilidades sociais. | Desenvolvimento emocional; autorregulação; habilidades sociais; manejo de comportamentos; atenção e funções executivas; flexibilidade cognitiva; interação social; orientação parental |
| **Psicopedagogia** | Aprendizagem, leitura, escrita e organização. | Aprendizagem; alfabetização; leitura e escrita; raciocínio lógico; atenção e organização; memória de trabalho; planejamento acadêmico; adaptação de estratégias de ensino; orientação à família e à escola |
| **Terapia Ocupacional** | Autonomia no dia a dia e integração sensorial. | Independência funcional; atividades de vida diária; coordenação motora fina; organização sensorial; planejamento motor; participação nas rotinas; regulação e integração sensorial; adaptação de tarefas e ambientes |
| **Fisioterapia** | Movimento, postura e desenvolvimento motor. | Fisioterapia motora e respiratória; estimulação neuropsicomotora; mobilidade; equilíbrio e postura; fortalecimento muscular; prevenção de deformidades; orientação a familiares e cuidadores |
| **Psicomotricidade** | O corpo como caminho para aprender e se relacionar. | Consciência corporal; coordenação motora global; equilíbrio; lateralidade; organização espacial e temporal; planejamento motor; interação pelo movimento; autonomia corporal |
| **Musicoterapia** | A música a serviço da comunicação e da expressão. | Comunicação e expressão; interação social; atenção compartilhada; percepção auditiva; regulação emocional; criatividade; participação em grupo; desenvolvimento cognitivo e motor |
| **Nutrição** | Alimentação segura, variada e sem sofrimento. | Seletividade alimentar; rotina alimentar; necessidades nutricionais específicas; educação alimentar; orientação familiar; condições clínicas que interferem na alimentação |

- **Faixa abaixo do grid, "Também oferecemos":** Equoterapia · Ludoterapia · Estimulação infantil · Atendimento em grupo · Circuitos terapêuticos · Acompanhamento Terapêutico (AT) · Atendimento escolar · Atendimento domiciliar (conforme indicação e disponibilidade) · Orientação para pais e responsáveis.

### 4. Como funciona

- **H2:** Do primeiro contato ao acompanhamento contínuo
- **Componente:** linha do tempo horizontal com 4 fases (vertical no mobile). Aqui a numeração faz sentido, porque é uma sequência.

| Fase | Título | O que acontece |
|---|---|---|
| 1 | **Acolhimento** | Escutamos a família, entendemos a demanda e fazemos a entrevista inicial (anamnese). |
| 2 | **Avaliação** | Avaliamos as necessidades do paciente e definimos quais especialidades são indicadas. |
| 3 | **Plano e atendimento** | Construímos um plano terapêutico individualizado e iniciamos os atendimentos. |
| 4 | **Acompanhamento** | Registramos a evolução, orientamos a família, reavaliamos objetivos, emitimos relatórios e, com autorização, conversamos com escola e médicos. |

- **CTA ao final:** Começar pelo acolhimento → WhatsApp.

### 5. Diferenciais

- **H2:** Por que famílias e parceiros escolhem o Granjear
- **Seis pontos** (lista com marcador de folha, não cards idênticos):
  1. **Equipe multidisciplinar integrada:** as especialidades conversam entre si e definem objetivos em conjunto.
  2. **Plano terapêutico individualizado:** construído a partir do quadro clínico, das habilidades e das prioridades da família.
  3. **Objetivos funcionais:** foco no que faz diferença no dia a dia, como se comunicar, participar das rotinas, alimentar-se com segurança e ter autonomia.
  4. **Evolução acompanhada:** registros, avaliações periódicas e relatórios de evolução.
  5. **Experiência em neurodesenvolvimento:** autismo, TDAH, linguagem, aprendizagem e questões sensoriais, com supervisão baseada em ABA.
  6. **Segurança e boas práticas:** biossegurança, privacidade, prontuários organizados e respeito às normas de cada conselho profissional.
- **Bloco de destaque (maior, com foto):** **Atendimento em dupla, quando indicado.** Duas crianças com perfis compatíveis praticam juntas interação, comunicação, atenção compartilhada, turnos, cooperação e flexibilidade. As duplas são formadas por idade, perfil clínico, nível de desenvolvimento e objetivos terapêuticos. Quando o caso pede, o atendimento é individual.

### 6. Família e escola

Duas colunas:

**Com a família**
- H3: Vocês fazem parte do tratamento
- Escuta e acolhimento; orientação sobre o desenvolvimento; explicação dos objetivos; atividades para continuar em casa; devolutivas e relatórios periódicos; orientação parental; apoio na organização das rotinas.

**Com a escola**
- H3: A inclusão continua na sala de aula
- Reuniões com a equipe escolar; orientação aos professores; estratégias de inclusão; Acompanhamento Terapêutico escolar; observação do aluno; adaptação de atividades; palestras e capacitações.

### 7. Unidades

- **H2:** Perto de você no Rio e na Baixada
- Quatro cards com nome, endereço, bairro, horário e botão "Como chegar" (Google Maps):
  - Xerém — *endereço pendente*
  - Centro de Duque de Caxias — *endereço pendente*
  - São Cristóvão — *endereço pendente*
  - Botafogo — *endereço pendente*
- **Horário:** segunda a sexta, das 8h às 17h.
- **Modalidades:** particular, convênios e parcerias institucionais. *(Confirmar lista de convênios aceitos antes de publicar.)*
- **Mapa:** embed único com os 4 pins ou mapa estático em SVG estilizado com as cores da marca (mais leve).

### 8. Direção e fundadoras

- **H2:** Quem conduz o Espaço Granjear

| | Vivian Bighi | Janaina Moraes |
|---|---|---|
| **Cargo** | CEO e fundadora | Responsável Técnica e fundadora |
| **Formação** | Especialista em Autismo (PUC-Rio); Neurociência, Educação e Desenvolvimento Infantil (PUC-RS); Psicomotricista | Fonoaudióloga; Especialista em Autismo (PUC-Rio); Especialista em Análise do Comportamento Aplicada (ABA); Supervisora ABA |
| **Registros** | ABPp 1495 · ABP 02 228 459 · CCB | CRFa 9851 |

- Foto de cada uma em recorte de folha (fotos pendentes).

### 9. Parcerias (seção escura, `--night`)

- **H2:** Para operadoras, escolas, empresas e órgãos públicos
- **Texto:** Construímos projetos personalizados de atendimento, com organização técnica, relatórios de evolução e comunicação com a rede de apoio. Queremos ser um parceiro estratégico, não apenas um prestador de serviços.
- **Modelos de parceria (lista em 2 colunas):** Credenciamento para atendimento terapêutico; pacotes multidisciplinares; programas de estimulação precoce; apoio à inclusão escolar; Acompanhamento Terapêutico; atendimento domiciliar; avaliações multidisciplinares; atendimento de demandas reprimidas; palestras e capacitações; projetos de responsabilidade social.
- **Impacto (faixa):** Menos tempo de espera · identificação precoce · continuidade do tratamento · inclusão escolar e social · mais acesso a serviços especializados.
- **Indicadores:** reservar espaço para 3 ou 4 números (pacientes ativos, atendimentos por mês, profissionais, anos de atuação). **Não publicar sem dados reais.**
- **Ações:**
  - Botão **Baixar apresentação institucional (PDF)**, com o arquivo `Espaco_Granjear_Apresentacao_Parceiros.pdf`.
  - **Formulário "Quero ser parceiro":** nome, instituição, tipo de instituição (select), cargo, e-mail, telefone, mensagem, checkbox de consentimento LGPD. Botão: **Enviar proposta**. Confirmação: "Proposta enviada. Nossa equipe retorna em até 2 dias úteis."

### 10. FAQ

Acordeão com 6 a 8 perguntas (respostas a validar com a direção):
- Preciso ter diagnóstico fechado para agendar?
- Como funciona o acolhimento inicial?
- Vocês atendem por convênio? Quais?
- Qual a idade mínima e máxima atendida?
- Como é definido quais terapias meu filho vai fazer?
- O que é o atendimento em dupla?
- Vocês fazem atendimento na escola ou em casa?
- Recebo relatórios da evolução?

### 11. CTA final

- Centralizado, fundo `--mist`, pequena copa ao fundo.
- **H2:** Vamos conversar sobre o desenvolvimento de quem você cuida?
- **Texto:** O primeiro passo é um acolhimento: escutamos você e explicamos como podemos ajudar.
- **Botão:** Falar no WhatsApp

### Footer (`--night`)

- Logo (versão negativa) + frase institucional.
- Contatos: WhatsApp, telefone, e-mail, Instagram *(pendentes)*.
- Unidades (links para mapa).
- **Responsável Técnica:** Janaina Moraes — CRFa 9851.
- Links: Política de Privacidade · Termos de uso.
- © 2026 Espaço Granjear. CNPJ *(pendente)*.

### Botão flutuante de WhatsApp

Canto inferior direito, 56 px, sempre visível, com `aria-label="Falar com o Espaço Granjear no WhatsApp"`. Pode direcionar para o atendimento automatizado (assistente "Soraia"), com mensagem inicial pré-preenchida.

---

## 6. Design tokens (código)

### CSS

```css
:root {
  /* Folhas do logo */
  --leaf-green: #55B023;
  --leaf-blue: #078CD0;
  --leaf-sun: #FA9512;
  --leaf-orange: #F96710;
  --trunk: #F93717;
  --ink: #1E2327;

  /* Apoio */
  --leaf-green-dark: #2E7D14;
  --leaf-blue-dark: #05679A;
  --trunk-dark: #C8330F;
  --night: #1B3A4B;
  --mist: #F2F8FB;
  --white: #FFFFFF;

  /* Tipografia */
  --font-display: "Bricolage Grotesque", system-ui, sans-serif;
  --font-body: "Figtree", system-ui, sans-serif;

  /* Forma */
  --radius-card: 24px;
  --radius-input: 12px;
  --radius-pill: 999px;
  --leaf-shape: 0 100% 0 100%;
  --leaf-stroke: 3px solid var(--ink);

  /* Espaçamento */
  --section-y: clamp(72px, 10vw, 128px);
  --container: 1200px;
}
```

### Tailwind (`tailwind.config.ts`)

```ts
export default {
  theme: {
    extend: {
      colors: {
        leaf: {
          green: "#55B023", "green-dark": "#2E7D14",
          blue: "#078CD0", "blue-dark": "#05679A",
          sun: "#FA9512",
          orange: "#F96710",
        },
        trunk: { DEFAULT: "#F93717", dark: "#C8330F" },
        ink: "#1E2327",
        night: "#1B3A4B",
        mist: "#F2F8FB",
      },
      fontFamily: {
        display: ["Bricolage Grotesque", "system-ui", "sans-serif"],
        body: ["Figtree", "system-ui", "sans-serif"],
      },
      borderRadius: {
        leaf: "0 100% 0 100%",
        card: "24px",
      },
    },
  },
};
```

### Botões

| Tipo | Fundo | Texto | Uso |
|---|---|---|---|
| Primário | `--leaf-orange` | `--ink` (600) | Agendar acolhimento / WhatsApp |
| Secundário | `--leaf-blue-dark` | branco | Sou uma instituição / Enviar proposta |
| Terciário | transparente, borda `--ink` 2 px | `--ink` | Baixar apresentação, Como chegar |
| Em fundo escuro | `--leaf-sun` | `--ink` | CTAs na seção Parcerias |

Foco visível em todos: `outline: 3px solid var(--leaf-blue); outline-offset: 3px;`

---

## 7. Requisitos técnicos

### Stack sugerida

- **Next.js** (App Router, geração estática) + **TypeScript** + **Tailwind CSS**
- Fontes via `next/font/google` (Bricolage Grotesque e Figtree)
- Animação do hero em CSS/SVG puro (sem biblioteca pesada)
- Formulário de parceria via API route → e-mail (Resend) e/ou webhook para n8n
- Hospedagem: Vercel ou a VPS existente

### Responsividade

- Mobile first. Breakpoints: 640 / 768 / 1024 / 1280 px.
- No mobile, o botão de WhatsApp e o CTA do hero precisam aparecer sem rolagem.
- Área de toque mínima de 44 × 44 px.

### Acessibilidade

- Contraste conforme a seção 3.3 (WCAG AA).
- Hierarquia correta de títulos (um H1 só).
- `alt` descritivo em todas as imagens. O logo usa `alt="Espaço Granjear"`.
- Navegação completa por teclado, incluindo acordeões e o menu mobile.
- `prefers-reduced-motion` respeitado.
- Público com neurodivergência: evitar autoplay de vídeo ou som, flashes e excesso de estímulos visuais.

### Performance

- LCP < 2,5 s em 4G. Imagens em WebP/AVIF com `next/image`.
- Logo e ilustrações em SVG.
- Mapa do Google carregado sob demanda (clique para carregar) ou mapa estático.

### SEO

- **Title:** Espaço Granjear | Clínica multidisciplinar em Duque de Caxias e Rio — Autismo, TDAH e desenvolvimento infantil
- **Meta description:** Fonoaudiologia, Psicologia, Terapia Ocupacional, Psicopedagogia e mais em um cuidado integrado para crianças, adolescentes e adultos. Unidades em Xerém, Duque de Caxias, São Cristóvão e Botafogo.
- **Palavras-chave:** clínica autismo Duque de Caxias; terapia TEA Baixada Fluminense; fonoaudiologia infantil Xerém; clínica multidisciplinar Botafogo; terapia ocupacional integração sensorial RJ; ABA Rio de Janeiro.
- **Dados estruturados:** `MedicalClinic` (JSON-LD) com uma entrada `location` por unidade, `openingHours: Mo-Fr 08:00-17:00`, `medicalSpecialty` e logo.
- Open Graph e Twitter Card com a imagem 1200 × 630.
- Cadastrar e vincular cada unidade no **Google Business Profile**.

### LGPD e privacidade

- Banner de cookies apenas se houver analytics ou pixels.
- Formulários **não pedem dados de saúde** (diagnóstico, laudos). Só contato.
- Checkbox de consentimento com link para a Política de Privacidade.
- Política de Privacidade própria, com contato do encarregado (DPO).

### Publicidade em saúde

- Validar todos os textos com a Responsável Técnica antes de publicar.
- Não prometer cura ou resultados; não usar imagens de "antes e depois".
- Depoimentos de famílias só após checar as normas de publicidade de cada conselho envolvido (CFFa, CFP, COFFITO e outros) e com autorização por escrito.
- Exibir nome e registro da Responsável Técnica no rodapé.

### Métricas

- Eventos: clique em WhatsApp (por posição: header, hero, flutuante, CTA final), envio do formulário de parceria, download do PDF, clique em "Como chegar" por unidade.
- Ferramentas: Google Analytics 4 e/ou Meta Pixel (com consentimento), além de UTMs para campanhas.

---

## 8. Estrutura de arquivos sugerida

```
landing-granjear/
├── LANDING_PAGE_ESPACO_GRANJEAR.md
├── assets/
│   ├── logo-espaco-granjear.png        # atual
│   ├── logo-espaco-granjear.svg        # a produzir
│   ├── logo-espaco-granjear-negativo.svg
│   ├── favicon.svg / apple-touch-icon.png
│   ├── og-image.png
│   ├── fotos/ (equipe, ambientes, fundadoras)
│   └── Espaco_Granjear_Apresentacao_Parceiros.pdf
└── app/
    ├── layout.tsx
    ├── page.tsx
    ├── components/
    │   ├── Header.tsx
    │   ├── Hero.tsx               # copa animada
    │   ├── Condicoes.tsx
    │   ├── Especialidades.tsx     # grid de folhas expansíveis
    │   ├── ComoFunciona.tsx
    │   ├── Diferenciais.tsx
    │   ├── FamiliaEscola.tsx
    │   ├── Unidades.tsx
    │   ├── Direcao.tsx
    │   ├── Parcerias.tsx          # + FormParceria
    │   ├── FAQ.tsx
    │   ├── CTAFinal.tsx
    │   ├── Footer.tsx
    │   ├── WhatsAppFloat.tsx
    │   └── Leaf.tsx               # forma de folha reutilizável
    ├── politica-de-privacidade/page.tsx
    └── api/parceria/route.ts
```

---

## 9. Pendências (antes de desenvolver ou publicar)

- [ ] Logo em SVG + versões negativa e monocromática
- [ ] Número de WhatsApp, telefone fixo, e-mail e Instagram oficiais
- [ ] Endereços completos das 4 unidades (e confirmar quais estão ativas)
- [ ] CNPJ e razão social
- [ ] Lista de convênios aceitos
- [ ] Fotos profissionais das fundadoras, da equipe e dos ambientes
- [ ] Significado de "CCB" nos registros da Vivian (sigla ou nome por extenso)
- [ ] Indicadores reais para a seção Parcerias
- [ ] Respostas do FAQ validadas pela direção
- [ ] Domínio (ex.: `espacogranjear.com.br`) e e-mail que recebe o formulário de parceria
- [ ] Política de Privacidade e contato do encarregado LGPD
- [ ] Revisão final dos textos pela Responsável Técnica

---

*Espaço Granjear — cuidado integrado para desenvolver habilidades, ampliar possibilidades e transformar vidas.*
