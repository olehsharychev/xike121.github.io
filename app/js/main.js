$(document).ready(function(){
   var collapseBtn = $('.header__collapse-btn');
   var menu = $('.menu');
   collapseBtn.click(function(){
      menu.slideToggle(500);
      collapseBtn.toggleClass('header__collapse-btn--active');
   });
   $(window).on('resize', function(){
      if ($(document).width() > 1150){
         menu.attr('style', '');
         collapseBtn.removeClass('header__collapse-btn--active');
      }
   });

   $('.fourth-section__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 760,
            settings: {
               arrows: false
            }
         }
      ]
   });
   
   $('.fifth-section__team-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1100,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 700,
            settings: {
               slidesToShow: 2,
               arrows: false
            }
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 1,
               arrows: false
            }
         }
      ]
   });
   
});