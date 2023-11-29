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

  $(".do-inner:nth-child(1)").on("click", function () {
    $(".hidden-content:nth-child(1)").addClass("on");
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
        name: $("input[name=name]").val(),
        phone: $("input[name=phone]").val(),
        email: $("input[name=email]").val(),
        message: $("textarea[name=message]").val(),
      };

      emailjs
        .send("service_dfkvpw9", "template_3vfp69m", templateParams)
        .then(function () {
          alert("성공적으로 메일을 보냈습니다!");
        });
    });
  });
});
