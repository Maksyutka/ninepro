function sliderInit() {
	$(".slider-block__slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 1000,
		arrows: false,
		dots: true,
		autoplay: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false,
				},
			},
		],
	});
}

//slider overlay script

function sliderOverlayInit() {
	$(".slider-block__slider").on("beforeChange", function () {
		$(".slider-block__overlay").fadeOut();
	});

	$(".slider-block__slider").on("afterChange", function () {
		$(".slider-block__slide.slick-active .slider-block__overlay").fadeIn();
	});
}

//lang dropdown script

function langDropdownInit() {
	$(".footer__lang-dropdown").hide();

	$(".footer__lang").click(function () {
		$(".footer__lang-dropdown").slideToggle();
	});
}

//mobile menu

function mobileMenuInit() {
	$(".header__burger").click(function () {
		$(".mobile-menu").addClass("active");
		$(".dark").fadeIn();
	});

	$(".mobile-menu__close").click(function () {
		$(".mobile-menu").removeClass("active");
		$(".dark").fadeOut();
	});
}

// anchor script

function anchorLinksInit() {
	var $page = $("html, body");
	$('a[href*="#"]').click(function () {
		$page.animate(
			{
				scrollTop: $($.attr(this, "href")).offset().top,
			},
			1000
		);
		return false;
	});
}

//document ready

$(document).ready(function () {
	sliderInit();
	sliderOverlayInit();
	langDropdownInit();
	mobileMenuInit();
	anchorLinksInit();
});
