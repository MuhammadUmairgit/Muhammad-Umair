self.addEventListener("push", (e) => {
  let n = self.registration.showNotification(
    "A Notification from the service worker."
  );
  n.waitUntil(n);
});
