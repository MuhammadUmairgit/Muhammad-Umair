if (navigator.serviceWorker) {
    navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {})
    .catch(cosole.log);
}