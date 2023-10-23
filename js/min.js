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
});
