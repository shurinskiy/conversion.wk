import copy from 'copy-to-clipboard';
import scrollLock from 'scroll-lock';
import { addUnderlay, makeModalFrame } from "../../js/lib";

(() => {
	addUnderlay('modal');
	
	document.querySelectorAll('.code').forEach(item => {
		item.addEventListener('click', function(e) {
			const takeCode = () => {
				const promo = item.querySelector('pre');
				const self = this;

				copy(promo.innerText);
				makeModalFrame.call(promo, { 
					scrollLock,
					open: function(el) {
						this.querySelector('.m-promocode__hero > span').innerText = self.dataset.cover;
						this.querySelector('.m-promocode__text > span').innerText = el.innerText;
						this.querySelector('.m-promocode__link').href = el.dataset.url;
					}
				});
			};

			this.classList.contains('active') ? takeCode() : this.classList.add('active');
		});
	});

})();