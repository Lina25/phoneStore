//preloader

$(window).load(function () {
	$(".loaded").fadeOut();
	$(".preloader").delay(1000).fadeOut("slow");
});


// go to next section

var gotToNextSection = function () {
	var el = $('.fh5co-learn-more'),
		w = el.width(),
		divide = -w / 2;
	el.css('margin-left', divide);
};


// scroll next

var ScrollNext = function () {
	$('body').on('click', '.scroll-btn', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).closest('[data-next="yes"]').next()).offset().top
		}, 1000, 'easeInOutExpo');
		return false;
	});
};


//animation nav

jQuery(window).scroll(function () {
	var windowScrollPosTop = jQuery(window).scrollTop();

	if (windowScrollPosTop >= 120) {
		jQuery(".top-header").css({
			"background": "#18171D",
		});
		jQuery(".top-header img.logo").css({
			"margin-top": "0px"
		});
		jQuery(".nav-bar").css({
			"margin-top": "6px",
		});
	} else {
		jQuery(".top-header").css({
			"background": "transparent",
		});
		jQuery(".top-header img.logo").css({
			"margin-top": "-5px"
		});
		jQuery(".nav-bar").css({
			"margin-top": "28px"
		});

	}
});


//google map 

var map = new GMaps({
	el: '#map',
	lat: 49.831103,
	lng: 23.969860,
	scrollwheel: false
});

map.addMarker({
	lat: 49.831103,
	lng: 23.969860
});


//scroll up

$(window).scroll(function () {
	if ($(this).scrollTop() > 600) {
		$('.scrollup').fadeIn('slow');
	} else {
		$('.scrollup').fadeOut('slow');
	}
});

$('.scrollup').click(function () {
	$("html, body").animate({
		scrollTop: 0
	}, 1000);
	return false;
});