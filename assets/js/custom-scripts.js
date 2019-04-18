(function($) {
  "use strict";
  
  
  
   $('.slider').slick({
         	slidesToShow: 1,
         	slidesToScroll: 1,
         	arrows: false,
         	fade: false,
         	asNavFor: '.slider-nav-thumbnails',
        });
        
        $('.slider-nav-thumbnails').slick({
         	slidesToShow: 6,
         	slidesToScroll: 1,
         	asNavFor: '.slider',
         	dots: true,
         	focusOnSelect: true
        });
        
        //remove active class from all thumbnail slides
        $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
        
        //set active class to first thumbnail slides
        $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
        
         // On before slide change match active thumbnail to current slide
        $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
         	var mySlideNumber = nextSlide;
         	$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
         	$('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
        });
        
        //UPDATED 
          
        $('.slider').on('afterChange', function(event, slick, currentSlide){   
          $('.content').hide(300);
          $('.content[data-id=' + (currentSlide + 1) + ']').show(300);
        });
  

    /*
    |====================
    | Mobile NAv trigger
    |=====================
    */
    
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    

    /*
    |=================
    | Onepage Nav
    |================
    */
        
      $('#zb-header').onePageNav({
          currentClass: 'active', 
          changeHash: false,
          scrollSpeed: 750,
          scrollThreshold: 0.5,
      });
      
       /*
      |
      | NAV FIXED ON SCROLL
      |
      */
      $(window).on('scroll', function() {
          var scroll = $(window).scrollTop();
          if (scroll >= 20) {
              $(".mh-xss-mobile-nav").addClass("st-bg");
          } else {
              $(".mh-xss-mobile-nav").removeClass("st-bg");
          }
      });

    
    /*
    |=================
    | fancybox
    |================
    */
 
  //   $('#play-pause-button'). on("click", function() {
		//   var mediaVideo = $("#bgdvid").get(0);
		//   var mediap = $("#bgdvid");
		//   var playbtn = $("#play-pause-button");
		//   if (mediaVideo.paused) {
		//       mediaVideo.play();
		//       mediap.parent().addClass("gobottom");
		//   } else {
		//       mediaVideo.pause();
		//       mediap.parent().removeClass("gobottom");
		//   }

		// });
		
    /*
    |===============
    | WOW ANIMATION
    |==================
    */
    	var wow = new WOW({
          mobile: false  // trigger animations on mobile devices (default is true)
      });
      wow.init();
      
    
}(jQuery));
