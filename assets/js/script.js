$(function () {
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		speed: 1000
	})
});

$(function () {
	$('.slider__item').mouseenter(function (e) {
		let target = e.target.nextElementSibling;
		$(target).css('z-index', '1');
	})
	$('.slider__item').mouseleave(function (e) {
		let target = e.target;
		$(target).css('z-index', '-1');
	})
})

