import Swiper, { Navigation, Mousewheel } from 'swiper';

(() => {

	new Swiper(".header__swiper", {
		modules: [Navigation, Mousewheel],
		mousewheel: true,
		navigation: {
			prevEl: '.header__prev',
			nextEl: '.header__next',
			disabledClass: 'disabled'
		},
		breakpoints: {
			1280: { 
				spaceBetween: 20,
				slidesPerView: 8,
			},
			1100: { 
				spaceBetween: 20,
				slidesPerView: 7,
			},
			960: { 
				spaceBetween: 20,
				slidesPerView: 6,
			},
			780: { 
				spaceBetween: 20,
				slidesPerView: 5,
			},
			640: { 
				spaceBetween: 20,
				slidesPerView: 4,
			},
			480: { 
				spaceBetween: 15,
				slidesPerView: 3.7,
			},
			0: { 
				spaceBetween: 15,
				slidesPerView: 2.7,
			}
		}
	});

})();
