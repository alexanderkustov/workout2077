const CACHE_NAME = 'split-sys-app-shell-v5';
const APP_SHELL = [
  './',
  './index.html',
  './404.html',
  './500.html',
  './styles.css',
  './error.css',
  './script.js',
  './admin/index.html',
  './admin/admin.css',
  './admin/admin.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (!event.data || event.data.type !== 'SKIP_WAITING') return;
  self.skipWaiting();
});

function isDocumentRequest(request) {
  if (request.mode === 'navigate') return true;
  const accept = request.headers.get('accept') || '';
  return accept.includes('text/html');
}

function isStaticAsset(pathname) {
  return pathname.endsWith('.css')
    || pathname.endsWith('.js')
    || pathname.endsWith('.png')
    || pathname.endsWith('.webmanifest');
}

async function networkFirstDocument(request) {
  const cache = await caches.open(CACHE_NAME);
  const url = new URL(request.url);
  const isAdminPage = url.pathname.endsWith('/admin') || url.pathname.endsWith('/admin/') || url.pathname.includes('/admin/');
  const fallbackDoc = isAdminPage ? './admin/index.html' : './index.html';

  try {
    const fresh = await fetch(request);
    if (fresh && fresh.ok) cache.put(request, fresh.clone());
    return fresh;
  } catch {
    const cached = await cache.match(request, { ignoreSearch: true })
      || await cache.match(fallbackDoc)
      || await cache.match('./index.html');
    if (cached) return cached;
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

async function staleWhileRevalidate(request, event) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreSearch: true });
  const networkPromise = fetch(request).then(fresh => {
    if (fresh && fresh.ok) cache.put(request, fresh.clone());
    return fresh;
  });

  if (cached) {
    event.waitUntil(networkPromise.catch(() => null));
    return cached;
  }

  return networkPromise;
}

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (isDocumentRequest(request)) {
    event.respondWith(networkFirstDocument(request));
    return;
  }

  if (isStaticAsset(url.pathname)) {
    event.respondWith(staleWhileRevalidate(request, event));
  }
});
