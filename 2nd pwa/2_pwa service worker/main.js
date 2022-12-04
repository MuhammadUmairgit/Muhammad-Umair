// if (navigator.serviceWorker) {
//     console.log("service worker is before registered");
//     navigator.serviceWorker
//     .register("/sw.js")
//     .then (function (registration){
//         registration.onupdatefound = () => {
//             if (confirm ("App update found. Do you want to update now")) {
//                 registration?.active?.postMessage("update_self");
//             }
//         };
//     })
//     .catch(error => console.error (error));
// }



if (navigator.serviceWorker) {
    navigator.serviceWorker
    .register("/sw.js")
    .then ((registration) => {})
    .catch(console.error);
}