import Swiper, { Navigation } from 'swiper';

(() => {

	$('.header__search-toggle').on('click', function(e) {
		$('.header__menu').add(this).toggleClass('switched');
	})

	new Swiper(".header__swiper", {
		spaceBetween: 20,
		modules: [Navigation],
		navigation: {
			prevEl: '.header__prev',
			nextEl: '.header__next',
			disabledClass: 'disabled'
		},
		breakpoints: {
			1280: { 
				slidesPerView: 8,
			},
			1100: { 
				slidesPerView: 7,
			},
			960: { 
				slidesPerView: 6,
			},
			780: { 
				slidesPerView: 5,
			},
			640: { 
				slidesPerView: 4,
			},
			480: { 
				slidesPerView: 3,
			},
			0: { 
				slidesPerView: 2,
			}
		}
	});

})();
