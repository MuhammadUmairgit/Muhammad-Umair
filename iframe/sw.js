


const pwaCache = "pwa-cache-1";

self.addEventListener("install", (event) => {
  let cacheReady = caches.open(pwaCache).then((cache) => {
    return cache.addAll([
      "/",
      // "/index.html",
      // "/style.css",
      // "/thumb.png",
      // "/main.js",
    ]);
  });

  event.waitUntil(cacheReady);
});

self.addEventListener("activate", (event) => {
  let cacheCleaned = caches.keys().then((keys) => {
    keys.forEach((singleKey) => {
      if (singleKey !== pwaCache) return caches.delete(key);
    });
  });

  event.waitUntil(cacheCleaned);
});

self.addEventListener("fetch", (event) => {
  if (!event.request.url.match(location.origin)) return;

  let newRes = caches.open(pwaCache).then((cache) => {
    return cache.match(event.request).then((res) => {
      if (res) {
        console.log(`Serving ${res.url} from cache.`);
        return res;
      }

      return fetch(event.request).then((fetchRes) => {
        cache.put(event.request, fetchRes.clone());
        return fetchRes;
      });
    });
  });

  event.respondWith(newRes);
});
