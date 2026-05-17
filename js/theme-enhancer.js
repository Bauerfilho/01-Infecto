/* =========================================
   GO PREMIUM — THEME ENHANCER
   Patch mínimo, isolado, NÃO altera lógica
   existente do app.js / router.js / pages.
   Adiciona:
   - Sidebar compacta (toggle + persistência)
   - data-block no <body> por página atual
   - Tooltip / aria-label dos itens compactos
   - ESC para fechar sidebar mobile
   ========================================= */
(function () {
  'use strict';

  /* --------------------------------------
     1. SIDEBAR COMPACTA
  -------------------------------------- */
  const STORAGE_KEY = 'go_sidebar_compact';
  const body = document.body;
  const collapseBtn = document.getElementById('sidebar-collapse-btn');

  function applyCompact(state) {
    if (state) {
      body.classList.add('sidebar-compact');
      if (collapseBtn) {
        collapseBtn.setAttribute('aria-label', 'Expandir menu lateral');
        collapseBtn.setAttribute('title', 'Expandir menu');
      }
    } else {
      body.classList.remove('sidebar-compact');
      if (collapseBtn) {
        collapseBtn.setAttribute('aria-label', 'Recolher menu lateral');
        collapseBtn.setAttribute('title', 'Recolher menu');
      }
    }
  }

  /* Restaurar estado salvo (apenas em desktop > 900px) */
  if (window.innerWidth > 900) {
    const saved = localStorage.getItem(STORAGE_KEY) === '1';
    applyCompact(saved);
  }

  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      const next = !body.classList.contains('sidebar-compact');
      applyCompact(next);
      localStorage.setItem(STORAGE_KEY, next ? '1' : '0');
    });
  }

  /* Em redimensionamento, garantir que mobile não fica em modo compacto */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth <= 900 && body.classList.contains('sidebar-compact')) {
        body.classList.remove('sidebar-compact'); /* visualmente neutro em mobile via CSS */
      } else if (window.innerWidth > 900) {
        const saved = localStorage.getItem(STORAGE_KEY) === '1';
        applyCompact(saved);
      }
    }, 120);
  });

  /* --------------------------------------
     2. ESC fecha sidebar mobile + modal
  -------------------------------------- */
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    /* Fechar sidebar mobile */
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open') && typeof window.closeSidebar === 'function') {
      window.closeSidebar();
    }
    /* Fechar modal de progresso */
    const modal = document.getElementById('progress-modal');
    if (modal && !modal.hasAttribute('hidden')) {
      modal.setAttribute('hidden', '');
    }
  });

  /* --------------------------------------
     3. data-block no <body> por página
     Hook no GO_UPDATE_NAV para não interferir
  -------------------------------------- */
  function deriveBlockId(pageId) {
    if (!pageId) return '';
    if (typeof GO_BLOCKS === 'undefined') return '';
    for (const blockId in GO_BLOCKS) {
      const blk = GO_BLOCKS[blockId];
      if (blk && Array.isArray(blk.pages) && blk.pages.some(p => p.id === pageId)) {
        return blockId;
      }
    }
    return '';
  }

  /* Wrappar GO_UPDATE_NAV existente */
  const _origUpdateNav = window.GO_UPDATE_NAV;
  window.GO_UPDATE_NAV = function (pageId) {
    if (typeof _origUpdateNav === 'function') {
      try { _origUpdateNav(pageId); } catch (e) { /* silencioso */ }
    }
    const blockId = deriveBlockId(pageId);
    if (blockId) {
      body.setAttribute('data-block', blockId);
    } else {
      body.removeAttribute('data-block');
    }
  };

  /* --------------------------------------
     4. Polimento do hambúrguer (animação X)
  -------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    /* Reflexar estado open da sidebar para o hambúrguer */
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      const obs = new MutationObserver(() => {
        const open = sidebar.classList.contains('open');
        hamburger.classList.toggle('is-open', open);
      });
      obs.observe(sidebar, { attributes: true, attributeFilter: ['class'] });
    }
  }

  /* --------------------------------------
     5. Smooth-scroll ao trocar de página
  -------------------------------------- */
  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', () => {
      try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (_) { window.scrollTo(0, 0); }
    });
  }
})();
