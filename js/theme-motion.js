/* =========================================
   GO PREMIUM — THEME MOTION
   Fase A: Spotlight no cursor
   Fase C: Tilt 3D
   Fase D: (CSS-only — apenas sinaliza)

   Patch leve, performático, isolado.
   Não interfere em nenhuma lógica existente.
   ========================================= */
(function () {
  'use strict';

  /* ─────────────────────────────────────────
     CONFIG — quais elementos recebem os efeitos
     Seletores inclusivos, mas excluímos:
     - itens dentro da sidebar
     - itens dentro do header
     - itens dentro do modal
  ───────────────────────────────────────── */
  const SPOT_SELECTOR =
    '.glass-card, .simulator-card, .quiz-card, .calc-card, ' +
    '.classifier, .diagram-wrap, .mindmap-wrap, .axis-diagram, ' +
    '.parto-card, .versus-card, .mind-map, .lab-ruler, ' +
    '.score-display, .hero-block, .info-card';

  const TILT_SELECTOR =
    '.glass-card, .simulator-card, .quiz-card, .calc-card, ' +
    '.hero-block, .score-display, .versus-card';

  const BTN_SPOT_SELECTOR =
    '.sim-btn, .page-nav-btn, .progress-btn, .quiz-reveal-btn';

  /* Tilt: limites e suavização */
  const TILT_MAX = 6;          /* graus máx em cada eixo */
  const TILT_DAMP = 1.2;       /* divisor — quanto maior, mais suave */
  const HERO_TILT_MAX = 8;     /* hero-blocks aceitam mais */

  /* ─────────────────────────────────────────
     UTILITÁRIOS
  ───────────────────────────────────────── */
  function isInsideExcluded(el) {
    return !!el.closest('.sidebar, .header, .modal-card, .modal-overlay');
  }

  function inView(el) {
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight &&
           r.right > 0  && r.left < window.innerWidth;
  }

  /* ─────────────────────────────────────────
     APLICAR CLASSES (após cada navegação SPA)
     Como o conteúdo é renderizado via router,
     precisamos reaplicar as classes/handlers
     a cada troca de página.
  ───────────────────────────────────────── */
  function applyMotionClasses() {
    /* Spotlight */
    document.querySelectorAll(SPOT_SELECTOR).forEach(el => {
      if (isInsideExcluded(el)) return;
      if (!el.classList.contains('has-spotlight')) {
        el.classList.add('has-spotlight');
        bindSpotlight(el);
      }
    });

    /* Tilt 3D */
    document.querySelectorAll(TILT_SELECTOR).forEach(el => {
      if (isInsideExcluded(el)) return;
      if (!el.classList.contains('has-tilt')) {
        el.classList.add('has-tilt');
        bindTilt(el);
      }
    });

    /* Botões spotlight */
    document.querySelectorAll(BTN_SPOT_SELECTOR).forEach(el => {
      if (isInsideExcluded(el)) return;
      if (!el.classList.contains('btn-spotlight')) {
        el.classList.add('btn-spotlight');
        bindBtnSpotlight(el);
      }
    });
  }

  /* ─────────────────────────────────────────
     SPOTLIGHT — luz seguindo o cursor
     Atualiza --mx/--my via rAF para
     economizar paint (uma atualização por frame)
  ───────────────────────────────────────── */
  function bindSpotlight(el) {
    let rafId = null;
    let pendingX = 50, pendingY = 50;

    function flush() {
      el.style.setProperty('--mx', pendingX + '%');
      el.style.setProperty('--my', pendingY + '%');
      rafId = null;
    }

    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      pendingX = ((e.clientX - r.left) / r.width)  * 100;
      pendingY = ((e.clientY - r.top)  / r.height) * 100;
      if (rafId === null) rafId = requestAnimationFrame(flush);
    }, { passive: true });

    el.addEventListener('mouseenter', () => {
      el.style.setProperty('--spot-active', '1');
    });

    el.addEventListener('mouseleave', () => {
      el.style.setProperty('--spot-active', '0');
    });
  }

  /* ─────────────────────────────────────────
     TILT 3D — inclinação seguindo o cursor
     Usa o mesmo mousemove do spotlight (delegação
     local) para reduzir overhead.
  ───────────────────────────────────────── */
  function bindTilt(el) {
    let rafId = null;
    let pendingRX = 0, pendingRY = 0;
    const isHero = el.classList.contains('hero-block');
    const maxDeg = isHero ? HERO_TILT_MAX : TILT_MAX;

    function flush() {
      el.style.setProperty('--rx', pendingRX.toFixed(2) + 'deg');
      el.style.setProperty('--ry', pendingRY.toFixed(2) + 'deg');
      rafId = null;
    }

    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;   /* 0..1 */
      const py = (e.clientY - r.top)  / r.height;  /* 0..1 */
      /* Centro = 0,0 ; bordas = ±maxDeg */
      pendingRY = ((px - 0.5) *  2) * (maxDeg / TILT_DAMP);
      pendingRX = ((py - 0.5) * -2) * (maxDeg / TILT_DAMP);
      if (rafId === null) rafId = requestAnimationFrame(flush);
    }, { passive: true });

    el.addEventListener('mouseenter', () => {
      el.classList.add('is-tilting');
    });

    el.addEventListener('mouseleave', () => {
      el.classList.remove('is-tilting');
      pendingRX = 0; pendingRY = 0;
      flush();
    });
  }

  /* ─────────────────────────────────────────
     BOTÕES — spotlight ao cursor
  ───────────────────────────────────────── */
  function bindBtnSpotlight(el) {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width)  * 100;
      const y = ((e.clientY - r.top)  / r.height) * 100;
      el.style.setProperty('--bx', x + '%');
      el.style.setProperty('--by', y + '%');
    }, { passive: true });
  }

  /* ─────────────────────────────────────────
     OBSERVER — detectar novo conteúdo SPA
     Cada vez que page-container ganha conteúdo,
     reaplicamos as classes/handlers.
  ───────────────────────────────────────── */
  function setupObserver() {
    const target = document.getElementById('page-container');
    if (!target) {
      /* Tenta novamente quando o DOM estiver pronto */
      setTimeout(setupObserver, 80);
      return;
    }

    /* Aplicar uma vez no que já existe */
    applyMotionClasses();

    /* Observar trocas de conteúdo */
    const obs = new MutationObserver(() => {
      /* debounce simples — agrupar várias mudanças do mesmo render */
      clearTimeout(obs._timer);
      obs._timer = setTimeout(applyMotionClasses, 60);
    });
    obs.observe(target, { childList: true, subtree: true });

    /* Também escutar hashchange como fallback */
    window.addEventListener('hashchange', () => {
      setTimeout(applyMotionClasses, 120);
    });
  }

  /* ─────────────────────────────────────────
     RESPEITAR REDUCED MOTION & TOUCH
  ───────────────────────────────────────── */
  const isTouch = window.matchMedia('(hover: none)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isTouch || reduceMotion) {
    /* Em touch ou reduced-motion: só aplicamos a classe
       (CSS já desliga os efeitos via media queries),
       mas NÃO instalamos os listeners de mousemove
       — economiza memória e evita execução desnecessária */
    function lightApply() {
      document.querySelectorAll(SPOT_SELECTOR).forEach(el => {
        if (!isInsideExcluded(el)) el.classList.add('has-spotlight');
      });
      document.querySelectorAll(TILT_SELECTOR).forEach(el => {
        if (!isInsideExcluded(el)) el.classList.add('has-tilt');
      });
    }
    /* Aplicar com observer leve */
    const target = document.getElementById('page-container');
    if (target) {
      lightApply();
      const obs = new MutationObserver(() => {
        clearTimeout(obs._timer);
        obs._timer = setTimeout(lightApply, 60);
      });
      obs.observe(target, { childList: true, subtree: true });
    } else {
      document.addEventListener('DOMContentLoaded', lightApply);
    }
    return;
  }

  /* =========================================
     FASE E — HALO "VOCÊ ESTÁ AQUI"
     Card que está mais ao centro da viewport
     ganha .is-reading, com pulso suave.
  ========================================= */
  const READING_SELECTOR =
    '.glass-card, .simulator-card, .quiz-card, .calc-card, ' +
    '.classifier, .diagram-wrap, .mindmap-wrap, .axis-diagram, ' +
    '.parto-card, .versus-card, .mind-map, .lab-ruler, ' +
    '.score-display, .info-card';

  let readingObserver = null;
  let readingCurrent = null;
  let readingCandidates = new Map(); /* el -> ratio */

  function setupReadingObserver() {
    if (readingObserver) {
      readingObserver.disconnect();
      readingCandidates.clear();
      if (readingCurrent) {
        readingCurrent.classList.remove('is-reading');
        readingCurrent = null;
      }
    }

    readingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          readingCandidates.set(entry.target, entry.intersectionRatio);
        } else {
          readingCandidates.delete(entry.target);
        }
      });

      /* Escolher o card com maior ratio (mais visível) */
      let best = null;
      let bestRatio = 0;
      readingCandidates.forEach((ratio, el) => {
        if (ratio > bestRatio) {
          best = el;
          bestRatio = ratio;
        }
      });

      /* Só marca como "lendo" se o card está bem visível (>= 60%) */
      if (best && bestRatio >= 0.6) {
        if (readingCurrent && readingCurrent !== best) {
          readingCurrent.classList.remove('is-reading');
        }
        if (readingCurrent !== best) {
          best.classList.add('is-reading');
          readingCurrent = best;
        }
      } else if (readingCurrent) {
        readingCurrent.classList.remove('is-reading');
        readingCurrent = null;
      }
    }, {
      /* Múltiplos thresholds — recalcula em vários pontos */
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
      /* Margem ligeiramente recolhida no topo (header não conta como leitura) */
      rootMargin: '-15% 0px -25% 0px'
    });

    /* Observar todos os cards visíveis */
    document.querySelectorAll(READING_SELECTOR).forEach(el => {
      if (!isInsideExcluded(el)) readingObserver.observe(el);
    });
  }

  /* =========================================
     FASE F — RIPPLE DE COR NAS OPÇÕES DE QUIZ
     Verde se correta, vermelho se errada.
     Detectamos via classe .correct/.wrong que
     o app.js já adiciona após o clique.
  ========================================= */
  function bindQuizRipples() {
    /* Delegação no document — funciona pra qualquer
       quiz-option, mesmo após re-render do SPA */
    if (document._quizRippleBound) return;
    document._quizRippleBound = true;

    document.addEventListener('click', (e) => {
      const opt = e.target.closest('.quiz-option');
      if (!opt) return;
      if (opt.disabled) return;

      /* Calcular posição do clique relativo à opção */
      const r = opt.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      /* Aguardar o app.js classificar como correct/wrong
         (acontece no mesmo tick do clique) */
      requestAnimationFrame(() => {
        const isCorrect = opt.classList.contains('correct');
        const isWrong   = opt.classList.contains('wrong');
        if (!isCorrect && !isWrong) return;

        const ripple = document.createElement('span');
        ripple.className = 'quiz-ripple ' + (isCorrect ? 'correct' : 'wrong');
        ripple.style.left = x + 'px';
        ripple.style.top  = y + 'px';
        opt.appendChild(ripple);

        /* Remover após a animação (700ms + folga) */
        setTimeout(() => {
          if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
        }, 800);
      });
    }, { passive: true });
  }

  /* ─────────────────────────────────────────
     INTEGRAR AS FASES E e F NA INICIALIZAÇÃO
  ───────────────────────────────────────── */
  function fullInit() {
    setupObserver();        /* Fases A e C */
    bindQuizRipples();      /* Fase F */

    /* Fase E — reaplica observer a cada navegação */
    setupReadingObserver();
    const target = document.getElementById('page-container');
    if (target) {
      const obs2 = new MutationObserver(() => {
        clearTimeout(obs2._timer);
        obs2._timer = setTimeout(setupReadingObserver, 120);
      });
      obs2.observe(target, { childList: true, subtree: true });
    }
  }

  /* Inicialização padrão (desktop com hover + motion ok) */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fullInit);
  } else {
    fullInit();
  }
})();
