$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function() {
        $('#menu').removeClass('fa-bar');
        $('header').removeClass('toggle');
    });
});


const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar"
    }
  });
  