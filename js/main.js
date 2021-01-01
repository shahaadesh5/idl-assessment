$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 30) {
        $("nav").addClass("sticky");
    }
    else {
        $('nav').removeClass("sticky");
    }
});

$(".hamburger").click(function(){
    $(".nav-mobile").toggleClass("nav-open");
  });