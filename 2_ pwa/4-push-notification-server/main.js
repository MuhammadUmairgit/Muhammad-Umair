if (navigator.serviceWorker) {
  // Convert key to Uint8Array
  function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration) {
      let publicKey =
        "BLeyCCevQJ-hVpPtcQvBDdKQD35pWH6xrk8tFQZUXcwP7-ghFAmvE2tgd6yf6D6WS401FvyCDwZGnuMb0JT1OnM";

      registration.pushManager
        .getSubscription()
        .then((sub) => {
          //if subscription found then returned it
          if (sub) return sub;

          let applicationServerKey = urlBase64ToUint8Array(publicKey);

          return registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey,
          });
        })
        .then((sub) => sub.toJSON())
        .then(console.log)
        .catch(console.log);
    })
    .catch((error) => console.error(error));
}
