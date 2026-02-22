const CACHE_NAME = 'split-sys-app-shell-v4';
const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
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
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const url = new URL(request.url);
  const isAdminPage = url.pathname.endsWith('/admin') || url.pathname.endsWith('/admin/') || url.pathname.includes('/admin/');
  const fallbackDoc = isAdminPage ? './admin/index.html' : './index.html';
  try {
    const fresh = await fetch(request);
    if (fresh && fresh.ok) cache.put(request, fresh.clone());
    return fresh;
  } catch {
    const cached = await cache.match(request, { ignoreSearch: true }) || await cache.match(fallbackDoc);
    if (cached) return cached;
    throw new Error('offline');
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;

  const fresh = await fetch(request);
  if (fresh && fresh.ok) cache.put(request, fresh.clone());
  return fresh;
}

function isDocumentRequest(request) {
  if (request.mode === 'navigate') return true;
  const accept = request.headers.get('accept') || '';
  return accept.includes('text/html');
}

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const pathname = url.pathname;
  const isDocRequest = isDocumentRequest(request);
  const isStaticAsset = pathname.endsWith('.css')
    || pathname.endsWith('.js')
    || pathname.endsWith('.png')
    || pathname.endsWith('.webmanifest');

  if (isDocRequest) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (isStaticAsset) {
    event.respondWith(cacheFirst(request));
  }
});
