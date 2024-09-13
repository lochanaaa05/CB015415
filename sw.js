self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
            '/CB015415/',  // Update this path
            '/CB015415/index.html',  // Update this path
            '/CB015415/styles/style.css',  // Update this path
            '/CB015415/scripts/script.js',  // Update this path
            '/CB015415/favicons/favicon-32x32.png',  // Update this path
            '/CB015415/favicons/favicon-16x16.png'  // Update this path
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  