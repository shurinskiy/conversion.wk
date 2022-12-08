import scrollLock from 'scroll-lock';
import { menuToggle } from "../../js/lib";

(() => {
	const toggles = document.querySelectorAll('.aside__close, .aside__toggle');
	const sidebar = document.querySelector('.aside');
	const vh = window.innerHeight * 0.01;

	menuToggle(sidebar, toggles, { scrollLock });
	
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	document.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

})();
