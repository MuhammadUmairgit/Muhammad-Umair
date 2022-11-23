const webpush = require("web-push");
const vapid = require("./vapid.json");
const pushSubscriptionConstant = require("./pushSubscriptionConstant");

webpush.setVapidDetails(
  "mailto:muzammil.rafay@gmail.com",
  vapid.publicKey,
  vapid.privateKey
);

//you can generate this keys from main.js file after registration service worker
const pushSubscription = {
  endpoint: pushSubscriptionConstant.endpoint,
  keys: {
    auth: pushSubscriptionConstant.keys.auth,
    p256dh: pushSubscriptionConstant.keys.p256dh,
  },
};

webpush.sendNotification(
  pushSubscription,
  "A notification from the push server"
);

console.log("push sent to client");
