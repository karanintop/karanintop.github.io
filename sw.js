const staticCacheName = 'CacheSpace';

const assetUrls = [
  '/index.html', 
  '/style.css'
]

self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(assetUrls)
  console.log('загрузилось')
  
})

self.addEventListener('activate', event => {
  console.log('[SW]: activate')
})

self.addEventListener('fetch', event => {
  console.log('Fetch', event.request.url)
  event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
  const cached = await caches.match(request)
  return cached ?? await fetch(request)
}