// Service Worker
const pwaCache = "pwa-cache-1";

self.addEventListener("install", (event) => {
  let cacheReady = caches.open(pwaCache).then((cache) => {
    return cache.addAll([
      "/index.html",
      "/style.css",
      "/thumb.png",
      "/main.js",
    ]);
  });

  event.waitUntil(cacheReady);
});

self.addEventListener("fetch", (event) => {
  //skip for remote fetch (means if you are online returned it)
  if (!event.request.url.match(location.origin)) return;

  let newRes = caches.open(pwaCache).then((cache) => {
    return cache.match(event.request).then((res) => {
      //check request is found in cache
      if (res) {
        console.log(`Serving ${res.url} from cache.`);
        return res;
      }

      //if it is not exist in cache then add it to cache

      return fetch(event.request).then((fetchRes) => {
        cache.put(event.request, fetchRes.clone());
        return fetchRes;
      });
    });
  });

  event.respondWith(newRes);
});
