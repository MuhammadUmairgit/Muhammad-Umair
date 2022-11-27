self.addEventListener("push", (event) => {
  let n = self.registration.showNotification(
    "A Notification from the service worker."
  );
  event.waitUntil(n);
});
