function tableSort (table, no, ajaxFunction, attribute) {
	// table: select table to affect
	// no: nth-child
	// ajaxFunction: name of function to call
	// attribute: attribute identifier

	var attrBtn = '#'+table+' thead th:nth-child('+no+')';
	if (!$(attrBtn).hasClass('THselected')) {
		// ASC
		eval(ajaxFunction)(1, attribute, 'ASC');

		// SELECT
		$('#'+table+' thead th').each(
			function(index) {
				//alert ('yo');
				$(this).removeClass('THselected');
			}
		);
		// ARROW
		$('#'+table+' thead th i').each(
			function(index) {
				//alert ('yo');
				$(this).removeClass('fas fa-angle-down');
				$(this).removeClass('fas fa-angle-up');
			}
		);
		$(attrBtn).toggleClass('THselected');
		$(attrBtn+' i').addClass('fas fa-angle-down');
	}
	else if ($(attrBtn).hasClass('THselected') && $(attrBtn+' i').hasClass('fas fa-angle-down')) {
		// DESC
		eval(ajaxFunction)(1, attribute, 'DESC');
		// ARROW
		$(attrBtn+' i').removeClass('fas fa-angle-down');
		$(attrBtn+' i').addClass('fas fa-angle-up');
	}
	else {
		// NONE, ASC
		eval(ajaxFunction)(1, '', '');
		// ARROW
		$(attrBtn).removeClass('THselected');
		$(attrBtn+' i').removeClass('fas fa-angle-down');
		$(attrBtn+' i').removeClass('fas fa-angle-up');	
	}
}