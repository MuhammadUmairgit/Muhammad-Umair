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
  {
    endpoint: "https://fcm.googleapis.com/fcm/send/fjaBJF51rnI:APA91bEJiCZhQEMGr9qd-MmfXl9U2Abj_MGO3imBJZ-TBXoLEaGzpSDYhluUIj9-5paagWOyAhSHXstCyenWmRmghSiaMyHX14m0VRf86rYZPP-i-e6NKJIlhZqPXs9IzSKsHlDsw3X3",
    expirationTime: null,
    keys: {
        p256dh: "BPkjWCuf-msBEwflvgyYUbEvVdh2aJ_GGJrsqy6Goo3Cw387j3w6z79-Qlq0ywJG5QSh-TyBlg4RVBw9d33IbP8",
        auth: "OzYtc-U7mnYzKXcVvzjdfA"
    }
},
};

webpush.sendNotification(
  pushSubscription,
  "A notification from the push server"
);

console.log("push sent to client");
