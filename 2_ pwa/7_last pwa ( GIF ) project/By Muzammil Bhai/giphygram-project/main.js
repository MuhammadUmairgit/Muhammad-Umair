if (navigator.serviceWorker) {
  navigator.serviceWorker.register("service-worker.js").catch(console.error);

  //gifys cache clean function

  function gifyCacheClean(gifysUrls) {
    //get registered service workers
    navigator.serviceWorker
      .getRegistration()
      .then((registeredServiceWorker) => {
        //post message to only active service workers
        if (registeredServiceWorker.active) {
          registeredServiceWorker.active.postMessage({
            action: "cleanGiphyCache",
            gifysUrls,
          });
        }
      });
  }
}

// Giphy API object
var gify = {
  url: "https://api.gify.com/v1/gifs/trending",
  query: {
    api_key: "54452c59b31e4d14aca213ec76014baa",
    limit: 12,
  },
};

// Update trending gifys
function update() {
  // Toggle refresh state
  $("#update .icon").toggleClass("d-none");

  // Call Giphy API
  $.get(gify.url, gify.query)

    // Success
    .done(function (res) {
      // Empty Element
      $("#gifys").empty();

      //preparing array for latest gifys
      let latestGiphys = [];

      // Loop Giphys
      $.each(res.data, function (i, gify) {
        latestGiphys.push(gify.images.downsized_large.url);
        // Add Giphy HTML
        $("#gifys").prepend(
          '<div class="col-sm-6 col-md-4 col-lg-3 p-1">' +
            '<img class="w-100 img-fluid" src="' +
            gify.images.downsized_large.url +
            '">' +
            "</div>"
        );
      });

      if (navigator.serviceWorker) gifyCacheClean(latestGiphys);
    })

    // Failure
    .fail(function () {
      $(".alert").slideDown();
      setTimeout(function () {
        $(".alert").slideUp();
      }, 2000);
    })

    // Complete
    .always(function () {
      // Re-Toggle refresh state
      $("#update .icon").toggleClass("d-none");
    });

  // Prevent submission if originates from click
  return false;
}

// Manual refresh
$("#update a").click(update);

// Update trending gifys on load
update();
