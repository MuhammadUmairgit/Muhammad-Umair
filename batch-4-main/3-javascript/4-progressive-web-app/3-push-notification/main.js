if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration) {})
    .catch((error) => console.error(error));
}

function showNotification() {
  // https://web.dev/push-notifications-display-a-notification/
  const options = {
    body: "Some Notification information",
    icon: "/thumb.png",
    image: "/thumb.png",
  };
  let notification = new Notification("messages", options);
  notification.onclick = () => {
    console.log("notification clicked!");
  };
}

if (window.Notification) {
  if (Notification.permission == "granted") {
    // showNotification();
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission((permission) => {
      if (permission == "granted") {
        // showNotification();
      }
    });
  }
}
