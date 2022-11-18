self.addEventListener("install", (e) => {
    self.skipWaiting();
    console.log("Service Worker Install Phase");
  
    // let installPromise = new Promise((resolve, reject) => {
    //   //some Task
    //   setTimeout(() => {
    //     resolve();
    //   }, 3000);
    // });
  
    // e.waitUntil(installPromise);
  });
  
  self.addEventListener("activate", (e) => {
    console.log("Service worker activate phase");
  
    //   let activatePromise = new Promise((resolve, reject) => {
    //     //some Task
    //     setTimeout(() => {
    //       resolve();
    //     }, 3000);
    //   });
  
    //   e.waitUntil(activatePromise);
  });
  
  self.addEventListener("fetch", (event) => {
    // it will recieve all network request whether it is offline mode or it is online mode
    console.log(`Fetch Event: ${event.request.url}`);
  
    if (event.request.url.endsWith("style.css")) {
      //it will override the style.css file to style2.css file
  
      e.respondWith(fetch("/style2.css"));
    }
  });