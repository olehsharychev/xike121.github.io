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
});