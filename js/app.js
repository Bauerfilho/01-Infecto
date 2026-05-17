/* =========================================
   SINDROMES FEBRIS — APP PRINCIPAL
   ========================================= */

(function () {
  'use strict';

  /* ─────────────────────────────────────────
     MAPEAMENTO DE CORES POR BLOCO
  ───────────────────────────────────────── */
  const BLOCK_META = {
    entrada:    { color: '#0f766e', soft: 'rgba(15,118,110,0.22)', icon: '⌂' },
    integracao: { color: '#0f766e', soft: 'rgba(15,118,110,0.22)', icon: '◇' },
    dengue:     { color: '#dc2626', soft: 'rgba(220,38,38,0.20)',  icon: 'D' },
    icterica:   { color: '#d97706', soft: 'rgba(217,119,6,0.22)',  icon: 'I' },
    leish:      { color: '#7c3aed', soft: 'rgba(124,58,237,0.22)', icon: 'L' },
  };

  /* ─────────────────────────────────────────
     BUILD SIDEBAR — CARDS EXPANDIDOS
  ───────────────────────────────────────── */
  function buildSidebar() {
    const nav = document.getElementById('sidebar-nav');
    if (!nav) return;
    nav.innerHTML = '';

    const blockOrder = ['entrada', 'integracao', 'dengue', 'icterica', 'leish'];

    blockOrder.forEach(blockId => {
      const block = GO_BLOCKS[blockId];
      const meta  = BLOCK_META[blockId] || { color: '#64748b', soft: 'rgba(100,116,139,0.2)', icon: '📄' };
      if (!block || !block.pages.length) return;

      /* ── Grupo wrapper ── */
      const group = document.createElement('div');
      group.className = 'nav-group';
      group.dataset.block = blockId;

      /* ── Cabeçalho do bloco (título da doença) ── */
      const header = document.createElement('div');
      header.className = 'nav-group-header';
      header.setAttribute('role', 'button');
      header.setAttribute('aria-expanded', 'false');
      header.setAttribute('tabindex', '0');
      header.innerHTML = `
        <span class="nav-group-dot" style="background:${meta.color};
          box-shadow:0 0 6px ${meta.color}88;"></span>
        <span class="nav-group-title">${block.label}</span>
        <span class="nav-group-toggle">▾</span>`;

      header.addEventListener('click', () => toggleGroup(group, header));
      header.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleGroup(group, header); }
      });

      /* ── Lista de páginas ── */
      const pages = document.createElement('div');
      pages.className = 'nav-pages';
      pages.setAttribute('role', 'list');

      block.pages.forEach(page => {
        const card = document.createElement('button');
        card.className = 'nav-page-card';
        card.dataset.page = page.id;
        card.setAttribute('role', 'listitem');
        card.setAttribute('aria-label', page.label);
        card.style.setProperty('--nav-accent',      meta.color);
        card.style.setProperty('--nav-accent-soft',  meta.soft);

        card.innerHTML = `
          <div class="nav-page-icon">${page.icon}</div>
          <div class="nav-page-info">
            <div class="nav-page-label">${page.label}</div>
          </div>`;

        card.addEventListener('click', () => {
          addRipple(card);
          router.navigate(page.id);
          /* fechar sidebar no mobile */
          if (window.innerWidth <= 900) closeSidebar();
        });

        pages.appendChild(card);
      });

      group.appendChild(header);
      group.appendChild(pages);
      nav.appendChild(group);
    });

    /* Abrir o bloco "entrada" por padrão */
    const firstGroup = nav.querySelector('.nav-group');
    if (firstGroup) openGroup(firstGroup, firstGroup.querySelector('.nav-group-header'));
  }

  /* ─────────────────────────────────────────
     TOGGLE / OPEN / CLOSE DE GRUPOS
  ───────────────────────────────────────── */
  function openGroup(group, header) {
    group.classList.add('open');
    header && header.setAttribute('aria-expanded', 'true');
  }

  function closeGroup(group, header) {
    group.classList.remove('open');
    header && header.setAttribute('aria-expanded', 'false');
  }

  function toggleGroup(group, header) {
    if (group.classList.contains('open')) closeGroup(group, header);
    else openGroup(group, header);
  }

  /* Abre automaticamente o grupo da página ativa */
  function openActiveGroup(pageId) {
    const page = GO_PAGES.find(p => p.id === pageId);
    if (!page) return;
    const allGroups = document.querySelectorAll('.nav-group');
    allGroups.forEach(g => {
      const hasActive = g.querySelector(`.nav-page-card[data-page="${pageId}"]`);
      if (hasActive) openGroup(g, g.querySelector('.nav-group-header'));
    });
  }

  /* ─────────────────────────────────────────
     RIPPLE EFFECT
  ───────────────────────────────────────── */
  function addRipple(el) {
    const old = el.querySelector('.ripple-effect');
    if (old) old.remove();
    const r = document.createElement('span');
    r.className = 'ripple-effect';
    r.style.left = '50%';
    r.style.top  = '50%';
    el.appendChild(r);
    setTimeout(() => r.remove(), 700);
  }

  /* ─────────────────────────────────────────
     HEADER: ESCONDER AO ROLAR PARA BAIXO
  ───────────────────────────────────────── */
  let lastScrollY = 0;
  let scrollTicking = false;

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        const header = document.getElementById('header');
        const y = window.scrollY;
        if (header) {
          if (y > lastScrollY && y > 72) header.classList.add('hidden');
          else header.classList.remove('hidden');
        }
        lastScrollY = y;
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  /* ─────────────────────────────────────────
     SIDEBAR MOBILE: ABRIR / FECHAR
  ───────────────────────────────────────── */
  function openSidebar() {
    document.getElementById('sidebar')?.classList.add('open');
    document.getElementById('sidebar-overlay')?.classList.add('open');
    document.getElementById('hamburger')?.setAttribute('aria-expanded', 'true');
  }

  function closeSidebar() {
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('sidebar-overlay')?.classList.remove('open');
    document.getElementById('hamburger')?.setAttribute('aria-expanded', 'false');
  }

  window.closeSidebar = closeSidebar;

  document.getElementById('hamburger')?.addEventListener('click', openSidebar);
  document.getElementById('sidebar-overlay')?.addEventListener('click', closeSidebar);

  /* ─────────────────────────────────────────
     TEMA CLARO / ESCURO
  ───────────────────────────────────────── */
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('sf_theme', theme);
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  applyTheme(localStorage.getItem('sf_theme') || 'light');

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  /* ─────────────────────────────────────────
     MODAL DE PROGRESSO
  ───────────────────────────────────────── */
  function buildProgressModal() {
    const body = document.getElementById('modal-body');
    if (!body) return;

    const visited = JSON.parse(localStorage.getItem('sf_visited') || '[]');
    const total   = GO_PAGES.length;
    const done    = visited.length;
    const pct     = Math.round((done / total) * 100);

    let html = `
      <div style="margin-bottom:20px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
          <span style="font-size:var(--text-sm);color:var(--text-secondary)">Progresso geral</span>
          <span style="font-weight:800;font-size:var(--text-sm)">${done}/${total} páginas</span>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" style="width:${pct}%"></div>
        </div>
      </div>`;

    ['entrada','integracao','dengue','icterica','leish'].forEach(blockId => {
      const blk  = GO_BLOCKS[blockId];
      const meta = BLOCK_META[blockId];
      if (!blk) return;
      const blkDone = blk.pages.filter(p => visited.includes(p.id)).length;
      const blkPct  = blk.pages.length ? Math.round((blkDone / blk.pages.length) * 100) : 0;
      html += `
        <div style="margin-bottom:12px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;">
            <span style="font-size:var(--text-sm);font-weight:600;display:flex;align-items:center;gap:6px;">
              <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${meta.color}"></span>
              ${blk.label}
            </span>
            <span style="font-size:var(--text-xs);color:var(--text-muted)">${blkDone}/${blk.pages.length}</span>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width:${blkPct}%;background:${meta.color}"></div>
          </div>
        </div>`;
    });

    body.innerHTML = html;
  }

  document.getElementById('progress-btn')?.addEventListener('click', () => {
    buildProgressModal();
    document.getElementById('progress-modal')?.removeAttribute('hidden');
  });

  document.getElementById('modal-close')?.addEventListener('click', () => {
    document.getElementById('progress-modal')?.setAttribute('hidden', '');
  });

  document.getElementById('progress-modal')?.addEventListener('click', e => {
    if (e.target === document.getElementById('progress-modal')) {
      document.getElementById('progress-modal')?.setAttribute('hidden', '');
    }
  });

  /* ─────────────────────────────────────────
     FUNDO GRADIENTE DINÂMICO
  ───────────────────────────────────────── */
  const bg = document.createElement('div');
  bg.className = 'page-bg';
  bg.id = 'page-bg';
  document.body.insertBefore(bg, document.body.firstChild);

  /* ─────────────────────────────────────────
     INICIALIZAÇÃO
  ───────────────────────────────────────── */
  buildSidebar();

  /* ─────────────────────────────────────────
     ATUALIZAÇÃO DO NAV APÓS TROCA DE PÁGINA
     (chamado pelo router)
  ───────────────────────────────────────── */
  window.GO_UPDATE_NAV = function (pageId) {
    /* Marcar card ativo */
    document.querySelectorAll('.nav-page-card').forEach(c => {
      c.classList.toggle('active', c.dataset.page === pageId);
    });
    /* Abrir grupo correspondente */
    openActiveGroup(pageId);
    /* Atualizar progresso no botão */
    const visited = JSON.parse(localStorage.getItem('sf_visited') || '[]');
    const pct     = Math.round((visited.length / GO_PAGES.length) * 100);
    const lbl     = document.getElementById('progress-label');
    if (lbl) lbl.textContent = pct + '%';
  };

  /* ─────────────────────────────────────────
     UTILITÁRIO: NAVEGAÇÃO ENTRE PÁGINAS
  ───────────────────────────────────────── */
  window.GO_NAV = function (container, page) {
    const idx  = GO_PAGES.findIndex(p => p.id === page.id);
    const prev = GO_PAGES[idx - 1];
    const next = GO_PAGES[idx + 1];

    const nav = document.createElement('div');
    nav.className = 'page-nav';
    nav.innerHTML = `
      ${prev
        ? `<button class="page-nav-btn" data-goto="${prev.id}">← ${prev.label}</button>`
        : '<div></div>'}
      ${next
        ? `<button class="page-nav-btn" data-goto="${next.id}">${next.label} →</button>`
        : '<div></div>'}`;
    container.appendChild(nav);
  };

  /* ─────────────────────────────────────────
     UTILITÁRIO: QUIZ ENGINE
  ───────────────────────────────────────── */
  window.GO_QUIZ = function (container, questions) {
    const section = document.createElement('div');
    section.className = 'quiz-section';
    section.innerHTML = `
      <div class="quiz-header">
        <span style="font-size:1.5rem">🎯</span>
        <h3>Questões de Prova</h3>
        <span class="quiz-tag">ENARE / TEGO / USP-RP</span>
      </div>`;

    questions.forEach((q, qi) => {
      const card = document.createElement('div');
      card.className = 'quiz-card anim-fade-up';
      card.style.animationDelay = (qi * 0.09) + 's';
      const fbId = `qfb-${pageQIndex(qi)}`;

      card.innerHTML = `
        <div class="quiz-number">Questão ${qi + 1}</div>
        <div class="quiz-stem">${q.stem}</div>
        <div class="quiz-options">
          ${q.options.map((opt, oi) => `
            <button class="quiz-option" data-oi="${oi}">
              <span class="opt-letter">${String.fromCharCode(65 + oi)})</span>
              <span>${opt}</span>
            </button>`).join('')}
        </div>
        <div class="quiz-feedback" id="${fbId}"></div>`;

      card.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => {
          if (card.dataset.answered) return;
          card.dataset.answered = '1';
          const oi      = parseInt(btn.dataset.oi);
          const correct = q.correct;
          card.querySelectorAll('.quiz-option').forEach((b, bi) => {
            b.disabled = true;
            if (bi === correct)              b.classList.add('correct');
            else if (bi === oi && oi !== correct) b.classList.add('wrong');
          });
          const fb = document.getElementById(fbId);
          if (fb) {
            const ok = oi === correct;
            fb.className = `quiz-feedback show ${ok ? 'correct-feedback' : 'wrong-feedback'}`;
            fb.innerHTML = `
              <div class="fb-title">${ok ? '✅ Correto!' : '❌ Incorreto'}</div>
              <div>${q.explanation}</div>
              ${q.tip ? `<div style="margin-top:8px;font-style:italic;color:var(--text-muted);font-size:var(--text-xs)">💡 Dica: ${q.tip}</div>` : ''}`;
          }
        });
      });

      section.appendChild(card);
    });

    container.appendChild(section);
  };

  /* ID único para feedbacks de quiz por página */
  let _qCounter = 0;
  function pageQIndex(qi) {
    return `${Date.now()}_${qi}_${_qCounter++}`;
  }

})();
