(() => {

	$('.filter__list-item_haschild').on('click', (e) => {
		$(e.target).next('ul').slideToggle('fast');
	});

})();