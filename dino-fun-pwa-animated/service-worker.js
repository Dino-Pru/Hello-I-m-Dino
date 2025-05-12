const cacheName = 'dino-fun-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/african girl.avif'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
