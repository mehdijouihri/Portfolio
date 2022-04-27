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
  /* java animation folio -----*/
  $(function() {
    $( ".portfolio li" ).draggable();
    $( ".portfolio li" ).on( "dragstart", function( event, ui ) {
      $(this).addClass("active-drag");
    } );
  });

    // animation box education

    const boxSpinning = [
      { transform: 'rotate(0) scale(1)' },
      { transform: 'rotate(180deg) scale(0)' }
    ];

    const boxTiming = {
      duration: 2200,
      iterations: 1,
    }
    
    const box = document.querySelector(".box-container .box");
    
    function anim(e){
      if(e.target !== e.currentTarget){
        box.animate(boxSpinning,boxTiming);
      }
      e.stopPropagation();
    }
    
      box.addEventListener('click',anim, false);