/* =========================================
   SINDROMES FEBRIS — CAMADA PWA
   ========================================= */

(function () {
  'use strict';

  const CACHE_VERSION = 'infecto-pwa-v20260517-2';

  let deferredPrompt = null;
  let swRegistration = null;
  let waitingWorker = null;
  let reloadStarted = false;

  function isStandaloneMode() {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  }

  function pwaState() {
    return {
      cacheVersion: CACHE_VERSION,
      canInstall: Boolean(deferredPrompt),
      standalone: isStandaloneMode(),
      serviceWorkerReady: Boolean(swRegistration),
      updateAvailable: Boolean(waitingWorker)
    };
  }

  function emitState() {
    window.dispatchEvent(new CustomEvent('infecto:pwa-state', { detail: pwaState() }));
    refreshInstallUi();
  }

  function ensureUpdateButton() {
    let button = document.getElementById('pwa-update-button');
    if (button) return button;

    button = document.createElement('button');
    button.id = 'pwa-update-button';
    button.className = 'pwa-update-button';
    button.type = 'button';
    button.hidden = true;
    button.textContent = 'Atualização disponível';
    button.title = 'Toque para atualizar o app';
    button.setAttribute('aria-label', 'Atualização disponível. Toque para atualizar o app.');
    button.addEventListener('click', applyWaitingUpdate);
    document.body.appendChild(button);
    return button;
  }

  function showUpdateButton(worker) {
    if (!worker) return;
    waitingWorker = worker;
    const button = ensureUpdateButton();
    button.hidden = false;
    emitState();
  }

  function hideUpdateButton() {
    const button = document.getElementById('pwa-update-button');
    if (button) button.hidden = true;
  }

  function trackInstallingWorker(worker) {
    if (!worker) return;

    worker.addEventListener('statechange', () => {
      if (worker.state === 'installed' && navigator.serviceWorker.controller) {
        showUpdateButton(worker);
      }
    });
  }

  function applyWaitingUpdate() {
    const worker = waitingWorker || (swRegistration && swRegistration.waiting);
    if (!worker) return;

    waitingWorker = worker;
    hideUpdateButton();
    worker.postMessage({ type: 'SKIP_WAITING' });
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator) || window.location.protocol === 'file:') {
      emitState();
      return;
    }

    const swUrl = new URL('./sw.js', window.location.href);
    swUrl.hash = '';

    navigator.serviceWorker.register(swUrl.href, { scope: './' })
      .then(registration => {
        swRegistration = registration;
        window.INFECTO_PWA.registration = registration;

        if (navigator.serviceWorker.controller && registration.waiting) {
          showUpdateButton(registration.waiting);
        }

        trackInstallingWorker(registration.installing);

        registration.addEventListener('updatefound', () => {
          trackInstallingWorker(registration.installing);
        });

        registration.update().catch(() => {});
        emitState();
      })
      .catch(error => {
        console.warn('[PWA] Service worker não registrado:', error);
        emitState();
      });

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (reloadStarted) return;
      reloadStarted = true;
      window.location.reload();
    });
  }

  async function promptInstall() {
    if (isStandaloneMode()) {
      refreshInstallUi('App já instalado neste navegador.');
      return;
    }

    if (!deferredPrompt) {
      refreshInstallUi('Instalação automática indisponível neste navegador. Use as instruções manuais abaixo.');
      return;
    }

    const promptEvent = deferredPrompt;
    deferredPrompt = null;
    promptEvent.prompt();

    try {
      const choice = await promptEvent.userChoice;
      const accepted = choice && choice.outcome === 'accepted';
      refreshInstallUi(accepted ? 'Instalação aceita pelo navegador.' : 'Instalação dispensada. As instruções manuais continuam disponíveis.');
    } catch (error) {
      refreshInstallUi('Não foi possível abrir o prompt automático. Use as instruções manuais abaixo.');
    }

    emitState();
  }

  function ensureHeaderInstallButton() {
    const actions = document.querySelector('.header-actions');
    if (!actions || document.getElementById('pwa-header-install-btn')) return;

    const button = document.createElement('button');
    button.id = 'pwa-header-install-btn';
    button.className = 'pwa-header-install-btn';
    button.type = 'button';
    button.hidden = true;
    button.textContent = 'Instalar app';
    button.setAttribute('data-pwa-install', '');
    button.setAttribute('aria-label', 'Instalar app Síndromes Febris');
    actions.insertBefore(button, actions.firstChild);
  }

  function refreshInstallUi(message) {
    ensureHeaderInstallButton();

    const state = pwaState();
    const installButtons = document.querySelectorAll('[data-pwa-install]');
    installButtons.forEach(button => {
      const isHeader = button.id === 'pwa-header-install-btn';
      button.disabled = state.standalone;
      button.hidden = isHeader ? (!state.canInstall || state.standalone) : false;
      if (state.standalone) button.textContent = 'App instalado';
      else if (state.canInstall) button.textContent = 'Instalar app';
      else button.textContent = 'Ver instalação manual';
    });

    const status = document.querySelector('[data-pwa-status]');
    if (status) {
      if (state.standalone) {
        status.textContent = message || 'App em modo standalone. A experiência instalada já está ativa.';
      } else if (state.canInstall) {
        status.textContent = message || 'Este navegador permite instalação automática agora.';
      } else {
        status.textContent = message || 'Se o botão automático não aparecer, siga o passo a passo do seu navegador abaixo.';
      }
    }

    const swStatus = document.querySelector('[data-pwa-sw-status]');
    if (swStatus) {
      swStatus.textContent = state.serviceWorkerReady
        ? `Offline-first ativo. Cache atual: ${state.cacheVersion}.`
        : 'O modo offline será ativado após o primeiro carregamento online em navegador compatível.';
    }

    const updateStatus = document.querySelector('[data-pwa-update-status]');
    if (updateStatus) {
      updateStatus.textContent = state.updateAvailable
        ? 'Há uma nova versão aguardando. Use o botão verde Atualização disponível.'
        : 'Quando houver nova versão real aguardando, o botão verde Atualização disponível aparecerá.';
    }
  }

  function installPageHtml(page) {
    return `
      ${pageHero('PWA · Offline-first', 'Como instalar o app', 'Use a plataforma em tela cheia, com atalho no dispositivo e acesso offline após o primeiro carregamento online.', GRAD_MAP.revisao)}
      <div class="pwa-install-shell">
        <section class="pwa-status-card anim-fade-up">
          <div class="pwa-status-top">
            <span class="pwa-status-pill">Estado do app</span>
            <button class="pwa-install-button" type="button" data-pwa-install>Ver instalação manual</button>
          </div>
          <p data-pwa-status>Verificando suporte de instalação neste navegador.</p>
          <p data-pwa-sw-status>Verificando modo offline.</p>
          <p data-pwa-update-status>Verificando fluxo de atualização.</p>
        </section>

        <section class="pwa-install-grid anim-fade-up delay-1">
          <article class="pwa-step-card">
            <span class="pwa-pill">Benefícios</span>
            <h3>O que muda ao instalar</h3>
            <ul>
              <li>Acesso rápido pela tela inicial ou dock.</li>
              <li>Uso em tela cheia quando o navegador oferece standalone.</li>
              <li>Parte da plataforma disponível offline após o primeiro carregamento online.</li>
              <li>Atualização automática com aviso seguro quando nova versão estiver pronta.</li>
            </ul>
          </article>

          <article class="pwa-step-card">
            <span class="pwa-pill">iPhone/iPad</span>
            <h3>Safari no iOS/iPadOS</h3>
            <ol>
              <li>Abra a plataforma no Safari.</li>
              <li>Toque em Compartilhar.</li>
              <li>Escolha Adicionar à Tela de Início.</li>
              <li>Confirme o nome Infecto.</li>
            </ol>
          </article>

          <article class="pwa-step-card">
            <span class="pwa-pill">Android</span>
            <h3>Chrome no Android</h3>
            <ol>
              <li>Abra a plataforma no Chrome.</li>
              <li>Toque em Instalar app quando o botão aparecer.</li>
              <li>Se não aparecer, abra o menu de três pontos.</li>
              <li>Escolha Instalar app ou Adicionar à tela inicial.</li>
            </ol>
          </article>

          <article class="pwa-step-card">
            <span class="pwa-pill">Desktop</span>
            <h3>Chrome, Edge e Safari no macOS</h3>
            <ol>
              <li>No Chrome/Edge, use o botão de instalação da barra do navegador quando disponível.</li>
              <li>Se necessário, abra o menu do navegador e procure Instalar app.</li>
              <li>No Safari/macOS, use a opção de adicionar à Dock quando o navegador oferecer esse fluxo.</li>
              <li>Se o navegador não oferecer instalação, mantenha o atalho ou use as instruções manuais.</li>
            </ol>
          </article>
        </section>

        <section class="pwa-install-grid anim-fade-up delay-2">
          <article class="pwa-step-card">
            <span class="pwa-pill">Offline</span>
            <h3>Uso offline</h3>
            <ul>
              <li>Entre uma vez online para o service worker salvar o app shell.</li>
              <li>Depois disso, rotas hash e arquivos essenciais continuam disponíveis no cache.</li>
              <li>Reconecte-se para receber conteúdo novo e nova versão do cache.</li>
            </ul>
          </article>

          <article class="pwa-step-card">
            <span class="pwa-pill">Atualização</span>
            <h3>Nova versão</h3>
            <ul>
              <li>Quando uma versão real ficar pronta, aparece o botão verde Atualização disponível.</li>
              <li>Ao tocar, o app envia SKIP_WAITING ao service worker.</li>
              <li>A página recarrega uma única vez para entrar na versão nova.</li>
            </ul>
          </article>
        </section>
      </div>`;
  }

  document.addEventListener('click', event => {
    const installButton = event.target.closest('[data-pwa-install]');
    if (!installButton) return;
    event.preventDefault();
    promptInstall();
  });

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredPrompt = event;
    emitState();
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    refreshInstallUi('App instalado com sucesso.');
    emitState();
  });

  window.addEventListener('hashchange', () => {
    window.setTimeout(() => refreshInstallUi(), 80);
    window.setTimeout(() => refreshInstallUi(), 260);
  });

  window.addEventListener('load', () => {
    ensureUpdateButton();
    ensureHeaderInstallButton();
    registerServiceWorker();
    refreshInstallUi();
  });

  window.INFECTO_PWA = {
    getState: pwaState,
    install: promptInstall,
    applyUpdate: applyWaitingUpdate,
    cacheVersion: CACHE_VERSION,
    registration: null
  };

  GO_RENDER['instalar-app'] = function (el, page) {
    el.innerHTML = installPageHtml(page);
    GO_NAV(el, page);
    refreshInstallUi();
  };
})();
