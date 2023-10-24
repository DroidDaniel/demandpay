$(document).ready(function () {
  $(".nav_menu").click(function () {
    $("header").toggleClass("navbar_mob");
  });
  $("nav a").click(function () {
    $("header").removeClass("navbar_mob");
  });
});

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    pauseOnHover: true,
  });

  //validation
  var $form = $("form"),
    $successMsg = $(".alert");
  $.validator.addMethod("letters", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
  });
  $form.validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      // message: {
      //   required: true,
      //   minlength: 20,
      // },
    },
    messages: {
      email: "Please Enter valid email address",
      //message: "Please Enter your message",
    },
    submitHandler: function () {
      $successMsg.css("opacity", "1");
    },
  });
});
