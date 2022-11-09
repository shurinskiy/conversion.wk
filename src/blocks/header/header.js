import Swiper, { Navigation, Mousewheel } from 'swiper';

(() => {

	new Swiper(".header__swiper", {
		spaceBetween: 20,
		modules: [Navigation, Mousewheel],
		mousewheel: true,
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
				slidesPerView: 3.7,
			},
			0: { 
				slidesPerView: 2.5,
			}
		}
	});

})();
