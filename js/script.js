"use strict";

$(document).ready(function () {
  $(".box_main_slide").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true
  });
  $('.show_menu').click(function () {
    $('.menu_respontive_ovelay').css({
      'right': 0
    });
    $('.menu_respontive').css({
      'right': 0
    });
  });
  $('.menu_respontive_ovelay').click(function () {
    $(this).css({
      'right': 'unset'
    });
    $('.menu_respontive').css({
      'right': '-100%'
    });
  });
});