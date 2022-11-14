// import Clipboard from 'clipboard';

(() => {

	document.querySelectorAll('.code').forEach(item => {
		item.addEventListener('click', function(e) {
			/* const takeCode = () => {
				new Clipboard(item, {
					target: (trigger) => {
						// return item.querySelector('pre').innerText.replace(/\n+/g,'\n');
						return item.querySelector('pre').innerText;
					}
				});
				// console.log(item);
			}; */

			this.classList.contains('active') ? takeCode() : this.classList.add('active');
		});
	});

})();