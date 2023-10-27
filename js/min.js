$(document).ready(function () {
  //Hamburger menu
  $(".nav_menu").click(function () {
    $("header").toggleClass("navbar_mob");
  });
  $("nav a").click(function () {
    $("header").removeClass("navbar_mob");
  });

  //Add active class on nav links
  $("nav a").click(function () {
    $("nav a").removeClass("active");
    $(this).addClass("active");
  });

  //Feedback Slider
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
    $successMsg = $(".success_msg");
  $.validator.addMethod("letters", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
  });
  $form.validate({
    rules: {
      "entry.1780998507": {
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
      $successMsg.addClass("show_msg");
      // Get the form data
      var data = $("form").serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScHy3NYuq8a793TO9a2KobiLke87con-_qB6d5nUXdYLhWxFw/formResponse",
        type: "POST",
        data: data,
        success: function (response) {
          console.log("Success");
        },
        error: function (error) {
          console.log("Error");
        },
      });
      $("#contact_form")[0].reset();
    },
  });
});
