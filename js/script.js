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

//slider overlay script

$(".slider-block__slider").on("beforeChange", function () {
	$(".slider-block__overlay").fadeOut();
});

$(".slider-block__slider").on("afterChange", function () {
	$(".slider-block__slide.slick-active .slider-block__overlay").fadeIn();
});

//lang dropdown script

$(".footer__lang-dropdown").hide();

$(".footer__lang").click(function () {
	$(".footer__lang-dropdown").slideToggle();
});

//mobile menu

$(".header__burger").click(function () {
	$(".mobile-menu").addClass("active");
	$(".dark").fadeIn();
});

$(".mobile-menu__close").click(function () {
	$(".mobile-menu").removeClass("active");
	$(".dark").fadeOut();
});

// anchor script

var $page = $("html, body");
$('a[href*="#"]').click(function () {
	$page.animate(
		{
			scrollTop: $($.attr(this, "href")).offset().top,
		},
		1000
	);
	// scrollIndex = 1;
	return false;
});
