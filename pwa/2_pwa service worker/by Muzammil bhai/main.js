if (navigator.serviceWorker) {
    console.log("service worker is before registered");
    navigator.serviceWorker
      .register("/sw.js")
      .then(function (registration) {
        // console.log("service worker is after registered");
        // console.log(registration, "registration");
        // console.log(registration.active.state, "registration");
        // let newServiceWorker = registration.installing;
  
        //on every state change in service worker it will fire this method
  
        // newServiceWorker.onstatechange(() => {
        //   console.log(newServiceWorker.state);
        // });
  
        //if you want to send some variable or something to service worker
  
        // registration.active.postMessage("Hello From Main Js File");
  
        registration.onupdatefound = () => {
          if (confirm("App update found. Do you want to update now")) {
            registration?.active?.postMessage("update_self");
          }
        };
      })
      .catch((error) => console.error(error));
  }