// Progressive Enhancement (SW supported)
// // if ('serviceWorker' in navigator) {
// if (navigator.serviceWorker) {
//   // Register the SW
//   navigator.serviceWorker.register('/sw.js').then((registration) => {
//   }).catch(console.log);
// }

const cacheName = "v1";

caches.open(cacheName).then((cache) => {
  return cache.add("/index2.html");
});

const cacheName2 = "v2";
caches.open(cacheName2).then((cache) => {
  return cache.addAll(["/index.html", "/style.css", "/thumb.png", "/main.js"]);
});

caches.open(cacheName2).then((cache) => {
  return cache.delete("/thumb.png").then((response) => {
    console.log("cache delete response", response);
  });
});

caches.open(cacheName2).then((cache) => {
  cache.keys().then((keys) => {
    console.log({ keys });
    keys.forEach((request, index, array) => {
      console.log({ request, index, array });
      //   cache.delete(request)
    });
  });
});

caches.open(cacheName2).then((cache) => {
  cache.match("/index.html").then((response) => {
    console.log({ response });
  });

  cache.match("/aaaaaindex.html").then((response) => {
    console.log({ response });
  });
});

//need clarification
caches.open(cacheName).then((cache) => {
  cache.match("/index2.html").then((response) => {
    if (response) {
      caches.open(cacheName2).then((cache2) => {
        //put means update
        cache2.put("/index.html", response);
      });
    }
  });
});