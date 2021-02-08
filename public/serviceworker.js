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

});

// Activate the SW
self.addEventListener('activate', (event) => {

});