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

