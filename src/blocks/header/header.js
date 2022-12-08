import scrollLock from 'scroll-lock';
import { menuToggle } from "../../js/lib";

(() => {

	const toggles = document.querySelectorAll('.header__close, .header__toggle');
	const search_toggle = document.querySelector('.header__search-toggle');
	const top_menu = document.querySelector('.header__menu');
	const vh = window.innerHeight * 0.01;

	search_toggle.addEventListener('click', () => {
		search_toggle.classList.toggle('switched');
		top_menu.classList.toggle('switched');
	});

	menuToggle(top_menu, toggles, { scrollLock });
	
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

})();