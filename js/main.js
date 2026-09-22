// ==========================================================================
// Dados das especialidades
// ==========================================================================
const ESPECIALIDADES = [
  {
    nome: "Fonoaudiologia",
    frase: "Fala, linguagem, comunicação e deglutição.",
    cor: "var(--leaf-orange)",
    areas: "Desenvolvimento da fala e da linguagem; comunicação funcional; linguagem receptiva e expressiva; articulação; motricidade orofacial; comunicação alternativa e aumentativa; atenção e memória auditiva; processamento auditivo; alimentação e deglutição; disfagia infantil, adulta e em idosos; orientação familiar e escolar.",
    icon: `<path d="M4 8a4 4 0 0 1 4-4h1v9H8a4 4 0 0 1-4-4Z"/><path d="M20 8a4 4 0 0 0-4-4h-1v9h1a4 4 0 0 0 4-4Z"/><path d="M9 13v2a3 3 0 0 0 6 0v-2"/>`
  },
  {
    nome: "Psicologia",
    frase: "Emoções, comportamento e habilidades sociais.",
    cor: "var(--leaf-blue)",
    areas: "Desenvolvimento emocional; autorregulação; habilidades sociais; manejo de comportamentos; atenção e funções executivas; flexibilidade cognitiva; interação social; orientação parental.",
    icon: `<path d="M12 21s-7-4.35-9.5-9A5.5 5.5 0 0 1 12 6.5 5.5 5.5 0 0 1 21.5 12c-2.5 4.65-9.5 9-9.5 9Z"/>`
  },
  {
    nome: "Psicopedagogia",
    frase: "Aprendizagem, leitura, escrita e organização.",
    cor: "var(--leaf-sun)",
    areas: "Aprendizagem; alfabetização; leitura e escrita; raciocínio lógico; atenção e organização; memória de trabalho; planejamento acadêmico; adaptação de estratégias de ensino; orientação à família e à escola.",
    icon: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>`
  },
  {
    nome: "Terapia Ocupacional",
    frase: "Autonomia no dia a dia e integração sensorial.",
    cor: "var(--leaf-green)",
    areas: "Independência funcional; atividades de vida diária; coordenação motora fina; organização sensorial; planejamento motor; participação nas rotinas; regulação e integração sensorial; adaptação de tarefas e ambientes.",
    icon: `<path d="M18 8a2 2 0 1 0-4 0v5"/><path d="M14 13V6a2 2 0 1 0-4 0v7"/><path d="M10 13V8a2 2 0 1 0-4 0v8a6 6 0 0 0 12 0v-3a2 2 0 1 0-4 0"/>`
  },
  {
    nome: "Fisioterapia",
    frase: "Movimento, postura e desenvolvimento motor.",
    cor: "var(--trunk)",
    areas: "Fisioterapia motora e respiratória; estimulação neuropsicomotora; mobilidade; equilíbrio e postura; fortalecimento muscular; prevenção de deformidades; orientação a familiares e cuidadores.",
    icon: `<circle cx="12" cy="4" r="2"/><path d="m8 21 2-7-3-2 2-5 3 2 2-2 4 4-3 2 3 5"/>`
  },
  {
    nome: "Psicomotricidade",
    frase: "O corpo como caminho para aprender e se relacionar.",
    cor: "var(--leaf-green)",
    areas: "Consciência corporal; coordenação motora global; equilíbrio; lateralidade; organização espacial e temporal; planejamento motor; interação pelo movimento; autonomia corporal.",
    icon: `<circle cx="12" cy="5" r="2"/><path d="M12 7v6l-4 8M12 13l4 8M8 11h8"/>`
  },
  {
    nome: "Musicoterapia",
    frase: "A música a serviço da comunicação e da expressão.",
    cor: "var(--leaf-blue)",
    areas: "Comunicação e expressão; interação social; atenção compartilhada; percepção auditiva; regulação emocional; criatividade; participação em grupo; desenvolvimento cognitivo e motor.",
    icon: `<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>`
  },
  {
    nome: "Nutrição",
    frase: "Alimentação segura, variada e sem sofrimento.",
    cor: "var(--leaf-sun)",
    areas: "Seletividade alimentar; rotina alimentar; necessidades nutricionais específicas; educação alimentar; orientação familiar; condições clínicas que interferem na alimentação.",
    icon: `<path d="M11 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V2M7 2v20M18 2c-2 2-2 4-2 8s0 6 2 8"/>`
  }
];

function buildSpecialtyGrid() {
  const grid = document.getElementById("specGrid");
  if (!grid) return;

  ESPECIALIDADES.forEach((esp, i) => {
    const panelId = `spec-panel-${i}`;
    const card = document.createElement("div");
    card.className = "spec-card";
    card.setAttribute("data-open", "false");
    card.innerHTML = `
      <button class="spec-card-trigger" aria-expanded="false" aria-controls="${panelId}">
        <span class="spec-icon" style="background:${esp.cor}">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${esp.icon}</svg>
        </span>
        <span class="spec-card-title">
          <h3>${esp.nome}</h3>
          <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
        </span>
        <p class="tagline">${esp.frase}</p>
      </button>
      <div class="spec-panel" id="${panelId}">
        <div class="spec-panel-inner">${esp.areas}</div>
      </div>
    `;
    grid.appendChild(card);

    const trigger = card.querySelector(".spec-card-trigger");
    trigger.addEventListener("click", () => {
      const isOpen = card.getAttribute("data-open") === "true";
      card.setAttribute("data-open", String(!isOpen));
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

// ==========================================================================
// Menu mobile
// ==========================================================================
function setupMobileNav() {
  const btn = document.getElementById("hamburgerBtn");
  const nav = document.getElementById("mobileNav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

// ==========================================================================
// Formulário de parceria
// ==========================================================================
function setupPartnerForm() {
  const form = document.getElementById("partnerForm");
  const msg = document.getElementById("partnerFormMsg");
  if (!form || !msg) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Integração real (Resend / webhook n8n) fica na API route do backend.
    msg.classList.add("is-visible");
    form.reset();
  });
}

// ==========================================================================
// Métricas — eventos de clique (placeholder para GA4 / Meta Pixel)
// ==========================================================================
function setupEventTracking() {
  document.querySelectorAll("[data-event]").forEach((el) => {
    el.addEventListener("click", () => {
      const eventName = el.getAttribute("data-event");
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName);
      }
    });
  });
}

function setupGalleryMarquee() {
  const track = document.getElementById("galeriaTrack");
  if (!track) return;

  // Duplica os slides uma vez: a animação percorre translateX(-50%),
  // então a cópia garante um loop contínuo e sem cortes.
  const originalSlides = Array.from(track.children);
  originalSlides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  });
}

function setupHeaderScrollShadow() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  buildSpecialtyGrid();
  setupMobileNav();
  setupPartnerForm();
  setupEventTracking();
  setupHeaderScrollShadow();
  setupGalleryMarquee();
});
