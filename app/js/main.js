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

   $('.menu__item, .scroll-top').click(function(e) {
      e.preventDefault();
      var anchorId = $(this).attr('href');
      var top = $(anchorId).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
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
$(window).scroll(function(){
   if($(window).scrollTop() > 200) {
      $('.top-button').css('opacity', '0.7');
   }
   else {
      $('.top-button').css('opacity', '0');
   }
});

function initMap() {
   var uluru = {lat: 46.446787, lng: 30.749397};
   var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru
   });
   var marker = new google.maps.Marker({
      position: uluru,
      map: map
   });
}