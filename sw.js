const staticCacheName = 's-app-v1';

const assetUrls = [  // Исправлено название
    'index.html'
];

self.addEventListener('install', async event => {
    const cache = await caches.open(staticCacheName);
    await cache.addAll(assetUrls);  // Исправлено название
});

self.addEventListener('activate', event => {
    // Активация (можно добавить логику очистки старых кешей)
});

self.addEventListener('fetch', event => {
    console.log('Fetch', event.request.url);
    event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
    const cached = await caches.match(request);  // Исправлено caches.match
    return cached ?? await fetch(request);
}