import Swiper, { Navigation } from 'swiper';

(() => {

	new Swiper(".post-reviews__slider", {
		modules: [Navigation],
		spaceBetween: 20,
		// loop: true,
		navigation: {
			nextEl: '.post-reviews__next',
			prevEl: '.post-reviews__prev',
			disabledClass: 'disabled'
		},
		breakpoints: {
			480: { 
				slidesPerView: 2.0,
			},
			0: { 
				slidesPerView: 1.0,
			}
		}
	});

})();
