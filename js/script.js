(function($){
    
    	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});
    
    
    
    
    
    
		$(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', 0.1);
		}
    
    

$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});

 /*-----------------------*/    
    
$(document).ready(function() {
        $('.header').sticky({
			topSpacing: 0
		});

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})
  /*-----------------------*/      
        $('.sk').waypoint(function(){
            $('.chart').each(function(){
            $(this).easyPieChart({
                    size:140,
                    animate: 2000,
                    lineCap:'butt',
                    scaleColor: false,
                    barColor: '#E87E04',
                    trackColor: 'transparent',
                    lineWidth: 2
                });
            });
        },{offset:'80%'});  
    
    
     /*-----------------------*/ 
    
      	    $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });
    
    
     /*-----------------------*/ 
    
    


    
     })
 /*-----------------------*/ 
    wow = new WOW({
			mobile: false
		});
		wow.init();
    
    
    
    		$('a[href*=#]').bind("click", function(e){
           
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});
    
    
    
    
    
    
})(jQuery);