$(function () {
  $("#fullpage").fullpage({
    anchors: ["firstPage", "secondPage", "thirdPage", "lastPage"],
    sectionsColor: ["#ffffff", "#f9f9f9", "#ffffff", "#f9f9f9", "#ffffff"],
    loopTop: false,
    loopBottom: false,
    navigation: true,
    onLeave: function (origin, destination, direction, trigger) {
      var origin = this;

      if (origin.index == 0 && direction == "down") {
        $("#header").css("color", "#000000");
      } else if (origin.index == 1 && direction == "up") {
        $("#header").css("color", "#f0f0f0");
      }
    },
  });
});
