const staticCacheName = 's-app-v1';

const assetUrls = [
    'index.html',
    'script.js',
    'style.css'
];

self.addEventListener('install', async event => {
    event.waitUntil(  // Добавлено event.waitUntil для надежности
        caches.open(staticCacheName)
            .then(cache => cache.addAll(assetUrls))
            .catch(err => console.log('Failed to cache assets', err))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        // Очистка старых кешей
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== staticCacheName)
                         .map(name => caches.delete(name))
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        cacheFirst(event.request).catch(() => fetch(event.request))
    );
});

async function cacheFirst(request) {
    const cached = await caches.match(request);
    return cached || fetch(request);  // Упрощенный вариант без ??
}