const CACHE_NAME = "version-1";
const urlsToCache = [ 'index.html', 'offline.html' ];

const self = this;

// Install SW
// self means SW itself
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME) // This will return promise
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('offline.html'))
            })
    )
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys() // This will return promise
            .then((cacheNames) => Promise.all(
                cacheNames.map((cacheName) => {
                    if(!cacheWhiteList.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            ))
    );
});