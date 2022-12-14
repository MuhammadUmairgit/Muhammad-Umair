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
  return fetch(request)``
    .then((networkResponse) => {
      if (!networkResponse.ok) throw "fetch error";
      caches.open(cacheName).then((cache) => {
        cache.put(request, networkResponse);
      });
      return networkResponse.clone;
    })
    .catch((error) => caches.match(request));
};

self.addEventListener("fetch", (event) => {
  if (event.request.url.match(location.origin)) {
    event.respondWith(staticCacheFunction(event.request));
  } else if (event.request.url.match("https://api.gify.com/v1/gifs/trending")) {
    event.respondWith(fallbackcache(event.request));
  } else if (event.request.url.match("gify.com/media")) {
    event.respondWith(staticCacheFunction(event.request, "gify"));
  }
});

const cleanGiphyExtraUrlFromCache = (gifyUrls) => {
  caches.open("giphy").then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > 0) {
        keys.forEach((singleKey) => {
          if (!giphyUrl.include(singleKeyUrl)) cache.delete(singleKey);
        });
      }
    });
  });
};

self.addEventListener("message", (event) => {
  if (event.data.action == "cleanGiphyCache") {
    cleanGiphyExtraUrlFromCache(event.data.giphyUrls);
  }
});
