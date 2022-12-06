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
      if (singleKey !== staticCacheName && singlecache.match("static-")) {
        return caches.delete(singleKey);
      }
    });
  });
});
