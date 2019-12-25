$(function() {

	$('.header__slider').slick({
		fade: true,
		infinite: true,
		prevArrow: '<img class ="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
		nextArrow: '<img class ="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
		asNavFor: '.slider-dotshead'
	});

	$('.slider-dotshead').slick({
		dots: true,
		slidesToShow: 4,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.header__slider',
		responsive: [
		{
			breakpoint: 961,
		},
		]
	});

	$('.surf-slider').slick({
		prevArrow: '<img class ="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
		nextArrow: '<img class ="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor:'.slider-map',
		responsive: [
		{
			breakpoint: 1210,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
			}
		},
			{
			breakpoint: 720,
			settings: {
				slidesToShow: 1,
				centerMode: true
			}
		},
		{
			breakpoint: 426,
			settings: {
				slidesToShow: 1,
				centerMode: false
			}
		},
		]
	});

	$('.slider-map').slick({
		arrows: false,
		slidesToShow: 8,
		slidesToScroll: 1,
		asNavFor:'.surf-slider',
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1103,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				centerMode: true
			}
		},
		{
			breakpoint: 720,
			settings: {
				slidesToShow: 1,
				centerMode: true
			}
		},
		]
	});
	$('.slider-map').slick('setPosition');

	$('.shop__slider').slick({
		fade: true,
		infinite: true,
		prevArrow: '<img class ="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
		nextArrow: '<img class ="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">'
	});

	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
	
$('.quantity-up').on('click', function(){
	var spinner = $(this).parents('.quantity');
	var input = spinner.find('input');
	var oldValue = parseFloat(input.val());
	var max = input.attr('max');
	if(oldValue < max) {
		var newVal = oldValue + 1;
	} else {
		var newVal = oldValue;
	}
	input.val(newVal);
});

$('.quantity-down').on('click', function(){
	var spinner = $(this).parents('.quantity');
	var input = spinner.find('input');
	var oldValue = parseFloat(input.val());
	var min = input.attr('min');
	if(oldValue > min) {
		var newVal = oldValue - 1;
	} else {
		var newVal = oldValue;
	}
	input.val(newVal);
});

$('.holder__slider').each(function() {
$('.quantity-button').on('click', function(){
var slider = $(this).parents('.holder-slider__info');
	let summ = $('.summ', slider).data('nights') * $('.nights').val() + $('.summ', slider).data('guests') * $('.guests').val();
	$('.summ', slider).html('$' + summ);
});
});


// let summ = $('.summ').data('nights') * $('.nights').val() + $('.summ').data('guests') * $('.guests').val();
// $('.summ').html('$' + summ);





	
























// $('.quantity-up').on('click', function(){
//             var spinner = $(this).parents('.quantity');
//             input = spinner.find('input');
//             var oldValue = parseFloat(input.val()) + 1;
//             input.val(oldValue);
//  });



















	// $('.quantity').each(function() {
	// 	var spinner = $(this),
	// 	input = spinner.find('input[type="number"]'),
	// 	btnUp = spinner.find('.quantity-up'),
	// 	btnDown = spinner.find('.quantity-down'),
	// 	min = input.attr('min'),
	// 	max = input.attr('max');

	// 	btnUp.click(function() {
	// 		var oldValue = parseFloat(input.val());
	// 		if (oldValue >= max) {
	// 			var newVal = oldValue;
	// 		} else {
	// 			var newVal = oldValue + 1;
	// 		}
	// 		spinner.find("input").val(newVal);
	// 		spinner.find("input").trigger("change");
	// 	});

	// 	btnDown.click(function() {
	// 		var oldValue = parseFloat(input.val());
	// 		if (oldValue <= min) {
	// 			var newVal = oldValue;
	// 		} else {
	// 			var newVal = oldValue - 1;
	// 		}
	// 		spinner.find("input").val(newVal);
	// 		spinner.find("input").trigger("change");
	// 	});
	// });





	// $('.quantity-button').on('click', function() {
	// 	let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
	// 	$('.summ').html('$' + summ);
	// });

	// let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
	// $('.summ').html('$' + summ);


	$('.surfboard-box__circle').on('click', function(){
		$(this).toggleClass('active');
	});

	$('.menu-btn').on('click', function() {
		$('.menu').toggleClass('active');
	});

	new WOW().init();
});








