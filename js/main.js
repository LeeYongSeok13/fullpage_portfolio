$(function () {
  $("#fullpage").fullpage({
    sectionsColor: ["#ffffff", "#f9f9f9", "#ffffff", "#f9f9f9", "#ffffff"],
    loopTop: false,
    loopBottom: false,
    navigation: true,
    onLeave: function (origin, destination, direction, trigger) {
      var origin = this;

      if (origin.index == 0 && direction == "down") {
        document.querySelector("#header").style.color = "#000000";
        document.querySelector("#fp-nav").style.color = "000000";
      } else if (origin.index == 1 && direction == "up") {
        document.querySelector("#header").style.color = "#f9f9f9";
      }
    },
  });
});
