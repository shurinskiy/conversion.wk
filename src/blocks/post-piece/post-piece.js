(() => {
	document.querySelectorAll('.post-piece').forEach((block) => {
		block.querySelector('.post-piece__more')?.addEventListener('click', (e) => {
			e.preventDefault();
			block.querySelector('.post-piece__content').style.maxHeight = 'none';
			e.target.remove();
		});
	});
})();
