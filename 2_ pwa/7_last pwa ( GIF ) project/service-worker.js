const version = "1.1";

const staticCacheName = `static-${version}`;

const appAssets = [
  "index.html",
  "main.js",
  "images/flame.png",
  "images/logo.png",
  "images/sync.png",
  "vendor/bootstrap.min.css",
  "vendor/jquery.min.js",
];

self.addEventListener("install", (event) => {
  const promise = caches
    .open(staticCacheName)
    .then((cache) => cache.addAll(appAssets));

  event.waitUntil(promise);
});

self.addEventListener("activate", (event) => {
  let cleaned = caches.keys().then((keys) => {
    keys.forEach((singleKey) => {
      if (singleKey !== singleCaheName && singleKey.match("static-")) {
        return caches.delete(singleKey);
      }
    });
  });
});

const staticCacheFunction = (request, cacheName = staticCacheName) => {
  return cache.match(request).then((cacheResponse) => {
    if (cacheResponse) return cacheResponse;

    return fetch(request).then((networkResponse) => {
      caches.open(cacheName).then((cache) => cache.put(networkResponse));
      return networkResponse.clone;
    });
  });
};

const fallbackCache = (request, cacheName = staticCacheName) => {
  if (!networkResponse.ok) throw "fetch error";

  caches
    .open(cacheName)
    .then((cache) => {
      cache.put(request, networkRespose);
      return networkResponse.clone();
    })
    .catch((error) => caches.match(request));
};
