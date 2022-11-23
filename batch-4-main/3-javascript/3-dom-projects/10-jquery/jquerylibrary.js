//first plugin of jquery
// $.fn.greenify = function () {
//   //current element
//   this.css("color", "green");
// };

//second plugin of jquery

$.fn.greenify = function (options) {
  // This is the easiest way to have default options.
  var settings = $.extend(
    {
      // These are the defaults.
      color: "red",
      backgroundColor: "yellow",
    },
    options
  );

  // Greenify the collection based on the settings variable.
  return this.css({
    color: settings.color,
    backgroundColor: settings.backgroundColor,
  });
};

$("p").greenify({
  color: "purple",
  backgroundColor: "orange",
}); // Makes all the links green.
