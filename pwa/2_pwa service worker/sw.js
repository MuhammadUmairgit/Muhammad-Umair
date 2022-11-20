self.addEventListener("install", (e) => {
    self.skipWaiting();
    console.log("Service Worker Install Phase");

    let installpromise = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve();
        }, 0);
    });

    e.waitUntil(installpromise);
});

self.addEventListener("activate", (e) => {
    console.log("Service Worker Activate Phase");

    let activatePromise = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve();
        }, 0);
    });

    e.waitUntil(activatePromise);
});