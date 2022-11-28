// Service Worker
const pwaCache = "pwa-cache-1";

self.addEventListener("install", (event) => {
  //   self.skipWaiting();
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
  //check network request although it is online or offline
  console.log(event.request.url, "fetch");

  //i want to load index.html file from cache

  if (event.request.url == "/index.html") {
    console.log("it is working");
    let newResponse = caches.open(pwaCache).then((cache) => {
      return cache.match(event.request);
    });

    //response with this url which is from cache
    event.respondWith(newResponse);
  }
});
