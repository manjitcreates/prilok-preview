// PRILOK Building Materials Trading LLC - Service Worker
// Version: 2026.10.12-v2
const CACHE_NAME = 'prilok-cache-v2';

const PRECACHE_URLS = [
  './',
  './index.html',
  './corporate.html',
  './catalogue.html',
  './mobile.html',
  './presentation.html',
  './visiting_card.html',
  './styles.css',
  './js/data.js',
  './js/lucide.min.js',
  './assets/prilok-logo.jpg',
  './assets/hero-bg.jpg',
  './manifest.json'
];

// Install: Cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate: Clean up older cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch strategy:
// 1. HTML pages: Network-first, fallback to cache (ensures live price & catalog updates)
// 2. Static assets (JS, CSS, Images): Cache-first with network fallback (instant load)
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle HTTP/HTTPS requests
  if (!url.protocol.startsWith('http')) return;

  // Handle HTML document requests (Network first)
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // Handle static assets (Cache first, then network)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached and update cache in background
        fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(request, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }

      // If not in cache, fetch from network
      return fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && request.method === 'GET') {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
        }
        return networkResponse;
      });
    })
  );
});
