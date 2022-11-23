self.addEventListener("install", (e) => {
  // self.skipWaiting();
  console.log("Service Worker Install Phase");

  let installPromise = new Promise((resolve, reject) => {
    //some Task
    setTimeout(() => {
      resolve();
    }, 5000);
  });

  e.waitUntil(installPromise);
});

self.addEventListener("activate", (e) => {
  console.log("Service worker activate phase");

  let activatePromise = new Promise((resolve, reject) => {
    //some Task
    setTimeout(() => {
      resolve();
    }, 0);
  });

  e.waitUntil(activatePromise);
});

self.addEventListener("fetch", (event) => {
  console.log(`Fetch Event: ${event.request.url}`);

  if (event.request.url.endsWith("style.css")) {
    event.respondWith(fetch("/style2.css"));
  }

  if (event.request.url.endsWith("/greet")) {
    // let customReq = new Response("Hello World");
    // event.respondWith(customReq);

    let headers = new Headers({ "Content-Type": "text/html" });
    let customReq = new Response("<h1>Hello World</h1>", { headers });

    event.respondWith(customReq);
  }
});

self.addEventListener("message", (e) => {
  // console.log(e.data, "main js message code listening from service worker ");
  // console.log(e.data, " .....");
  // if (e.data == "update_self") {
  //   console.log("service worker is updating manually....");
  //   self.skipWaiting();
  // }

  //chrome window tabs
  //clients = windows
  self.clients.matchAll().then((clients) => {
    clients.forEach((singleClientTab) => {
      // singleClientTab.postMessage("Hello From Service Worker");
      // source id chrome ki tab id
      if (e.source.id == singleClientTab.id) {
        singleClientTab.postMessage("Private Hello From Service Worker");
      }
    });
  });
});
