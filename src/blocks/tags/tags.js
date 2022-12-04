import enquire from 'enquire.js';
import Swiper, { Mousewheel, FreeMode } from 'swiper';
import { throttle } from "../../js/lib";

(() => {

	const tags = document.querySelector('.tags');

	if(tags) {
		const inner = tags.querySelector('.tags__inner');
		const items = tags.querySelectorAll('.tags__item');
		const button = tags.querySelector('button.tags__more');
		let swiper;

		button.addEventListener('click', function() {
			items.forEach(item => item.style.display = 'block');
			inner.style.flexWrap = 'wrap';
			this.style.display = 'none';
		});
		
		const setCount = throttle(() => {
			let count = [...items].filter((item) => {
				return window.getComputedStyle(item).display == 'none';
			}).length;

			items.forEach(item => item.removeAttribute('style'));
			inner.removeAttribute('style');
			button.removeAttribute('style');
			button.querySelector('span').innerText = count;
		}, 500);

		
		enquire.register("screen and (max-width:780px)", {
			match: () => {
				swiper = new Swiper(tags, {
					modules: [Mousewheel, FreeMode],
					freeMode: true,
					mousewheel: true,
					spaceBetween: 15,
					slidesPerView: 'auto'
				});
				window.removeEventListener("resize", setCount);
			},
			
			unmatch: () => {
				if (swiper !== undefined ) swiper.destroy(true, false);
				window.addEventListener("resize", setCount);
			},
			
			setup: () => {
				setCount();
				window.addEventListener("resize", setCount);
			}
		});
	}

})();
