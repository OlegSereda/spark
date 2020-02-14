$(function() {

	var maxHeight = 0;
 
	$('.includes__item').each(function(){
		if ( $(this).height() > maxHeight ) 
		{
			maxHeight = $(this).height();
		}
	});


	$('.who-worked-slider').slick({
        infinite: true,
        slidesToShow:5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
		autoplaySpeed: 1000,
		fade: false,
        variableWidth: false,
        responsive: [
				
			{
				breakpoint: 1100,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				swipeToSlide: true
				}
			},
			{
				breakpoint: 500,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}			   
		]
    });


    $(".slick-btn.prev").on("click", function() {
      $(this).parent().find('.who-worked-slider').slick("slickPrev");
    });

    $(".slick-btn.next").on("click", function() {
      $(this).parent().find('.who-worked-slider').slick("slickNext");
	});
	

	$('.app-portfolio-slider').slick({
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
		autoplaySpeed: 1000,
		fade: true,
        variableWidth: false        
    });

    $(".app-portfolio-wrap .slick-btn.prev").on("click", function() {
      $(this).parent().find('.app-portfolio-slider').slick("slickPrev");
    });

    $(".app-portfolio-wrap .slick-btn.next").on("click", function() {
      $(this).parent().find('.app-portfolio-slider').slick("slickNext");
    });


	$('.review-slider').slick({
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
		autoplaySpeed: 4000,
		fade: false,
        variableWidth: false        
    });

	$('.menu-click-js').click(function(){
		$('nav.nav-menu-mob').toggleClass('down').removeClass('hide');
		$('nav li a').removeClass('down');		
		$(this).siblings('.checkbox-menu-icon').toggleClass('active')
	  });
	  
	  
	$('nav.nav-menu-mob li a').click(function(){
		  $('menu-click-js').toggleClass('down');
		  //$('.checkbox-menu-icon').removeClass('active');
	});

	$('.parent-submenu').click(function(e){
		e.preventDefault();
		$(this).children('.submenu').slideToggle();
		$(this).toggleClass('active');
	  });
	  
	$(window).resize(function(){
		var w = $(window).width(),
			check = $('.checkbox-menu-icon');

		if(w > 769 ) {
			$('nav.nav-menu-mob').addClass('hide');			
				
		}
		if(w > 769 && check.hasClass('active') ) {			
			$('.checkbox-menu-icon').removeClass('active');
		}

		if(w > 800 ) {
			$('.includes__item').height(maxHeight);
		}else{
			$('.includes__item').height('auto');
		}

	});

	$(window).trigger('resize');

	$('.timer').countTo();

	

	$('.why-choose-tabs  .tabs__item .title-tabs').mouseup(function(e) {
		e.stopPropagation();
		e.stopImmediatePropagation();
		var item = $(this).closest('.tabs__item');
		var text = $(this).siblings('.title-text');
		var isActive = item.hasClass('active');
		
		if ( isActive ) {
			item.removeClass('active');
			text.slideUp();
		} else {
			item.addClass('active');
			text.slideDown();
			item.siblings('.tabs__item.active').removeClass('active')
				.find('.title-text').slideUp();
		}
		return false;
	});

	$('.tabs__item:first > .title-tabs').trigger('mouseup');

	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true
	})


	$('.questions-tabs  .tabs__item .title-tabs').mouseup(function(e) {		
		e.stopPropagation();
		e.stopImmediatePropagation();
		var item = $(this).closest('.tabs__item');
		var text = $(this).siblings('.title-text');
		var isActive = item.hasClass('active');
		
		if ( isActive ) {
			item.removeClass('active');
			text.slideUp();
		} else {
			item.addClass('active');
			text.slideDown();
		}
		return false;
	});

	
	
	
	//$('.includes__item.desktop').height(maxHeight);

	
});


