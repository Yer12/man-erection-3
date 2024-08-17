$(document).ready(function() {

	AOS.init();

	//header
	$(window).scroll(function() {
		if ($(this).scrollTop() > 180){  
			$('header').addClass("sticky");
		} else {
			$('header').removeClass("sticky");
		}
	});

	// menu
	$('.hamburger').click(function(){
		$('.hamburger, nav, body').toggleClass('opened');
	});
	$('.menu li a').click(function(){
		$('.hamburger, nav, body').removeClass('opened');
	});

	//anchor
	$("body").on("click",".menu li a, .anchor", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 70;
		$('body,html').animate({scrollTop: top}, 800);
	});

	//parallax layers
	if ($('#layers').length > 0) {
		var scene = $('#layers').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($('#layers1').length > 0) {
		var scene = $('#layers1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($('#layers2').length > 0) {
		var scene = $('#layers2').get(0);
		var parallaxInstance = new Parallax(scene);
	}

	//youtube
	$('.video-wrapp').click( function () {
		$(this).addClass("active");
		const src = $(this).find('iframe').attr('src');
		const substr = /enablejsapi/ 
		if (!(src.match(substr))) {
			$(this).find('iframe').addClass('played')[0].src += "?enablejsapi=1&autoplay=1";
		}
		ev.preventDefault();
	});

	//counter on scroll
	var scrollCounter = 0;
	if ($('#counter').length > 0) {
		$(window).scroll(function() {
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (scrollCounter == 0 && $(window).scrollTop() > oTop) {
				$('.count').each(function() {
					var $this = $(this),
					countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					}, {
						duration: 2000,
						easing: 'swing',
						step: function() {
							$this.text(Math.floor(this.countNum));
						},
						complete: function() {
							$this.text(this.countNum);
						}
					});
				});
				scrollCounter = 1;
			}
		});
	}

	//squares	
		$(".diseases-row .column").each (
			function() { 
				currentWidth = $(this).outerWidth();
				$(this).outerHeight(currentWidth);
			}
		);	

	//method tabs
	$('.method-row .method-content:nth-child(n+2)').hide();
	$(".method-panel .method-nav").click(function() { 
		$(".method-panel .method-nav").removeClass("active");
		$(this).addClass("active");
		var indexTab = $(".method-panel .method-nav").index(this) + 1;
		$('.method-row .method-content').hide();
		$('.method-row .method-content').filter(':nth-child('+indexTab+')').fadeIn(1000); 
	});

	//certificate tabs
	$('.certificate-row .certificate-content:nth-child(n+2)').hide();
	$(".certificate-panel .certificate-nav").click(function() { 
		$(".certificate-panel .certificate-nav").removeClass("active");
		$(this).addClass("active");
		var indexTab = $(".certificate-panel .certificate-nav").index(this) + 1;
		$('.certificate-row .certificate-content').hide();
		$('.certificate-row .certificate-content').filter(':nth-child('+indexTab+')').fadeIn(1000); 
	});

	//reviews slider
	$('.reviews-slider').not('.unslick').each(function() {
		var slickInduvidual = $(this);
		slickInduvidual.slick({
			prevArrow:'<button class="prev"><img src="images/arrow-right.svg" /></button>',
			nextArrow:'<button class="next"><img src="images/arrow-right.svg" /></button>',
			appendArrows: $(this).parents('.sl-wrapper').find('.slider-arrows'),
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false, 
			infinite: true,
			fade: true,
		});
	});
	//reviews slider
	$('.components-row__items').slick({
		prevArrow:$('.components__arrows--left'),
		nextArrow:$('.components__arrows--right'),
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
	});

});
