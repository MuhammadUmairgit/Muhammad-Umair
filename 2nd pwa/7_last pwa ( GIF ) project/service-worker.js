//SW Version
const version = "1.1";

const staticCacheName = `static-${version}`;

//Static Cache Urls
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
  //Remove Old Static Cache
  let cleaned = caches.keys().then((keys) => {
    keys.forEach((singleKey) => {
      if (singleKey !== staticCacheName && singleKey.match("static-")) {
        return caches.delete(singleKey);
      }
    });
  });
});

const staticCacheFunction = (request, cacheName = staticCacheName) => {
  return caches.match(request).then((cacheResponse) => {
    //returned cache response if found
    if (cacheResponse) return cacheResponse;

    //Fallback to network and update this url in to our cache
    return fetch(request).then((networkResponse) => {
      caches
        .open(cacheName)
        .then((cache) => cache.put(request, networkResponse));

      //return clone to network after updating the cache
      return networkResponse.clone();
    });
  });
};

const fallbackCache = (request, cacheName = staticCacheName) => {
  //try network
  return (
    fetch(request)
      .then((networkResponse) => {
        //check if you are not online then throw it and it will go to catch method
        if (!networkResponse.ok) throw "fetch error";

        //update cache

        caches.open(cacheName).then((cache) => {
          cache.put(request, networkResponse);
        });

        //then return the clone response
        return networkResponse.clone();
      })

      //then try the cache for this response
      .catch((error) => caches.match(request))
  );
};

self.addEventListener("fetch", (event) => {
  if (event.request.url.match(location.origin)) {
    //response from cache if available otherwise update the cache
    event.respondWith(staticCacheFunction(event.request));
  } else if (
    event.request.url.match("https://api.giphy.com/v1/gifs/trending")
  ) {
    //first try network otherwise get from cache if you are offline
    event.respondWith(fallbackCache(event.request));
  } else if (event.request.url.match("giphy.com/media")) {
    //if you have this images in cache the return from cache otherwise update in cache
    event.respondWith(staticCacheFunction(event.request, "giphy"));
  }
});
