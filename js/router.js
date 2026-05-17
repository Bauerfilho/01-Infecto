/* =========================================
   SINDROMES FEBRIS — HASH ROUTER
   ========================================= */

class GORouter {
  constructor() {
    this.currentPage = null;
    this.handlers = {};
    this._init();
  }

  _init() {
    window.addEventListener('hashchange', () => this._resolve());
    window.addEventListener('load', () => this._resolve());
  }

  on(pageId, handler) {
    this.handlers[pageId] = handler;
    return this;
  }

  navigate(pageId) {
    window.location.hash = '#' + pageId;
  }

  _resolve() {
    const hash = window.location.hash.replace('#', '') || 'home';
    const page = GO_PAGES.find(p => p.id === hash) || GO_PAGES[0];
    if (this.currentPage === page.id) return;
    this.currentPage = page.id;
    this._render(page);
  }

  _render(page) {
    // Atualizar nav (novo sistema de cards)
    if (window.GO_UPDATE_NAV) window.GO_UPDATE_NAV(page.id);

    // Atualizar breadcrumb
    const bc = document.getElementById('header-breadcrumb');
    if (bc) bc.textContent = `${this._blockLabel(page.block)} › ${page.label}`;

    // Atualizar fundo gradiente
    const bg = document.getElementById('page-bg');
    if (bg) {
      bg.style.background = GRAD_MAP[page.grad] || GRAD_MAP.revisao;
      bg.style.backgroundSize = '400% 400%';
    }

    // Atualizar título da aba
    document.title = `${page.label} — Síndromes Febris`;

    // Spinner de carregamento
    const container = document.getElementById('page-container');
    if (!container) return;
    container.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;min-height:40vh;flex-direction:column;gap:16px;">
        <div class="spinner"></div>
        <span style="font-size:var(--text-sm);color:var(--text-muted)">Carregando...</span>
      </div>`;

    requestAnimationFrame(() => {
      const fn = window.GO_RENDER && window.GO_RENDER[page.id];
      if (fn) {
        container.innerHTML = '';
        fn(container, page);
      } else {
        container.innerHTML = this._fallback(page);
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
      this._attachPageLinks(container);
      this._markVisited(page.id);
      this._updateProgress();
    });
  }

  _attachPageLinks(container) {
    container.querySelectorAll('[data-goto]').forEach(el => {
      el.addEventListener('click', () => this.navigate(el.dataset.goto));
    });
  }

  _blockLabel(block) {
    return GO_BLOCKS[block] ? GO_BLOCKS[block].label : block;
  }

  _fallback(page) {
    return `<div class="page-hero" style="--grad-current:${GRAD_MAP[page.grad]}">
      <span class="page-hero-tag">📖 ${this._blockLabel(page.block)}</span>
      <h1>${page.label}</h1>
      <p class="subtitle">Conteúdo em construção...</p>
    </div>`;
  }

  _markVisited(pageId) {
    const visited = JSON.parse(localStorage.getItem('sf_visited') || '[]');
    if (!visited.includes(pageId)) {
      visited.push(pageId);
      localStorage.setItem('sf_visited', JSON.stringify(visited));
    }
  }

  _updateProgress() {
    const visited = JSON.parse(localStorage.getItem('sf_visited') || '[]');
    const pct = Math.round((visited.length / GO_PAGES.length) * 100);
    const lbl = document.getElementById('progress-label');
    if (lbl) lbl.textContent = pct + '%';
    // Também atualiza via GO_UPDATE_NAV se disponível
    if (window.GO_UPDATE_NAV) window.GO_UPDATE_NAV(this.currentPage);
  }
}

const router = new GORouter();
