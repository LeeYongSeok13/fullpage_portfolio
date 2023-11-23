$(function () {
  $("#fullpage").fullpage({
    anchors: ["firstPage", "secondPage", "thirdPage", "forthPage", "lastPage"],
    sectionsColor: [
      "#ffffff",
      "#e1e1e1",
      "#ffffff",
      "#e1e1e1",
      "#ffffff",
      "e1e1e1",
    ],
    loopTop: false,
    loopBottom: false,
    navigation: true,
    slideNavigation: true,
    onLeave: function (origin, destination, direction, trigger) {
      var origin = this;

      if (origin.index == 0 && direction == "down") {
        $("#header").css("color", "#000000");
      } else if (origin.index == 1 && direction == "up") {
        $("#header").css("color", "#f0f0f0");
      }
    },
  });
  $("#header .container nav ul li:nth-child(1) a").on("click", function () {
    $("#header").css("color", "#f0f0f0");
  });
  $("#header .container nav ul li:nth-child(2) a").on("click", function () {
    $("#header").css("color", "#000000");
  });
  $("#header .container nav ul li:nth-child(3) a").on("click", function () {
    $("#header").css("color", "#000000");
  });
  $("#header .container nav ul li:nth-child(4) a").on("click", function () {
    $("#header").css("color", "#000000");
  });
  $("#header .container nav ul li:nth-child(5) a").on("click", function () {
    $("#header").css("color", "#000000");
  });
  $(".portfolio-inner").slick({
    centerMode: true,
    centerPadding: "30px",
    slidesToShow: 1,
  });

  $(document).ready(function () {
    emailjs.init("iFKPgaCdX3Oroae2T");
    $("input[name=submit]").click(function () {
      var templateParams = {
        name: $("input[id=name]").val(),
        phone: $("input[id=phone]").val(),
        email: $("input[id=email]").val(),
        message: $("textarea[id=message]").val(),
      };

      emailjs.send("gmail", "template_3vfp69m", templateParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED", error);
        }
      );
    });
  });
});
