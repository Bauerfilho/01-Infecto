/* =========================================
   SINDROMES FEBRIS — SERVICE WORKER PWA
   Cache versionado: infecto-pwa-v20260517-3
   ========================================= */

const CACHE_NAME = 'infecto-pwa-v20260517-3';
const CACHE_PREFIX = 'infecto-pwa-';

const APP_SHELL = [
  './',
  './index.html',
  './offline.html',
  './manifest.webmanifest',
  './css/style.css',
  './css/animations.css',
  './css/components.css',
  './css/theme.css',
  './css/theme-glass.css',
  './css/theme-motion.css',
  './css/pwa.css',
  './js/data.js',
  './js/pages.js',
  './js/router.js',
  './js/app.js',
  './js/theme-enhancer.js',
  './js/theme-motion.js',
  './js/pwa.js',
  './assets/icons/icon-72.png',
  './assets/icons/icon-96.png',
  './assets/icons/icon-128.png',
  './assets/icons/icon-144.png',
  './assets/icons/icon-152.png',
  './assets/icons/icon-180.png',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-384.png',
  './assets/icons/icon-512.png',
  './assets/icons/maskable-192.png',
  './assets/icons/maskable-512.png'
];

async function cacheAppShell() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(APP_SHELL);
}

async function removeOldCaches() {
  const keys = await caches.keys();
  await Promise.all(
    keys
      .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map(key => caches.delete(key))
  );
}

async function cachedIndexOrOffline() {
  return (
    await caches.match('./index.html', { ignoreSearch: true }) ||
    await caches.match('./', { ignoreSearch: true }) ||
    await caches.match('./offline.html', { ignoreSearch: true }) ||
    new Response('Você está offline.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    })
  );
}

async function handleNavigation(request) {
  const cachedShell = await caches.match('./index.html', { ignoreSearch: true });
  if (cachedShell) return cachedShell;

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put('./index.html', response.clone());
    }
    return response;
  } catch (error) {
    return cachedIndexOrOffline();
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request, { ignoreSearch: true });
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return cachedIndexOrOffline();
  }
}

async function staleWhileRevalidate(request) {
  const cached = await caches.match(request, { ignoreSearch: true });

  const networkFetch = fetch(request)
    .then(response => {
      if (response && response.ok) {
        caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
      }
      return response;
    })
    .catch(() => null);

  if (cached) {
    networkFetch.catch(() => {});
    return cached;
  }

  return (await networkFetch) || cachedIndexOrOffline();
}

self.addEventListener('install', event => {
  event.waitUntil(cacheAppShell());
});

self.addEventListener('activate', event => {
  event.waitUntil(
    removeOldCaches().then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', event => {
  const { request } = event;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(request));
    return;
  }

  const isAppShellAsset = APP_SHELL.some(path => {
    const assetUrl = new URL(path, self.location.href);
    return assetUrl.pathname === url.pathname;
  });

  event.respondWith(isAppShellAsset ? cacheFirst(request) : staleWhileRevalidate(request));
});
